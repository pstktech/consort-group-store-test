import React from 'react';
import ListPage from './ListPage';
import CartPage from './CartPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item],
    });
  }

  render() {
    return (
      <div>
        <ListPage addToCart={this.addToCart} />
        <CartPage cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
