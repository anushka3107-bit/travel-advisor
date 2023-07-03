import SliderRange from "./component/SliderRange";
import "./App.css";

import Header from "./component/Header";
import Map from "./component/Map";
import { useEffect, useState } from "react";
import List from "./component/List";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
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

  useEffect(() => {
    // this is used to get the current location of the user

    const locateUser = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    locateUser();
  }, []);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
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

      <Map
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
      />
    </div>
  );
}

export default App;
