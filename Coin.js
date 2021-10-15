import React from 'react';
import Favorites from './Favorites';

function Coin({ id, coin, name, price, image, priceChange, marketCap, favorites }) {

    return (
        <div key={id} className='coin-container'>
            <div className='coin-row'>
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <p className="coin-symbol">{coin}</p>
                    <p className="coin-name">{name}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className={`coin_percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange}%</p>
                    <p className="coin-marketcap">Market Cap: ${marketCap.toLocaleString()}</p>
                    <Favorites id={id} coin={coin} price={price} image={image} favorites={favorites} />
                </div>
            </div>
        </div>
    )
}

// const [favorites, setFavorites] = useState([]) 
    
    // const favCoin = {
    //     coin: coin,
    //     image: image,
    //     price: price,
    //     portfolio: true
    // }

    // function newFav(coin) {
    //     setFavorites([...favorites, coin])
    // }

//     function handleClick() {
//         fetch("https://project-2-cryptoco.herokuapp.com/favorites")
//         .then(response => response.json())
//         .then(data => setFavorites(data))
//         console.log(favorites)
//         if(favorites.includes(coin)){
//             console.log("duplicate added")
//         }
//         else {



//         fetch("https://project-2-cryptoco.herokuapp.com/favorites", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         body: JSON.stringify({coin})
//         })
    
//         newFav(coin)
//         console.log("Favorites button was clicked.")
        
//     }
// }

export default Coin;