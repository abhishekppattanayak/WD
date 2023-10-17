import React from 'react';
import './MainContent.css';

function MainContent({ features }) {
  return (
    <main className="main-content">
      {features.map((feature, index) => (
        <div key={index} id={feature}>
          <h2>{feature}</h2>
          <p>This is the content for {feature}.</p>
        </div>
      ))}
    </main>
  );
}

export default MainContent;
