import React from "react";

const Cart = ({ id, name, email }) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow">
    <img src={`https://robohash.org/${id}?200*300`} alt="robo" />
    <h2>{name}</h2>
    <p>Email:{email}</p>
  </div>
);

export default Cart;
