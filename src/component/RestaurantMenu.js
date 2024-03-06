import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const resInfo = useRestaurentMenu();

  const dummy = "dummy data."

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  //console.log(resInfo);

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    sla,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[1]?.card?.card?.itemCards
    ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="p-4 m-3 border-2 border-black-200">
      <h1 className="mb-6 font-bold text-3xl text-center">{name}</h1>
      <div className="flex justify-around my-4">
        <div>
          <h3 className="font-bold">{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>
            {areaName}, {sla.lastMileTravelString}
          </h5>
        </div>

        <div className="rounded shadow-black p-2 shadow-sm">
          <h5 className="font-bold text-green-500">⭐{avgRatingString}</h5>
          <hr />
          <h5 className="mb-3">{totalRatingsString}</h5>
        </div>
      </div>

      <hr />
      {/* categories here accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index == showIndex ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
