import React from "react";

const Stock = (props) => {
  //filter returns a new array based on if there is a match (true) or no match (false).
  //If false, the stock will not be in the new array
  //We need to get the [0] of the filtered array and store the stock object in stock
  const stock = props.stockData.stocks.filter((stock) => {
    //if the stock symbol matches the parameter return true
    return (stock.symbol === props.match.params.symbol)
  })[0]
  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}

// We must export the component to use it in other files
export default Stock;