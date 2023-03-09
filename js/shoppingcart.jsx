import React, { useState } from "react";

function addToCart(product) {
  const [cart, setCart] = useState([]);

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    setCart(
      cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
}

export default addToCart;
