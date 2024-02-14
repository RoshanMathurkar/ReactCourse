import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";

const BodyComp = () => {
    
    //local state variable
    let  [restaurant,setRestaurant] = useState([]);
    let  [restaurantfilter,setRestaurantFilter] = useState([]);

    const [searchItem,setSearchItem] = useState("");
    //console.log(restaurant);
    useEffect(()=>{
        // console.log("use Effect.");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const swiggy_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json_data = await swiggy_data.json();

        console.log(json_data);
        //Optional chaining
        setRestaurant(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantFilter(json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurant.length === 0 ? <Shimmer /> :(
        <div className="main-body">
            
            <input className="search-box" type="text" value={searchItem} onChange={(e)=>{
                setSearchItem(e.target.value)
            }}/>
            <button className="search-btn" onClick={()=>{
                //Filter the restaurant cards and update the ui.
                //console.log(searchItem);
                restaurant = restaurant.filter((res)=>{
                    //console.log(res.info.name);
                    return res.info.name.toLowerCase().includes(searchItem);
                })

                setRestaurantFilter(restaurant);
                
            }}>Search</button>
            
            <button className="top-rated-btn" 
                onClick={()=>{
                    //console.log("on click");
                    restaurant = restaurant.filter(
                        (res)=>{
                           return res.info.avgRating>=4;
                        }
                    );
                    setRestaurantFilter(restaurant);
                    // console.log(restaurant);
                }}>
                Top Rated Restaurants
            </button>

            <div className="restaurant-container">
                {restaurantfilter.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
            </div>
        </div>
    )
}

export default BodyComp;