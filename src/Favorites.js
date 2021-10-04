import React, {useState} from "react";

function Favorites({ favCoin, newFav }) {



        
    function handleClick() {
        fetch("https://project-2-cryptoco.herokuapp.com/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({favCoin})
        })
        newFav({favCoin})
    }
    // function deleteFavorite(name) {
    //     const updatedFavorites = name.filter(crypto => crypto !== crypto)
    //     setFavorites(updatedFavorites)
    // }

    return (
        <div className="addAndDeleteButtons">
        <button className="favorites" onClick={handleClick}>Favorites Button</button>
        <button className="deleteFavorites" >Delete Button</button>
        </div>
    )
    }

export default Favorites;
