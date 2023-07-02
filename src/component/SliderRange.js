import React from "react";
import { Slider } from "@mui/material";

const SliderRange = () => {
  return (
    <div className="bg-customSliderColor w-48 top-5 left-0 mt-3 mx-2 h-20 ">
      <div className="flex justify-between pr-4 py-2">
        <span className="px-2">Distance</span>
        <span className="">4KM</span>
      </div>
      {/* here the slider has a min and max range from 1KM to 5KM  , the default value is set to 4KM */}
      <div className="px-2 py-2">
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
