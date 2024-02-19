import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { Menu_api } from "../utils/constant";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();
    console.log(resID)
 
    useEffect(()=>{
        fetchData();
    },[])

     const fetchData = async ()=>{
        const dataMenu = await fetch(Menu_api+resID);

        const json_data = await dataMenu.json();
        setResInfo(json_data.data);
    }

    if(resInfo === null){
        return <Shimmer/>;
    } 
    console.log(resInfo);
    
    const {name,cuisines,costForTwoMessage,areaName,sla,totalRatingsString,avgRatingString} = resInfo?.cards[0]?.card?.card?.info;

    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (
        <div className="res-info">
            <h1>{name}</h1>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}, {sla.lastMileTravelString}</h5>
            <h5>{avgRatingString}</h5>
            <h5>{totalRatingsString}</h5>
            <hr/>
            <h2>{itemCards[0]?.card?.info?.category}</h2>
            <h3>Menu</h3>
            {
                itemCards.map((resInfo)=>{
                    return (
                        <li key={resInfo?.card?.info?.id}>
                            {resInfo?.card?.info?.name}<br/>
                            ₹{resInfo?.card?.info?.price/100}<br/>
                            Description: {resInfo?.card?.info?.description}<hr/>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu;