import React, { useState } from "react";
import Coin from "./Coin";

function Search({ coins }) {
    const [search, setSearch] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setSearch("")
      }

      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )

      return (
          <div className="coin-search">
            <h1 className="coin-text">CryptoCo</h1>
              <form onSubmit={handleSubmit}>
                <input className="coin-input" type="text" value={filteredCoins} placeholder="Enter a Currency"/>
              </form>
              <input type="submit" value="Search"/>
          {filteredCoins}
              <Coin />
        </div>
      )
}

export default Search;