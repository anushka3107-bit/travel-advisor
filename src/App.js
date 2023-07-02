import SliderRange from "./component/SliderRange";
import "./App.css";
import Header from "./component/Header";
import Map from "./component/Map";
import { useState } from "react";
import List from "./component/List";

function App() {
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <div style={{ height: "80px" }}>
        <Header />
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <SliderRange />
        <List />
      </div>

      <Map coordinates={coordinates} setCoordinates={setCoordinates} />
    </div>
  );
}

export default App;
