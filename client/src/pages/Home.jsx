import React, { useState } from "react";
import "./Home.css";
import TopNav from "../components/TopNav";

function Home() {
  const [toggleTool, setToggleTool] = useState("");
  const data = [
    "tanga",
    "shet ka",
    "tanga ka naman",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis a repellat recusanda !",
  ];

  const showTools = (id) => {
    if (toggleTool === id) return setToggleTool("");
    setToggleTool(id);
  };
  return (
    <div className="home-container">
      <TopNav />
      <main>
        <div className="card-container">
          {data.map((data) => (
            <div className="card" onClick={() => showTools(data)} key={data}>
              <div className={`tools ${toggleTool == data ? "show" : ""}`}>
                <p>Copy </p>
              </div>
              <p className="body">{data}</p>
              <span>Anonymous</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
