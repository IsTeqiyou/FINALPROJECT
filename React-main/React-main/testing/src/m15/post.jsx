import { useState } from "react";
import axios from "axios";

const SimpleUseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset state untuk response dan error
    setResponseData(null);
    setError(null);

    // Kirim data ke server menggunakan axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
        email: email,
      })
      .then((response) => {
        setResponseData(response.data); // Simpan respons ke state
      })
      .catch((error) => {
        setError(error); // Simpan error ke state
      });
  };

  return (
    <div>
      <h1>Submit User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Tampilkan Response Data */}
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {/* Tampilkan Error */}
      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{error.message}</pre>
        </div>
      )}
    </div>
  );
};

export default SimpleUseForm;