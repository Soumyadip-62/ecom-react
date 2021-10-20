import React, { useState } from "react";
import { Link } from "react-router-dom";
import keyboard from "../Images/keyboard.png";
import headphone from "../Images/headphone.png";
const Home = () => {
  const category = require("../Database/categories.json");
  const [cat, Setcat] = useState(category);

  return (
    <div>
      <div className="category">
        {cat.map((cat) => (
          <>
            <img
              src={cat.name === "Keyboards" ? keyboard : headphone}
              alt="not found"
            />
            <h1 key={cat.id}>
              <Link to={`/category/${cat.id}`}>{cat.name}</Link>
            </h1>
            <p>{cat.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
