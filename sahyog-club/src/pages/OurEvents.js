import React from 'react';
import Footer from '../components/Footer';

const events = [
  {
  title: 'Blood Donation Camp',
  img: 'image/Blood.png',
  desc: 'Our flagship event. We motivate students, faculty, and staff to donate blood to save lives. Free health check-ups are provided on the day of donation, and donors receive official certificates which can be used to request blood from hospitals when in need.'
},
{
  title: 'Mock Placement',
  img: 'image/Mock Placement.png',
  desc: 'A simulated placement experience that mirrors the real campus recruitment process. It begins with an aptitude test, followed by group discussions, and ends with personal interviews conducted by our alumni placed in top firms like Google, LinkedIn, PhonePe, ZS Associates, and BPCL.'
},
{
  title: 'QUAD',
  img: 'image/Quad.png',
  desc: 'QUAD consists of four expert-led sessions focused on competitive exams like GATE, CAT, UPSC, and CA. Industry professionals and achievers from each domain guide students, share their experiences, and address queries in interactive sessions.'
},

{
  title: 'Career Catalyst',
  img: 'image/CareerCatalyst.png',
  desc: 'A series of three independent events designed to prepare students for placements: AptiQuest tests aptitude skills, Idea Chamber is a group discussion round, and Craft Your CV focuses on resume building. Together, these sessions act as foundational training for mock placements and real interviews.'
},
{
  title: 'Pitch the Peculiar',
  img: 'image/Pitch.jpg',
  desc: 'An innovative event where participants are given real-world problem statements and asked to develop prototype solutions. Final ideas are presented before expert panelists. One of the successful outcomes of this event was the creation of a classroom locator for campus.'
},
{
  title: '5-Day Health Checkup',
  img: 'image/HealthCheck.png',
  desc: 'A community wellness initiative offering free medical checkups to safai mitras, security guards, workers of the college, and residents of nearby localities. Services include eye exams, sugar and sickle cell tests, full body checkups, and dental checkups by certified professionals.'
},
{
  title: 'Peer Providence',
  img: 'image/PeerProvidence.png',
  desc: 'A community-driven effort to support juniors by distributing donated books and study materials. This initiative encourages students to recycle resources and fosters a culture of mutual growth and academic support.'
},

  {
  title: 'Placemantra',
  img: 'image/Placemantra.png',
  desc: 'In Placemantra, we invite recently placed seniors to conduct interactive guidance sessions. They share their experiences and insights about placements in various fields and help students by addressing their queries and concerns.'
},
{
  title: 'Anti-Ragging Drive',
  img: 'image/AntiRagging.png',
  desc: 'Sahyog also serves as the anti-ragging body of the institute. We provide a safe platform for students to speak up against ragging. Through awareness drives, we emphasize that ragging is a punishable offense and promote a respectful, inclusive campus environment.'
}
];

const OurEvents = () => (
  <div className="events-page">
    <style>{`
      .events-page {
        padding: 2rem;
        background-color: #f9f9f9;
        min-height: 100vh;
        font-family: 'Segoe UI', sans-serif;
      }

      .events-heading {
        text-align: center;
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .event-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1rem;
      }

      .event-card {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
      }

      .event-card:hover {
        transform: translateY(-5px);
      }

      .event-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 1rem;
      }

      .event-card h3 {
        font-size: 1.5rem;
        color: #2980b9;
        margin-bottom: 0.5rem;
      }

      .event-card p {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
      }
    `}</style>
    <h1 className="events-heading">Moments That Matter: Our Events</h1>
    <div className="event-cards">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.img} className="event-img" alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default OurEvents;