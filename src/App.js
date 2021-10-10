import React from 'react';
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          Name="custom Bowl"
          calories='120Kcal '
          amount='100'
          title="List of ingredients like ing1, ing2,ing3,ing4"
          images="../images/item.png"
          newPrice="9999"
          alt="cart-item"
        />
        </div>
    </div>
  );
}
export default App;