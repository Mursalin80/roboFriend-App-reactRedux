import React from "react";
import Cart from "./Cart";

const CartList = ({ robots }) => {
  const roboComp = robots.map((user, i) => {
    return <Cart id={user.id} name={user.name} email={user.email} key={i} />;
  });
  return <div>{roboComp}</div>;
};
export default CartList;
