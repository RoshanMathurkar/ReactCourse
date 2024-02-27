import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{

    const resInfo = useRestaurentMenu();

    if(resInfo === null){
        return <Shimmer/>;
    } 
    
    const {name,cuisines,costForTwoMessage,areaName,sla,totalRatingsString,avgRatingString} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards 
    ?  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card :resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    ;
    
    return (
        <div className="res-info">
            <h1>{name}</h1>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}, {sla.lastMileTravelString}</h5>
            <h5>{avgRatingString}</h5>
            <h5>{totalRatingsString}</h5>
            <hr/>
            <h2>{itemCards[0]?.card?.info?.category}</h2>
            {
                itemCards.map((resInfo)=>{
                    return (
                        <li key={resInfo?.card?.info?.id}>
                            {resInfo?.card?.info?.name}
                            <br/>
                            ₹ {
                            resInfo?.card?.info?.price ? (resInfo?.card?.info?.price/100):(resInfo?.card?.info?.defaultPrice/100)
                            }<br/>
                            {resInfo?.card?.info?.description ? resInfo?.card?.info?.description : ''}<hr/>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu;