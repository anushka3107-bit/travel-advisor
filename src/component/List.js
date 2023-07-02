import React from "react";
import Skeleton from "@mui/material/Skeleton";

const List = ({ places, isLoading }) => {
  return (
    <div className="flex flex-col w-4/5 h-100vh mt-3 left-0 top-0 overflow-hidden z-10 px-2 shadow-xl">
      <Skeleton
        className="mt-3"
        variant="circular"
        width={40}
        height={40}
        animation="wave"
      />
      <Skeleton variant="rounded" width={600} height={100} animation="wave" />
      <Skeleton variant="rounded" width={600} height={100} animation="wave" />
    </div>
  );
};

export default List;
