import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/constant";
import { useState } from "react";

const BodyComp = () => {
    
    //local state variable
    let [restaurant,setRestaurant] = useState(resData);
    return (
        <div className="main-body">
            {/* <div className="search">Search</div> */}

            <button className="top-rated-btn" 
                onClick={()=>{
                    //console.log("on click");
                    restaurant = restaurant.filter(
                        (res)=>{
                           return res.info.avgRating>=4;
                        }
                    );
                    setRestaurant(restaurant);
                    // console.log(restaurant);
                }}>Top Rated Item</button>
            <div className="restaurant-container">
                {restaurant.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
            </div>
        </div>
    )
}

export default BodyComp;