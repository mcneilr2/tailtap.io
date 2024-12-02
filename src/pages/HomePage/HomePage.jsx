import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";

export default function HomePage() {
  const API_KEY = "AIzaSyDKUikUN4gMNU4j_sTR8hpQNl5vuhsjTag";
  const baseUrl = `http://localhost:8080/spots`;

  return (
    <>
      <h2 className="homepage__title">About</h2>
      <div className="homepage__horizontal-container">
        <article className="homepage-info">
          <h3 className="homepage__header">What is a "Skate Spot?"</h3>
          <p className="homepage__text">
            At TailTap, we know how important finding the right skate spot with
            diverse sets of features is to current and potential skateboarders.
            To skateboarders, these spots not only function as places to
            practice our sport, but also hold physical space for our community
            to gather, grow and learn from each other.
            <br />
            <br />A "Skate Spot" is therefore anywhere
            skateboarders...well...skate. It could be a public skatepark, an
            empty tennis court or your neighbours curb. At TailTap we believe
            everyone who wants to skate should have access to these spaces.
          </p>
        </article>
        <article className="homepage-info">
          <h3 className="homepage__header">Mission</h3>
          <ol className="homepage__list">
            <li className="homepage__list-item">
              Increase awareness and access to skate spots.
            </li>
            <li className="homepage__list-item">
              Provide updated, relevant skate spot information including
              accessibility information, skate features and photos.
            </li>
            <li className="homepage__list-item">
              Allow skateboarders to connect over the platform and share media.
            </li>
          </ol>
        </article>
      </div>
      <article className="homepage-info">
        <h3 className="homepage__header">Current Service Area</h3>
        <iframe src="https://www.google.com/maps/d/embed?mid=1Ah3y5EzwMxel-cfLEEprvTsXq8ORkWo&ehbc=2E312F&noprof=1"></iframe>
      </article>
    </>
  );
}
