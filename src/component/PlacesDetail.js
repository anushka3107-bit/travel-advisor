import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { AiOutlineHeart } from "react-icons/ai";

const PlacesDetail = ({ place }) => {
  const getImageUrl = () => {
    if (place.photo && place.photo.images && place.photo.images.small) {
      return place.photo.images.small.url;
    }
    return "https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_640.jpg";
  };



  return (
    <div className="flex flex-col bg-slate-100 px-4 py-2 mb-2 shadow-lg">
      <div className="flex">
        <div className="w-30 h-30 mr-4 relative">
          <img
            className="w-36 h-36 object-cover rounded-xl"
            src={getImageUrl()}
            alt="Place"
          />
          <div className="absolute top-0 right-0 flex flex-col px-2 py-2 bg-white rounded-full mx-2 my-2">
            <AiOutlineHeart className="text-black font-extrabold text-xl" />
          </div>
        </div>
        <div className="flex flex-col">
          {/* place name div */}
          <div className="font-bold">{place?.name}</div>

          {/* rating div */}
          <div className="flex flex-row items-center ">
            <Rating
              name="half-rating-read"
              value={Number(place.rating)}
              precision={0.5}
              readOnly
            />
            <span className="pl-2">{`(${place.num_reviews})`}</span>
          </div>
          {/* address div */}
          <div className="mt-4 text-gray-400 font-semibold">
            {place?.address}
          </div>

          {/* price div */}
          <div className="font-bold mt-3">
            <p>Price: {place?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesDetail;
