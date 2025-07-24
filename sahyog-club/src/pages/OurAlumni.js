import React, { useState, useEffect } from "react";

const alumniData = [
  // 2024 batch (25 alumni)
  { name: "Shivam Pathak", photo: "/image/41.png", linkedin: "#", batch: 2024 },
  { name: "Rajasi Pandey", photo: "/image/42.png", linkedin: "#", batch: 2024 },
  { name: "Neha Pandey", photo: "/image/43.png", linkedin: "#", batch: 2024 },
  { name: "Chetna Burde", photo: "/image/44.png", linkedin: "#", batch: 2024 },
  { name: "Deepak Rathore", photo: "/image/45.png", linkedin: "#", batch: 2024 },
  { name: "Virat Singh", photo: "/image/46.png", linkedin: "#", batch: 2024 },
  { name: "Abhijeet Singh", photo: "/image/47.png", linkedin: "#", batch: 2024 },
  { name: "Vishal Singh", photo: "/image/48.png", linkedin: "#", batch: 2024 },
  { name: "Dakshesh Amrit", photo: "/image/49.png", linkedin: "#", batch: 2024 },
  { name: "Neeraj Sundrani", photo: "/image/50.png", linkedin: "#", batch: 2024 },
  { name: "Priyanshu Agrahari", photo: "/image/51.png", linkedin: "#", batch: 2024 },
  { name: "Akhil Singmasetty", photo: "/image/52.png", linkedin: "#", batch: 2024 },
  { name: "Khushal Jain", photo: "/image/53.png", linkedin: "#", batch: 2024 },
  { name: "Namesh Naman", photo: "/image/54.png", linkedin: "#", batch: 2024 },
  { name: "Kumar Deepak", photo: "/image/55.png", linkedin: "#", batch: 2024 },
  { name: "Pranali Meshram", photo: "/image/56.png", linkedin: "#", batch: 2024 },
  { name: "Samridhi Singh", photo: "/image/sm.png", linkedin: "#", batch: 2024 },
  { name: "Priyanshi Srivastav", photo: "/image/pr.png", linkedin: "#", batch: 2024 },
  { name: "Amitesh Paul", photo: "/image/57.png", linkedin: "#", batch: 2024 },
  { name: "Poonam Choudhary", photo: "/image/58.png", linkedin: "#", batch: 2024 },
  { name: "Pravez Hayat Khan", photo: "/image/pz.png", linkedin: "#", batch: 2024 },
  { name: "Vineela", photo: "/image/59.png", linkedin: "#", batch: 2024 },
  { name: "Vaishnavi Rewatkar", photo: "/image/60.png", linkedin: "#", batch: 2024 },
  { name: "Samyukta Shaji", photo: "/image/61.png", linkedin: "#", batch: 2024 },
  { name: "Adarsh Singh", photo: "/image/62.png", linkedin: "#", batch: 2024 },

  // 2025 batch (sample 25 alumni)
  { name: "Aashutosh Jaiswal", photo: "/image/21.png", linkedin: "#", batch: 2025 },
  { name: "Yousuf Zafar", photo: "/image/22.png", linkedin: "#", batch: 2025 },
  { name: "Rahul Jangir", photo: "/image/23.png", linkedin: "#", batch: 2025 },
  { name: "Harsh Agrawal", photo: "/image/24.png", linkedin: "#", batch: 2025 },
  { name: " Gokul Patel", photo: "/image/pg.png", linkedin: "#", batch: 2025 },
  { name: "Raj Motwani", photo: "/image/25.png", linkedin: "#", batch: 2025 },
  { name: "Qaynat Shama", photo: "/image/26.png", linkedin: "#", batch: 2025 },
  { name: "Sristi Singh", photo: "/image/27.png", linkedin: "#", batch: 2025 },
  { name: "Harsha Lal", photo: "/image/28.png", linkedin: "#", batch: 2025 },
  { name: "Somya Kabra", photo: "/image/29.png", linkedin: "#", batch: 2025 },
  { name: "Sanskriti Painkara", photo: "image/30.png", linkedin: "#", batch: 2025 },
  { name: "Aqsa Khan", photo: "/image/31.png", linkedin: "#", batch: 2025 },
  { name: "Muskan Agrawal", photo: "/image/32.png", linkedin: "#", batch: 2025 },
  { name: "Divya Nishad", photo: "/image/33.png", linkedin: "#", batch: 2025 },
  { name: "Anadi Agrawal", photo: "/image/34.png", linkedin: "#", batch: 2025 },
  { name: "Shreya Dhruw", photo: "/image/35.png", linkedin: "#", batch: 2025 },
  { name: "Vikash Pandey", photo: "/image/36.png", linkedin: "#", batch: 2025 },
  { name: "Rakshat Soni", photo: "/image/37.png", linkedin: "#", batch: 2025 },
  { name: "K.Harshita", photo: "/image/38.png", linkedin: "#", batch: 2025 },
  { name: "Harshit Raj", photo: "/image/39.png", linkedin: "#", batch: 2025 },
  
];

const BATCH_SIZE = 5;
const INTERVAL = 3000;

const BatchCarousel = ({ alumniList }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + BATCH_SIZE) % alumniList.length);
    }, INTERVAL);

    return () => clearInterval(id);
  }, [alumniList.length]);

  let currentPhotos = alumniList.slice(startIndex, startIndex + BATCH_SIZE);
  if (currentPhotos.length < BATCH_SIZE) {
    currentPhotos = currentPhotos.concat(alumniList.slice(0, BATCH_SIZE - currentPhotos.length));
  }

  return (
    <div
      style={{
        width: "1000px",
        margin: "auto",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        marginBottom: "3rem",
      }}
    >
      {currentPhotos.map((alumni, idx) => (
        <div
          key={idx}
          style={{
            width: "180px",
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        >
          <img
  src={alumni.photo}
  alt={alumni.name}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "contain", // <-- changed from "cover" to "contain"
    backgroundColor: "#f0f0f0", // optional: adds a neutral background behind smaller images
    borderRadius: "8px",
    marginBottom: "0.5rem",
  }}
/>

          
          <div style={{ fontWeight: "bold", fontSize: "1rem", color: "#333" }}>
            {alumni.name}
          </div>
          <a
            href={alumni.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0e76a8", fontSize: "0.85rem", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
};

const OurAlumni = () => {
  const batch2024Alumni = alumniData.filter((a) => a.batch === 2024);
  const batch2025Alumni = alumniData.filter((a) => a.batch === 2025);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>2024 Batch Alumni</h1>
      <BatchCarousel alumniList={batch2024Alumni} />

      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>2025 Batch Alumni</h1>
      <BatchCarousel alumniList={batch2025Alumni} />
    </div>
  );
};

export default OurAlumni;


