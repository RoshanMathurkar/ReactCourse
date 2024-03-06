import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowIndex, showItems, dummy }) => {
  //console.log(showItems);

  //const [showList, setShowList] = useState(false);

  const handleEvent = () => {
    //setShowList(!showList);
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 shadow-sm p-2 mx-auto my-2 cursor-pointer">
        <div className="flex justify-between" onClick={handleEvent}>
          <span className="font-medium">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
