import { useState, useEffect } from "react";
import SpotsList from "../../components/SpotsList/SpotsList";
import SpotsTable from "../../components/SpotsTable/SpotsTable";
import axios from "axios";
import "./SpotsPage.scss";

export default function SpotsPage() {
  const API_KEY = "AIzaSyDKUikUN4gMNU4j_sTR8hpQNl5vuhsjTag";
  const baseUrl = `http://localhost:8080/spots`;

  const [spotsList, setSpotsList] = useState([]);

  const headers = [
    { db_keys: ["name"], text: "SPOT NAME" },
    { db_keys: ["address"], text: "ADDRESS" },
    { db_keys: ["type"], text: "SPOT TYPE" },
    { db_keys: ["hours"], text: "HOURS" },
    { db_keys: ["is_public"], text: "COST" },
    { db_keys: ["is_lit_night"], text: "NIGHTTIME LIGHTING" },
    { db_keys: ["weather_coverage"], text: "WEATHER COVERAGE" },
    { db_keys: ["occupancy_level"], text: "AVERAGE CROWDING" },
  ];
  const getSpots = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/spots/`);
      setSpotsList(response.data);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  useEffect(() => {
    getSpots();
  }, []);

  return (
    <>
      <h2 className="spotspage__title">Find a New Skate Spot!</h2>
      <SpotsList spots={spotsList} headers={headers} />
      {/* <SpotsTable spots={spotsList} /> */}
    </>
  );
}
