import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useStatusOnline from "../../utils/useStatusOnline";

const BodyComp = () => {
    
    //local state variable
    let  [restaurant,setRestaurant] = useState([]);
    let  [restaurantfilter,setRestaurantFilter] = useState([]);

    const [searchItem,setSearchItem] = useState("");
    console.log(restaurant);
    useEffect(()=>{
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

    const status = useStatusOnline();

    if(status === false){
        return (
            <h1>Look's like you are offline, Please check your internet connection.</h1>
        )
    }
    return restaurant.length === 0 ? <Shimmer /> :(
        <div className="border border4-black-600 px-3 py-3 m-">
            
            <input className="border" type="text" value={searchItem} onChange={(e)=>{
                setSearchItem(e.target.value)
            }}/>
            
            <button className="search-btn" onClick={()=>{
                //Filter the restaurant cards and update the ui.
                //console.log(searchItem);
                setSearchItem('')
                restaurant = restaurant.filter((res)=>{
                    //console.log(res.info.name);
                    return res.info.name.toLowerCase().includes(searchItem);
                })

                setRestaurantFilter(restaurant);
                
            }}>Search</button>
            
            <button className="all-restaurants" onClick={
                ()=>{
                    setRestaurantFilter(restaurant);
                }
            }>
                All Restaurants
            </button>

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
                {restaurantfilter.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id}
                        to={"/restaurant/"+ restaurant.info.id}
                    >                        
                        <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BodyComp;