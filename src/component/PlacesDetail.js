import React from "react";

const PlacesDetail = ({ place }) => {
  return (
    <div className="flex flex-col bg-slate-300 px-4 py-2 mb-2 shadow-lg items-start justify-between">
      {place.name}
      {place.address}
      {place.images}
      {place.price}
      <div>
        {place.photo
          ? place.photo.images.large.url
          : "https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg"}
      </div>
    </div>
  );
};

export default PlacesDetail;
