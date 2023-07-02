import React from "react";
import Skeleton from "@mui/material/Skeleton";

const List = ({ places, isLoading }) => {
  return (
    <div className="flex w-4/5 h-100vh mt-3 top-0 overflow-hidden z-10 px-3 py-3 mx-2 shadow-xl border border-gray-300 rounded-md">
      <Skeleton sx={{ marginLeft: '2' }} variant="rounded" width={600} height={200} animation="wave" />
      <Skeleton variant="rounded" width={600} height={200} animation="wave" />
    </div>
  );
};

export default List;
