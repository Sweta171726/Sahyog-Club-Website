import React from 'react';

const advisors = [
  {
    name: 'Dr. Aashish Das',
    image: 'image/2.png',
    title: 'Associate Professor, Department of Mining Engineering'
  },
  {
    name: 'Dr. Soumya Agrawal',
    image: 'image/3.png',
    title: 'Medical Officer'
  },
  {
    name: 'Dr. MadhuKrishna Priyadarshani',
    image: 'image/1.png',
    title: 'Assistant Professor, Department of Computer Science'
  }
];

const FacultyAdvisors = () => (
  <div className="faculty-advisors-section">
    <h2>Our Faculty Advisors</h2>
    {advisors.map((advisor, idx) => (
      <div className="faculty-advisor-card" key={idx}>
        <img src={advisor.image} alt={advisor.name} />
        <h3>{advisor.name}</h3>
        <p>{advisor.title}</p>
      </div>
    ))}
  </div>
);

export default FacultyAdvisors;