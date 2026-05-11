import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css";

import { useNavigate, Link } from "react-router-dom";
import { api } from "../api/axios";

const reels = [
  {
    id: 1,
    name: "Fresh street food from local vendors",
    description:
      "Watch the latest store highlights and discover special dishes made fresh every day.",
    video:
      "https://ik.imagekit.io/anuragdots/c7d0af63-5fbf-447b-8b2d-fc2870cb543e__5NJ30buo.mp4",
    foodPartner: "https://example.com/store/1",
  },
  {
    id: 2,
    name: "Daily chef specials and meal deals",
    description:
      "Tap through quick recipe ideas and order from your favorite nearby kitchen.",
    video:
      "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
    foodPartner: "https://example.com/store/2",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(() => reels.map(() => false));
  const videoRefs = useRef([]);

  const [foodVideos, setFoodVideos] = useState(reels);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await api.get("http://localhost:6767/api/food/");
        setFoodVideos(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    setLoaded(foodVideos.map(() => false));
  }, [foodVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        threshold: 0.75,
      },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [foodVideos]);

  const handleVideoLoaded = (index) => {
    setLoaded((current) => {
      if (current[index]) return current;
      const updated = [...current];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <main className="home-page">
      <div className="reel-list">
        {foodVideos.map((reel, index) => (
          <article className="reel-card" key={reel._id || reel.id}>
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className="reel-video"
              src={reel.video}
              muted
              playsInline
              loop
              preload="metadata"
              controls={false}
              onLoadedData={() => handleVideoLoaded(index)}
            />

            {!loaded[index] && (
              <div className="reel-loader">
                <div className="reel-spinner" />
                <p>Loading video</p>
              </div>
            )}

            <div className="reel-overlay">
              <div className="reel-copy">
                <p className="reel-title">{reel.name}</p>
                <p className="reel-description">{reel.description}</p>
              </div>
              <div className="reel-actions">
                <Link
                  className="reel-button"
                  // to={`/food-partner`}
                  to={`/food-partner/${reel.foodPartner}`}
                  rel="noreferrer"
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Home;
