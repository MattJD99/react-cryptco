import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Search from './Search';
import Portfolio from "./Portfolio";
import Coin from "./Coin";
import Homepage from "./Homepage"

function App() {

  const [coins, setCoins] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response => response.json())
    .then(data => setCoins(data))
  }, [])

  useEffect(() => {
    fetch("https://project-2-cryptoco.herokuapp.com/favorites")
    .then(response => response.json())
    .then(data => setPortfolio(data))
  })

  const allCoins = coins.map(({ id, name, symbol, current_price, image, price_change_percentage_24h, market_cap }) => {
    return (
    <div key={id}>
        <Coin    
            name={name}
            symbol={symbol}
            price={current_price}
            image={image}
            priceChange={price_change_percentage_24h.toFixed(2)}
            marketCap={market_cap}
        />
    </div>
  )})

  return (
    <Router>
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/search">
            <Search coins={coins} />
          </Route>
          <Route path="/home">
          <h1 className="coin-text">CryptoCo</h1>
            {allCoins}
          </Route>
          <Route path="/portfolio">
            <Portfolio portfolio={portfolio} setPortfolio={setPortfolio} />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
      </Switch> 
    </div>
    </Router>
  )
  }

export default App;