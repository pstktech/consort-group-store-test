import React from 'react';

class Item extends React.Component {
  handleClick = () => {
    this.props.addToCart(this.props.item);
    alert(`${this.props.item.name} has been added to your cart`);
  };

  render() }

  const products = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 100) + 1 // Random price between 1 and 100
  }));
  
  export default products;
  