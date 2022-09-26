import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
  // map each stock in the array and store off the name & symbol
  const stockList = props.stockData.stocks.map((stock, index) => {
    const { name, symbol } = stock;

    //Create the individual stock link url and include in the final return that will be rendered
    return (
      <Link key={index} to={`/stocks/${symbol}`}>
        <h2>{name}</h2>
      </Link>
    );
  })

  //Return the final JSX including the links for each stock
  return (
    <div className="dashboardContainer">
      <h1>This is the Dashboard Component</h1>
      {stockList}
    </div>
  )
};

export default Dashboard;