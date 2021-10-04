import React, {useState} from 'react';
import Favorites from './Favorites';

function Coin({ image, name, price, priceChange, marketCap }) {

    const [favorites, setFavorites] = useState([])

    const favCoin = {
        name: name,
        image: image,
        price: price
    }

    function newFav(favCoin) {
        setFavorites([...favorites, favCoin])
    }

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <p className="coin-symbol">{name}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className={`coin_percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange.toFixed(2)}%</p>
                    <p className="coin-marketcap">Market Cap: ${marketCap.toLocaleString()}</p>
                    <Favorites favCoin={favCoin} newFav={newFav} />
                    <button className="Portfolio">Portfolio Button</button>
                </div>
            </div>
        </div>
    )
}

export default Coin;
