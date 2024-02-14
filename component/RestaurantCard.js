import { resData } from "../utils/constant";
import { card_img } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;

    let {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    {
        avgRating=avgRating?avgRating:3;
    }
    return (
        <div className="res-cards" style={{backgroundColor : "#D3D3D3"}}>
            <div className="res-cards-img" >
                <img 
                    className="res-card-img" 
                    alt="cardImg" 
                    src={card_img+cloudinaryImageId}
                />
            </div>
            <div className="res-cards-details">
                <h4>{name}</h4>
                <p>{cuisines.join(",")}</p>
                <p>{"⭐"+avgRating}</p>
                <p>{costForTwo}</p>
                <p>{sla.deliveryTime} minutes</p>
            </div>
            
        </div>
    )
};

export default RestaurantCard;