import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

  return (
    <div className="dashboardCont">
      <h1>This is the Dashboard Component</h1>
      {props.stockData.stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;