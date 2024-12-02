import { useState, useEffect } from "react";
import SpotsList from "../../components/SpotsList/SpotsList";
import SpotsTable from "../../components/SpotsTable/SpotsTable";
import axios from "axios";
import "./SpotsPage.scss";

export default function SpotsPage() {
  const API_KEY = "AIzaSyDKUikUN4gMNU4j_sTR8hpQNl5vuhsjTag";
  const baseUrl = `http://localhost:8080/spots`;

  const [spotsList, setSpotsList] = useState([]);

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
      <section className="spotspage">
        <h2 className="spotspage__title">Spots</h2>
        <SpotsList spots={spotsList} />
        <SpotsTable spots={spotsList} />
      </section>
    </>
  );
}
