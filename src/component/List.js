import React from "react";
import Skeleton from "@mui/material/Skeleton";
import PlacesDetail from "./PlacesDetail";

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
        <div
          className="h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md }"
          style={{ zIndex: "1" }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={100} />
        </div>
      </>
    );

  return (
    <div
      className="flex flex-col h-100vh mt-3 top-0 overflow-hidden px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md overflow-y-hidden"
      style={{ zIndex: "1" }}
    >
      {places &&
        places.map((place, i) => <PlacesDetail place={place} key={i} />)}
    </div>
  );
};

export default List;
