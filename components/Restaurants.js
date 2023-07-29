import { useEffect, useState } from "react";
import { MENU_API } from "../utility/constant";

const Restaurants = () =>{
    useEffect(()=>{
        fetRestMenus();
    },[]);

    const fetRestMenus = async()=> {
        const data = await fetch(MENU_API);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.groupedCard?.cardGroupMap);
        console.log(restaurantData);
    };// REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info

    const [restaurantData, setRestaurantData] = useState([]);
    const {name, price, ratings, description, addons, inStock, imageId} = restaurantData;

    return (
        <div className="restaurant-container">
            <div className="inner-cards">
                <div className="card-details">
                <h1>{name}</h1>
                <span>Price Rs.{price}</span>
                <p>{description}</p>
                </div>
                <div className="card-logo">
                <img alt="company-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ imageId} />
                </div>
            </div>
            <h1>{name}</h1>
            <div>In Stock {inStock}</div>
            <h2>Price Rs.{price}</h2>
            <h3>Rating {ratings?.aggregatedRating?.rating}</h3>
            <p>{description}</p>
            <ul>
                {addons?.map((item)=><li key={item.groupId}>{item.groupName}</li>)}
            </ul>
        </div>
       
    )
}

export default Restaurants;