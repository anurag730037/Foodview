import React, { useEffect, useRef } from "react";
import "../styles/home.css";

const reels = [
  {
    id: 1,
    title: "Fresh street food from local vendors",
    description:
      "Watch the latest store highlights and discover special dishes made fresh every day.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    storeUrl: "https://example.com/store/1",
  },
  {
    id: 2,
    title: "Daily chef specials and meal deals",
    description:
      "Tap through quick recipe ideas and order from your favorite nearby kitchen.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/earth.mp4",
    storeUrl: "https://example.com/store/2",
  },
  {
    id: 3,
    title: "Chef-curated platters for every occasion",
    description:
      "Explore restaurant drops, limited offers, and tasty meals ready to deliver soon.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    storeUrl: "https://example.com/store/3",
  },
];

const Home = () => {
  const videoRefs = useRef([]);

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
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      <div className="reel-list">
        {reels.map((reel, index) => (
          <article className="reel-card" key={reel.id}>
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className="reel-video"
              src={reel.src}
              muted
              playsInline
              loop
              preload="metadata"
              controls={false}
            />

            <div className="reel-overlay">
              <div className="reel-copy">
                <p className="reel-title">{reel.title}</p>
                <p className="reel-description">{reel.description}</p>
              </div>
              <div className="reel-actions">
                <a
                  className="reel-button"
                  href={reel.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Store
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Home;
