import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]); // Default value adalah array kosong

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]); // Tambahkan item baru ke dalam array
  };

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

