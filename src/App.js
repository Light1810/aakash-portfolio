import { useState } from "react";
import "./styles.css";
import data from './data.json';

const content = data;

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="IMG_0555.jpg" alt="Profile Image" />
        <div>
          <h1>Aakash Decosta</h1>
          <h3>Mobile Application Developer</h3>
        </div>
      </header>

      <div id="tabs">
        <menu>
        <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            About me
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Work Experience
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Skill / Tools
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Academics 
          </button>
          <button
            className={activeContentIndex === 4 ? "active" : ""}
            onClick={() => setActiveContentIndex(4)}
          >
            Projects
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex]?.listdata?.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {content[activeContentIndex]?.titledList?.map((item) => (
              <li key={item?.title}>
                <div class="title">{item?.title}</div> 
                <div class="subtitle">{item?.role}</div>
                <div class="subtitle">{item?.tenure}</div>
                <div class="subtitle">{item?.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
