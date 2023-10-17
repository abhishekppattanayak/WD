import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import './MainContent.css'

function MainContent() {
  return (
    <main>
      <div id="section1">
        <Content1 />
      </div>
      <div id="section2">
        <Content2 />
      </div>
    </main>
  );
}

export default MainContent;
