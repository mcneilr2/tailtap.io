import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import "./SpotsPage.scss";

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
      <YouTube videoId={activeSpot.homepage_video_id} />
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
