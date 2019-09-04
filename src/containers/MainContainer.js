import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {stocksArray: [], portfolioArray: [], sortBy: '' };
  
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(data => this.setState({ stocksArray: data})
  )}

  handleRadioToAlphabetically = () => {
    this.setState({ sortBy: 'Alphabetically' })
  }
  handleRadioToPrice = () => {
    this.setState({ sortBy: 'Price' })
  }

  clickHandler = stockObj => {
    let newArray = [stockObj, ...this.state.portfolioArray.filter(stock => stock.id !== stockObj.id)]
    this.setState({ portfolioArray: newArray });
  };

  portfolioClickHandler = stockObj => {
    let newArray = this.state.portfolioArray.filter(stock => stock.id !== stockObj.id)
    this.setState({ portfolioArray: newArray });
   };

   sortStocks = () => {
     console.log("works")
    if (this.state.sortBy === 'Alphabetically') {
      return this.state.stocksArray.slice().sort((a,b) => a.ticker.localeCompare(b.ticker))
    } else {
      return this.state.stocksArray
    }
  }
  render() {
    return (
      <div>
        <SearchBar 
        sortBy={this.state.sortBy}
        handleRadioToAlphabetically={this.handleRadioToAlphabetically}
        handleRadioToPrice={this.handleRadioToPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.sortStocks()}
              clickHandler={this.clickHandler} />

            </div>
            <div className="col-4">

              <PortfolioContainer
              stocks={this.state.portfolioArray}
              clickHandler={this.portfolioClickHandler}
              />
            </div>
          </div> 
      </div>
    );
  }

}

export default MainContainer;
