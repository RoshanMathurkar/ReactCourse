import { useContext } from "react";
import { resData } from "../../utils/constant";
import { card_img } from "../../utils/constant";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const data = useContext(UserContext);
  let { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  {
    avgRating = avgRating ? avgRating : 3;
  }
  return (
    <div className="m-4 p-2 w-[250px] bg-gray-300 rounded-lg border-2 hover:border-gray-600">
      <img
        className="w-[100%] h-[150px] rounded object-cover"
        alt="cardImg"
        src={card_img + cloudinaryImageId}
      />
      <h4 className="font-bold py-2">{name}</h4>
      <p className="">{cuisines.join(", ")}</p>
      <p>{"⭐" + avgRating}</p>
      <p>{costForTwo}</p>
      <p>delivery Time: {sla.deliveryTime} minutes</p>
      {/* <p>User : {data.loggedInUser}</p> */}
    </div>
  );
};

export default RestaurantCard;
