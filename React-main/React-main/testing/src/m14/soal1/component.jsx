import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export function MapBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((response) => {
        setBooks(response.data.items);
      });
  }, []);
  return (
    <div className="book-list-container">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
      {books.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export function BookCard({ book }) {
  function handleClick() {
    window.open(`/books/${book.id}`, "_self");
  }

  return (
    <div onClick={handleClick} className="book-card">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      <div className="book-card-info">
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
      <p className="book-card-desc">{book.volumeInfo.description}</p>
    </div>
  );
}

export function BooksDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        setBook(response.data);
      });
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <div className="book-detail-wrapper">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <div>
          <h1>{book.volumeInfo.title}</h1>
          <p>{book.volumeInfo.authors.join(", ")}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
      {book.volumeInfo.description}
      <Link to={"/"} className="back-button">
        Back
      </Link>
    </div>
  );
}

