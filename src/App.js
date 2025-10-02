import React, { useState } from "react";
import "./App.css";

const routes = [
  { from: "Bhubaneswar", to: "Puri", distance: 125 },       // 125 km → 1500₹
  { from: "Berhampur", to: "Bhubaneswar", distance: 250 }   // 250 km → 3000₹
];

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(null);

  const handleGo = () => {
    if (!from || !to) {
      alert("Please select both From and To locations");
      return;
    }

    const route = routes.find(
      (r) =>
        (r.from === from && r.to === to) || (r.from === to && r.to === from)
    );

    if (route) {
      const price = route.distance * 12; // ₹12 per km
      setResult({ distance: route.distance, price });
    } else {
      setResult({ error: "No route found for the selected locations." });
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Samaleswari Travels</h1>
        <p>Your trusted travel partner in Odisha</p>
      </header>

      <div className="form-container">
        <div className="dropdowns">
          <label>From:</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Select</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Puri">Puri</option>
            <option value="Berhampur">Berhampur</option>
          </select>

          <label>To:</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Select</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Puri">Puri</option>
            <option value="Berhampur">Berhampur</option>
          </select>
        </div>

        <button onClick={handleGo} className="go-button">
          Go
        </button>

        {result && (
          <div className="result">
            {result.error ? (
              <p className="error">{result.error}</p>
            ) : (
              <>
                <p>Distance: {result.distance} km</p>
                <p>Total Price: ₹{result.price}</p>
              </>
            )}
          </div>
        )}
      </div>

      <footer className="footer">
        <p>Contact: +91-9876543210 | info@samaleswaritravels.com</p>
      </footer>
    </div>
  );
};

export default App;
