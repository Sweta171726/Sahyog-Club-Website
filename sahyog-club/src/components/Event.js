import React from 'react';

const events = [
  {
    title: 'Blood Donation',
    img: 'image/Blood.png',
    desc: 'A noble initiative encouraging students to donate blood and contribute to saving lives.'
  },
  {
    title: 'Pitch the Peculiar',
    img: 'image/Pitch.png',
    desc: 'A creative event to showcase unique ideas and innovations with a twist of fun and logic.'
  },
  {
    title: 'Mock Placement',
    img: 'image/Mock.png',
    desc: 'Simulates real placement scenarios to help students prepare for campus recruitment.'
  },
  {
    title: 'QUAD',
    img: 'image/Quad.png',
    desc: 'An interactive quiz and activity-based event focusing on emotional intelligence and team building.'
  }
];

const Events = () => (
  <div className="events-section">
    <h2>Our Events</h2>
    <div className="event-cards">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.img} className="event-img" alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Events;