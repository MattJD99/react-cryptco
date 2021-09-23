import React, {useState, useEffect} from "react";
// import Fetch from "./Fetch";
import './App.css';
import Coin from "./Coin";

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setCoins(data))
    .catch(error => console.log(error))  
  }, [])

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
          <form>
            <input className="coin-input" type="text" placeholder="Search"
            onChange={handleChange}/>
          </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id}
          name={coin.name}
          price={coin.price}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;
