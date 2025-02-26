import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Apt.css";



// import { use } from "react";

const CurrencyFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return <span>{formattedNumber}</span>;
};

const Product = ({ product, onChange }) => {
  const formattedPrice = <CurrencyFormatter number={product.price} />;
  const [count, setCount] = useState(0);
  const totalPrice = count * product.price;

  const handleTambah = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice + product.price);
  };

  const handleKurang = () => {
    const newCount = count ? count - 1 : 0;
    setCount(newCount);
    onChange(product.id, newCount, totalPrice - product.price);
  };

  const handleClick = () => {
    window.open(`/product/${product.id}`, "_self");
  };

  return (
    <div className="product" data-id={product.id} onClick={handleClick}>
      <img src={product.image} className="product-image" alt="" />
      <div className="product-details">
        <div className="product-text">
          <div>
            <h2>{product.title}</h2>
            <p>{formattedPrice}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="counter-container">
          <div className="counter-button">
            <button className="tambah" onClick={handleTambah}>
              Tambah
            </button>
            <button className="kurang" onClick={handleKurang}>
              Kurang
            </button>
          </div>
          <div className="counter">
            <p>{count}</p>
          </div>
        </div>
      </div>
      {count ? (
        <p className="total-price">
          Total Harga: <CurrencyFormatter number={totalPrice} />
        </p>
      ) : null}
    </div>
  );
};

const Summary = ({ summary }) => {
  const totalHargaKeseluruhan = summary.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  return (
    <div className="summary">
      <h2>Ringkasan Pembelian</h2>
      <ul>
        {summary
          .filter((product) => product.quantity > 0)
          .map((product) => (
            <li key={product.id}>
              {product.title} x {product.quantity} ={" "}
              <CurrencyFormatter number={product.totalPrice} />
            </li>
          ))}
      </ul>
      <h3>
        Total Keseluruhan: <CurrencyFormatter number={totalHargaKeseluruhan} />
      </h3>
    </div>
  );
};

const ProductList = () => {
  const [summary, setSummary] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleProductChange = (id, quantity, totalPrice) => {
    setSummary((prevSummary) => {
      const productIndex = prevSummary.findIndex(
        (product) => product.id === id
      );
      if (productIndex === -1 && quantity > 0) {
        return [
          ...prevSummary,
          {
            id,
            title: products.find((p) => p.id === id).title,
            quantity,
            totalPrice,
          },
        ];
      } else if (quantity > 0) {
        const newSummary = [...prevSummary];
        newSummary[productIndex] = {
          ...newSummary[productIndex],
          quantity,
          totalPrice,
        };
        return newSummary;
      } else {
        return prevSummary.filter((product) => product.id !== id);
      }
    });
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onChange={handleProductChange}
            className="productOuter"
          />
        ))}
      </div>
      <Summary summary={summary} />
    </div>
  );
};

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <div className="product-detail-wrapper">
        <img src={product.image} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <CurrencyFormatter number={product.price} />
          <p>{product.description}</p>
        </div>
      </div>
      <Link to={"/"} className="back-button">
        Back
      </Link>
    </div>
  );
}

export { ProductList, ProductDetail };