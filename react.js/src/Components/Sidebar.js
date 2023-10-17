import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#feature1">Feature 1</a></li>
        <li><a href="#feature2">Feature 2</a></li>
        <li><a href="#feature3">Feature 3</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
