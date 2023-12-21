import React from 'react';

const PersonCard = ({ id, name, occupation, sex, popularity, works, imagePath }) => {
  return (
    <div className="person-card">
      <img src={imagePath} alt={`${name} profile`} className="person-image" />
      <div className="person-details">
        <h2>{name}</h2>
        <p>Occupation: {occupation}</p>
        <p>Sex: {sex}</p>
        <p>Popularity: {popularity}</p>
        <h3>Famous Works:</h3>
        <ul>
          {works.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonCard;
