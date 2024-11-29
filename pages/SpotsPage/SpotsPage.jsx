import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpotsPage.scss";
import ramp from "../../src/assets/images/ramp.svg";
import rail from "../../src/assets/images/rail.svg";

export default function SpotsPage() {
  const params = useParams();
  const selectedSpotId = params.id ? params.id : "";
  const baseUrl = `http://localhost:8080/spots`;

  const [activeSpot, setActiveSpot] = useState([]);

  const getSpot = async () => {
    try {
      const firstSpotId = (await axios.get(baseUrl)).data[0].id;
      const selectedSpotId = params.id ? params.id : firstSpotId;
      const response = await axios.get(
        `http://localhost:8080/spots/${selectedSpotId}`
      );
      setActiveSpot(response.data);
    } catch (error) {
      console.error("Error fetching video data", error);
    }
  };

  useEffect(() => {
    getSpot();
  }, [selectedSpotId]);

  return (
    <>
      <h2 className="spot__details-header">{activeSpot.name}</h2>
      <div className="hero__video">
        <iframe
          frameborder="0"
          allowfullscreen=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          title="Session Atlas - BC - Vancouver Plaza Skate Park"
          src="https://www.youtube.com/embed/gPpJ2lcCOxI?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A5173&amp;widgetid=3"
          id="widget4"
        ></iframe>
      </div>
      <article className="spot__details">
        <div className="spot__detail-container">
          <label className="spot__detail-label">Spot Type:</label>
          <h2 className="spot__detail-text">{activeSpot.type}</h2>
          <img
            src={activeSpot.type == "Park" ? ramp : rail}
            alt="spot type graphic"
          />
        </div>
        <div className="spot__detail-container">
          <label className="spot__detail-label">Spot Type:</label>
          <h2 className="spot__detail-text">{activeSpot.type}</h2>
        </div>
      </article>
    </>
  );
}
