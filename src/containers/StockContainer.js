import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let stockComponents = this.props.stocks.map(stock => (
      <Stock
      key={stock.id}
      stockInfo={stock}
      clickHandler={this.props.clickHandler} /> ))
    return (
      <div>
        <h2>Stocks</h2>
        {
          stockComponents
        }
      </div>
    );
  }

}

export default StockContainer;
