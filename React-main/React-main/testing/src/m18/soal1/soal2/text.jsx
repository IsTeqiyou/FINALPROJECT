import axios from "axios";
import { useState } from "react";

const UpdateItem = ({ id, currentName, onUpdateSuccess }) => {
  const [name, setName] = useState(currentName);

  const handleUpdate = async () => {
    try {
      await axios.put(`https://api.example.com/items/${id}`, { name });
      alert("Data berhasil diperbarui!");
      onUpdateSuccess(); // Refresh data setelah update
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Gagal memperbarui data!");
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateItem;