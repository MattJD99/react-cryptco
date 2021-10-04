import React, {useState, useEffect} from "react";
import { Router, Switch } from 'react-router-dom';
import './App.css';
import Search from "./Search";
import Coin from "./Coin";
import NavBar from "./NavBar";
import Favorites from "./Favorites";
import Home from "./Home"

function App() {

  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(data => setCoins(data))
    .then(coins.map(coin => {
      key=coin.id,
      name=coin.name,
      price=coin.current_price,
      image=coin.image,
      symbol=coin.symbol,
      priceChange=coin.price_change_percentage_24h,
      marketCap=coin.market_cap
    }))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch> 
        <Router>
          <Search coins={coins} />
        </Router>
        <Router exact path="/Coin">
          <Coin 
            key={key}
            name={name}
            price={price}
            image={image}
            symbol={symbol}
            priceChange={priceChange}
            marketCap={marketCap} />
        </Router>
        <Router exact path="/">
          <Home />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
