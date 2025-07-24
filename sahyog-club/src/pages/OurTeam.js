import React from "react";
import Footer from "../components/Footer";

const teamData = {
  headMentor: [
    { name: "Hitanshi", domain: "Documentation", photo: "/image/.png" },
    { name: "Tanya Kumari", domain: "Media & Account", photo: "/image/.png" },
    { name: "Manish Sahu", domain: "Sponsorship", photo: "/image/.png" },
    { name: "Yuvraj Chouhan", domain: "Public Relation", photo: "/image/Yuvraj.jpg" },
    { name: "Nitesh Keshri", domain: "Event Management", photo: "/image/Nitesh Keshri.jpg" },
  ],
  coreMentors: [
    // Documentation
    { name: "Sameer Srivastava", domain: "Documentation" },
    { name: "Anjali Verma", domain: "Documentation" },
    { name: "Rubeena Roy", domain: "Documentation" },
    { name: "Divyanshi Soni", domain: "Documentation" },
    { name: "Pradhnya Shindekar", domain: "Documentation" },
    { name: "Harshit Nigam", domain: "Documentation" },
  
    // Design
    { name: "Md Shahid Alam", domain: "Design" },
    { name: "Adarsh Kumar", domain: "Design" },
    { name: "Arpita Hira", domain: "Design" },
    { name: "Md Shezan", domain: "Design" },
    { name: "Somesh Sahu", domain: "Design" },
  
    // Media and Accounts
    { name: "Rishabh Sarwa", domain: "Media and Accounts" },
    { name: "Aditya Kumar", domain: "Media and Accounts" },
    { name: "Mrinal Chaubey", domain: "Media and Accounts" },
    { name: "Aditya Aniket Jena", domain: "Media and Accounts" },
  
    // Sponsorship
    { name: "Ayush Sahu", domain: "Sponsorship" },
    { name: "Manish Agrawal", domain: "Sponsorship" },
    { name: "Kishan Mishra", domain: "Sponsorship" },
    { name: "Piyush Verma", domain: "Sponsorship" },
    { name: "Himanshu Kumar", domain: "Sponsorship" },
    { name: "Swarup Gopal Mhasine", domain: "Sponsorship" },
  
    // Public Relation
    { name: "Azad Samad Shaikh", domain: "Public Relation" },
    { name: "Sarita Patel", domain: "Public Relation" },
    { name: "Ankita Singh", domain: "Public Relation" },
    { name: "Shivani Raj", domain: "Public Relation" },
    { name: "Mahima Shukla", domain: "Public Relation" },
    { name: "Aryan Singh", domain: "Public Relation" },
    { name: "Mrinal Thakur", domain: "Public Relation" },
    { name: "Shweta Choudhary", domain: "Public Relation" },
    { name: "Avik Mandal", domain: "Public Relation" },
    { name: "Fouzia Mossarat", domain: "Public Relation" },
    { name: "Prajukta Goswami", domain: "Public Relation" },
    { name: "Pragya Rathore", domain: "Public Relation" },
  
    // Event Management
    { name: "Deepanshu Sahu", domain: "Event Management" },
    { name: "Ganga K", domain: "Event Management" },
    { name: "Metuku Eswar Chandra", domain: "Event Management" },
    { name: "Ashish Kumar Jangid", domain: "Event Management" },
    { name: "Tejas Dinesh Shriramwar", domain: "Event Management" },
    { name: "Akshad Ajay Gajapure", domain: "Event Management" },
    { name: "Gaurav Kumar", domain: "Event Management" },
    { name: "Anish Gupta", domain: "Event Management" },
    { name: "Minali Priya", domain: "Event Management" },
    { name: "Lishanshu Dewangan", domain: "Event Management" },
    { name: "Godson S Philip", domain: "Event Management" },
  
    // Video Editing
    { name: "Ankan Mondal", domain: "Video Editing" },
    { name: "Pankaj Kumar Yadav", domain: "Video Editing" },
  ],
  
  mentors: [
    // Documentation
    { name: "Harshita Joshi", domain: "Documentation" },
    { name: "Mahesh Yarra", domain: "Documentation" },
    { name: "Aarav Verma", domain: "Documentation" },
    { name: "Maitra Tiwari", domain: "Documentation" },
    { name: "Pushkar Sahu", domain: "Documentation" },
    { name: "Avijit", domain: "Documentation" },
    { name: "Himanshi Gangwani", domain: "Documentation" },
  
    // Design
    { name: "Nitin Verma", domain: "Design" },
    { name: "Atulya Jaiswal", domain: "Design" },
    { name: "Aditya Kumar", domain: "Design" },
    { name: "Babita Khutey", domain: "Design" },
    { name: "Astha Sahgal", domain: "Design" },
    { name: "Dova Sathvika", domain: "Design" },
    { name: "Chiranjeev Anil Shekokar", domain: "Design" },
    { name: "Kamini Yadav", domain: "Design" },
  
    // Media and Accounts
    { name: "Sameer Dansena", domain: "Media and Accounts" },
    { name: "Akula Sindhu", domain: "Media and Accounts" },
    { name: "Abhay Verma", domain: "Media and Accounts" },
    { name: "Chitransh", domain: "Media and Accounts" },
    { name: "Amandeep Singh Matharu", domain: "Media and Accounts" },
  
    // Video Editing
    { name: "Arpit Mishra", domain: "Video Editing" },
    { name: "Vivek Yadav", domain: "Video Editing" },
    { name: "K. N. Hima Syla Gowtham", domain: "Video Editing" },
    { name: "Ayushman Sahu", domain: "Video Editing" },
  
    // Public Relation
    { name: "Arpit Yadav", domain: "Public Relation" },
    { name: "Surya Kant", domain: "Public Relation" },
    { name: "Arpit Jaiswal", domain: "Public Relation" },
    { name: "Daksh Shrivastava", domain: "Public Relation" },
    { name: "Ayush Basak", domain: "Public Relation" },
    { name: "Prabhat Pathak", domain: "Public Relation" },
    { name: "Nupur Deshmukh", domain: "Public Relation" },
    { name: "Soham Wankhade", domain: "Public Relation" },
    { name: "Abhishek Dubey", domain: "Public Relation" },
    { name: "Suryansh Singh", domain: "Public Relation" },
    { name: "Sejal Jain", domain: "Public Relation" },
    { name: "Roshik Agrawal", domain: "Public Relation" },
    { name: "Lakshya Bhadoriya", domain: "Public Relation" },
    { name: "Apurva Choudhary", domain: "Public Relation" },
    { name: "Yash Zankyani", domain: "Public Relation" },
  
    // Event Management
    { name: "Harsh Matlani", domain: "Event Management" },
    { name: "Palak Patil", domain: "Event Management" },
    { name: "Praveen Sahu", domain: "Event Management" },
    { name: "Sahil Sahu", domain: "Event Management" },
    { name: "Samiksha Sahu", domain: "Event Management" },
    { name: "Cheepurupalli Thrisha", domain: "Event Management" },
    { name: "Rishi Nirmalkar", domain: "Event Management" },
    { name: "Atharva Singh", domain: "Event Management" },
    { name: "Khushi Nagre", domain: "Event Management" },
    { name: "B. Ramya", domain: "Event Management" },
    { name: "Atul Kumar", domain: "Event Management" },
    { name: "Vanshika Diwan", domain: "Event Management" },
    { name: "Ashika Jain", domain: "Event Management" },
  ]
  
};

