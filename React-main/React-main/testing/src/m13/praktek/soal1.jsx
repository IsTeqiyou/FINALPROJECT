import axios from "axios";
import { useState, useEffect } from "react";

export default function CobaAxios2() {
  const [weather, setWeather] = useState(null); // Inisialisasi null untuk pengecekan data

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
      )
      .then((response) => {
        setWeather(response.data.current_weather); // Simpan data cuaca dari API
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Tidak ada dependensi agar hanya dipanggil sekali

  return (
    <div>
      {weather ? (
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Wind Speed: {weather.windspeed} m/s</li>
          <li>Wind Direction: {weather.winddirection}°</li>
        </ul>
      ) : (
        <p>Loading...</p> // Tampilkan pesan loading jika data belum ada
      )}
    </div>
  );
}