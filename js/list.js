import React from 'react';
import Item from './Item';

class ListPage extends React.Component {
  render() {
    const items = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 },
      { id: 4, name: 'Item 4', price: 40 },
      { id: 5, name: 'Item 5', price: 50 },
      { id: 6, name: 'Item 6', price: 60 },
      { id: 7, name: 'Item 7', price: 70 },
      { id: 8, name: 'Item 8', price: 80 },
      { id: 9, name: 'Item 9', price: 90 },
      { id: 10, name: 'Item 10', price: 100 },
      { id: 11, name: 'Item 11', price: 110 },
      { id: 12, name: 'Item 12', price: 120 },
      { id: 13, name: 'Item 13', price: 130 },
      { id: 14, name: 'Item 14', price: 140 },
      { id: 15, name: 'Item 15', price: 150 },
    ];

    return (
      <div>
        {items.map(item => (
          <Item key={item.id} item={item} addToCart={this.props.addToCart} />
        ))}
      </div>
    );
  }
}

export default ListPage;