const styles = {
  page: { padding: "2rem", textAlign: "center", fontFamily: "Arial, sans-serif" },
  title: { fontSize: "2.5rem", marginBottom: "1.5rem" },
  section: { margin: "2rem 0" },
  subtitle: { fontSize: "2rem", color: "#2c3e50", marginBottom: "1rem" },

  // Updated Grid for Head Mentors
  mentorGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  mentorCard: {
    width: "180px",
    borderRadius: "12px",
    overflow: "hidden",
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  photo: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: { marginTop: "0.5rem", fontWeight: "bold", fontSize: "1.1rem" },
  domain: { fontSize: "0.9rem", color: "#555" },

  listBox: {
    backgroundColor: "#ecf0f1",
    padding: "1rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "left",
    minWidth: "250px",
    transition: "transform 0.3s, background-color 0.3s",
    cursor: "pointer",
  },
  listBoxHover: {
    backgroundColor: "#d0e6f7",
    transform: "scale(1.03)",
  },
  listItem: { margin: "0.5rem 0", fontWeight: "bold" },
  domainTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "1rem 0 0.5rem",
    color: "#2980b9",
  },
  outerBox: {
    backgroundColor: "#fdfdfd",
    border: "2px solid #ccc",
    borderRadius: "16px",
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

const DomainListBox = ({ members }) => {
  const grouped = members.reduce((acc, curr) => {
    acc[curr.domain] = acc[curr.domain] || [];
    acc[curr.domain].push(curr.name);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(grouped).map(([domain, names], i) => (
        <div
          key={i}
          style={styles.listBox}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listBoxHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listBox)}
        >
          <div style={styles.domainTitle}>{domain}</div>
          {names.map((name, index) => (
            <div key={index} style={styles.listItem}>
              {name}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const OurTeam = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Meet Our Amazing Team</h1>

      {/* ✅ Head Mentors Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Head Mentors</h2>
        <div style={styles.mentorGrid}>
          {teamData.headMentor.map(({ name, domain, photo }, idx) => (
            <div key={idx} style={styles.mentorCard}>
              <img src={photo} alt={name} style={styles.photo} />
              <p style={styles.name}>{name}</p>
              <p style={styles.domain}>{domain}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Mentors Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Core Mentors</h2>
        <div style={styles.outerBox}>
          <DomainListBox members={teamData.coreMentors} />
        </div>
      </section>

      {/* Mentors Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Mentors</h2>
        <div style={styles.outerBox}>
          <DomainListBox members={teamData.mentors} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;


