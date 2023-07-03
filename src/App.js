import SliderRange from "./component/SliderRange";
import "./App.css";

import Header from "./component/Header";
import Map from "./component/Map";
import { useEffect, useState } from "react";
import List from "./component/List";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <div style={{ height: "80px" }}>
        <Header />
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <SliderRange />

        <List places={places} isLoading={isLoading} />
      </div>

      <Map setBounds={setBounds} />
    </div>
  );
}

export default App;
