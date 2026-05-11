import React from "react";
import { useParams } from "react-router-dom";
import "./foodPartnerDetails.css";

const FoodPartnerDetails = () => {
  const { id } = useParams();

  const partner = {
    name: "Saffron Street Bites",
    username: "@saffronbites",
    posts: 3248,
    followers: 511,
    following: 1944,
    totalMeals: 2840,
    customersServed: 1520,
    rating: 4.8,
    bio: "Sarah Fennel | Saffron Bites\n🍜 Blogger\nNostalgic recipes for modern life. Founder of @foodtography.\n👉 Business inquiries: hello@sarahbites.com",
    followedBy: ["_ceamaria", "alanaawhitee"],
    address: "14 Spice Alley, Central Market, Jaipur",
    dp: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
    highlights: ["Shop", "Tik Toks 3", "Tik Toks 2", "MY BOOK!", "Emoji Cat"],
    videos: [
      {
        id: 1,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 2,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 3,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 4,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 5,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 6,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 1,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 2,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 3,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 4,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 5,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
      {
        id: 6,
        thumbnail:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=80",
        src: "https://ik.imagekit.io/anuragdots/cf74fe16-507e-4191-97a9-8b774f5c2444_znqiSpB2Y.mp4",
      },
    ],
  };

  return (
    <main className="partner-page">
      {/* TOP HALF - PROFILE */}
      <section className="profile-section">
        <header className="profile-header">
          <button className="back-btn">←</button>
          <h1>{partner.username}</h1>
          <button className="menu-btn">⋯</button>
        </header>

        <div className="profile-top">
          <div className="avatar-circle">
            <img src={partner.dp} alt={partner.name} className="avatar-img" />
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-number">{partner.posts}</div>
              <div className="stat-label">Posts</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{partner.followers}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{partner.following}</div>
              <div className="stat-label">Following</div>
            </div>
          </div>
        </div>

        <div className="followed-by">
          <p>Jagatpura, Jaipur, 302017</p>
        </div>

        <div className="profile-stats">
          <div className="profile-stat-card">
            <div className="profile-stat-value">{partner.totalMeals}</div>
            <div className="profile-stat-label">Total Meals</div>
          </div>
          <div className="profile-stat-card">
            <div className="profile-stat-value">{partner.customersServed}</div>
            <div className="profile-stat-label">Customers Served</div>
          </div>
          <div className="profile-stat-card">
            <div className="profile-stat-value">{partner.rating} ★</div>
            <div className="profile-stat-label">Rating</div>
          </div>
        </div>
      </section>

      {/* BOTTOM HALF - VIDEO GRID */}
      <section className="videos-section">
        <div className="videos-grid">
          {partner.videos.map((video) => (
            <div className="grid-video-item" key={video.id}>
              <img
                src={video.thumbnail}
                alt="Video thumbnail"
                className="video-thumbnail"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodPartnerDetails;
