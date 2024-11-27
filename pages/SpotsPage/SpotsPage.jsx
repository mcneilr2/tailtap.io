import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpotsPage.scss";

export default function SpotsPage() {
  const params = useParams();
  const selectedSpotId = params.id ? params.id : "";
  const baseUrlSpotDetails = `http://localhost:8080/spots/${selectedSpotId}`;
  const baseUrl = `http://localhost:8080/spots`;

  const [activeSpot, setActiveSpot] = useState([]);

  const getSpot = async () => {
    try {
      const firstSpotId = (await axios.get(baseUrl)).data[0].id;
      const selectedVideoId = params.id ? params.id : firstSpotId;
      const response = await axios.get(
        `http://localhost:8080/spots/${selectedVideoId}`
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
      <p>Test</p>
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />{" "} */}
      {/* <section className = "main-content">
            <article className = "current-video__section">
                <VideoDetails activeVideo={activeVideo} />
                <CommentsForm activeVideo={activeVideo} setActiveVideo={setActiveVideo} videoUrl={baseUrlVideoDetails}/>
                <CommentsList activeVideo={activeVideo} setActiveVideo={setActiveVideo} videoUrl={baseUrlVideoDetails}  />
            </article>
            <NextVideosList activeVideo={activeVideo} baseUrl={baseUrl}/>
        </section> */}
    </>
  );
}
