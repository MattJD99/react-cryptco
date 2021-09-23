import React from 'react'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketCap }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className="coin">
                    <img src={image} alt='crypto' />
                    {/* <h1>{image}</h1> */}
                    <p className="coin-symbol">{name}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {/* <p className={`coin_percent ${priceChange < 0 ? "red" : "green"}`}> */}
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-marketcap">Market Cap: ${marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
