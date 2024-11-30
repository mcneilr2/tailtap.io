import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpotsPage.scss";
import ramp from "../../src/assets/images/ramp.svg";
import rail from "../../src/assets/images/rail.svg";
import lit from "../../src/assets/images/lit.svg";
import notLit from "../../src/assets/images/not-lit.svg";

export default function SpotsPage() {
  const params = useParams();
  const selectedSpotId = params.id ? params.id : "";
  const API_KEY = "AIzaSyDKUikUN4gMNU4j_sTR8hpQNl5vuhsjTag";

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
      <article className="spot-page">
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
        <section className="spot__details">
          <div className="spot__detail-container--row">
            <div className="spot__detail-container">
              <h3 className="spot__detail-label">Spot Type</h3>
              <p className="spot__detail-text">{activeSpot.type}</p>
              <img
                className="spot__detail-icon"
                src={activeSpot.type == "Park" ? ramp : rail}
                alt="spot type graphic"
              />
            </div>
            <div className="spot__detail-container">
              <h3 className="spot__detail-label">Access</h3>
              <div className="spot__detail-container--row">
                <label className="spot__detail-text-label">Open Hours:</label>
                <p className="spot__detail-text">{activeSpot.hours}</p>
              </div>
              <div className="spot__detail-container--row">
                <label className="spot__detail-text-label">
                  Night Lighting:
                </label>
                {activeSpot.is_lit_night ? "It's Lit!" : "No Lights"}
                <img
                  className="spot__detail-icon--small"
                  src={activeSpot.is_lit_night ? lit : notLit}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="spot__detail-container--vertical">
            <h3 className="spot__detail-label">Location</h3>
            <iframe
              className="spot__detail-map"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${activeSpot.latitude},${activeSpot.longitude}`}
            ></iframe>
          </div>
        </section>
      </article>
    </>
  );
}
