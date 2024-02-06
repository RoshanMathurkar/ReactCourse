import { resData } from "../utils/constant";
import { card_img } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.info;
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
                <h3>{name}</h3>
                <h5>{cuisines.join(",")}</h5>
                <p>{"⭐"+avgRating}</p>
                <p>{"Delivert time:"+deliveryTime+" minutes"}</p>
                <p>{costForTwo}</p>
            </div>
            
        </div>
    )
};

export default RestaurantCard;