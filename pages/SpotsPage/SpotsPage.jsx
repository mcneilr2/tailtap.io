import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import axios from "axios";
import "./SpotsPage.scss";
import fullRating from "../../src/assets/images/full_helmet.svg";
import emptyRating from "../../src/assets/images/empty_helmet.svg";
import ramp from "../../src/assets/images/ramp.svg";
import rail from "../../src/assets/images/rail.svg";
import lit from "../../src/assets/images/lit.svg";
import notLit from "../../src/assets/images/not-lit.svg";
import wet from "../../src/assets/images/wet_floor.svg";
import swim from "../../src/assets/images/swim.svg";
import emerg from "../../src/assets/images/emerg.svg";

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
            referrerpolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube.com/embed/${activeSpot.homepage_video_id}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A5173&amp;widgetid=3`}
            id="widget4"
          ></iframe>
        </div>
        <section className="spot__details">
          <div className="spot__detail-container">
            <h3 className="spot__detail-label">Spot Type</h3>
            <p className="spot__detail-text--inline">{activeSpot.type}</p>
            <img
              className="spot__detail-icon"
              src={activeSpot.type == "Park" ? ramp : rail}
              alt="spot type graphic"
            />
          </div>
          <div className="spot__detail-container">
            <h3 className="spot__detail-label">Average Crowding</h3>
            <div className="spot__detail-rating">
              <Rating
                readonly="true"
                stop="10"
                initialRating={activeSpot.occupancy_level}
                emptySymbol={
                  <img className="spot__detail-rating-icon" src={emptyRating} />
                }
                fullSymbol={
                  <img className="spot__detail-rating-icon" src={fullRating} />
                }
              />
            </div>
          </div>
          <div className="spot__detail-container">
            <h3 className="spot__detail-label">Median Skill Level</h3>
            <div className="spot__detail-rating">
              <Rating
                readonly="true"
                stop="10"
                initialRating={activeSpot.median_skill_level}
                emptySymbol={
                  <img className="spot__detail-rating-icon" src={emptyRating} />
                }
                fullSymbol={
                  <img className="spot__detail-rating-icon" src={fullRating} />
                }
              />
            </div>
          </div>
          <div className="spot__detail-container">
            <h3 className="spot__detail-label">Access</h3>
            <div className="spot__detail-container--row">
              <label className="spot__detail-text-label">Open Hours:</label>
              <p className="spot__detail-text">{activeSpot.hours}</p>
            </div>
            <div className="spot__detail-container--row">
              <label className="spot__detail-text-label">Cost to Skate:</label>
              <p className="spot__detail-text">
                {activeSpot.is_public ? "Free!" : "Private"}
              </p>
            </div>
            <div className="spot__detail-container--row">
              <label className="spot__detail-text-label">Night Lighting:</label>
              <p className="spot__detail-text">
                {activeSpot.is_lit_night ? "It's Lit!" : "No Lights"}
              </p>

              <img
                className="spot__detail-icon--small"
                src={activeSpot.is_lit_night ? lit : notLit}
                alt=""
              />
            </div>
            <div className="spot__detail-container--row">
              <label className="spot__detail-text-label">Rain Coverage:</label>
              <p className="spot__detail-text">
                {activeSpot.weather_coverage == "partial" ? "Partial" : "None"}
              </p>
              <img
                className="spot__detail-icon--small"
                src={activeSpot.weather_coverage == "partial" ? wet : swim}
                alt=""
              />
            </div>
          </div>
          <div className="spot__detail-container--vertical">
            <h3 className="spot__detail-label">Map</h3>
            <iframe
              className="spot__detail-map"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${activeSpot.latitude},${activeSpot.longitude}`}
            ></iframe>
          </div>
          <div className="spot__detail-container--row">
            <h3 className="spot__detail-label">Address: </h3>
            <p className="spot__detail-text--inline">{activeSpot.address}</p>
          </div>
          <div className="spot__detail-container--row-emerg">
            <img
              className="spot__detail-icon--emerg"
              src={emerg}
              alt="emergency logo"
            />
            <div className="spot__detail-container--emerg">
              <h3 className="spot__detail-label--emerg">Closest Hospital </h3>
              <label className="spot__detail__text-abel">Name:</label>
              <p className="spot__detail-text--inline-emerg">
                {activeSpot.closest_hospital_name}
              </p>
              <label className="spot__detail__text-abel">Address:</label>
              <p className="spot__detail-text--inline-emerg">
                {activeSpot.closest_hospital_address}
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
