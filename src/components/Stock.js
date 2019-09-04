import React from 'react'

class Stock extends React.Component {
  render(){
return(
  <div>

    <div className="card">
      <div className="card-body" onClick={() => this.props.clickHandler(this.props.stockInfo)}>
        <h5 className="card-title">{
            this.props.stockInfo.name
          }</h5>
        <p className="card-text" >
            {this.props.stockInfo.price}
        </p>
      </div>
    </div>


  </div>)
  }
}

export default Stock
