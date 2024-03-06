import { card_img } from "../../utils/constant";
const ItemList = ({ items, dummy }) => {
  return (
    <div>
      <ul>
        {/* <h1>dummy</h1> */}
        {items.map((items) => (
          <div
            key={items?.card?.info?.id}
            className="p-8 m-2 flex justify-between border-gray-300 border-b-2"
          >
            <div className="w-10/12">
              <div className="p-2">
                {items?.card?.info?.name}
                <br />
                <p className="">
                  ₹{" "}
                  {items?.card?.info?.price
                    ? items?.card?.info?.price / 100
                    : items?.card?.info?.defaultPrice / 100}
                </p>

                <p className=" text-gray-500">
                  {items?.card?.info?.description}
                </p>
              </div>
            </div>
            <div className="w-2/12">
              <div className="absolute m-auto">
                <button className="px-2 shadow-lg mx-6 mt-16 bg-white border-2 border-gray rounded">
                  Add +
                </button>
              </div>
              <img className="" src={card_img + items?.card?.info?.imageId} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
