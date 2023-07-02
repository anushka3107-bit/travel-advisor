import React from "react";
import { Slider } from "@mui/material";

const SliderRange = () => {
  return (
    <div className="bg-customSliderColor w-60 top-5 left-0 mt-3 mx-4 ">
      <div className="flex justify-between pr-4 py-2">
        <span className="px-2">Distance</span>
        <span className="">4KM</span>
      </div>

      <div className="px-3 py-3">
        <Slider
          defaultValue={4}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: "success.main",
          }}
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};

export default SliderRange;
