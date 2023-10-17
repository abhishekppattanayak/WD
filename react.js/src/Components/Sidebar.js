import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const features = ["Feature 1", "Feature 2", "Feature 3"];

  return (
    <aside className="sidebar">
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <a href={`#${feature}`}>{feature}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
