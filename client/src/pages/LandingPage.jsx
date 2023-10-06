import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import TopNav from "../components/TopNav";
import svgIcon from "../assets/hacker.svg";

function LandingPage() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <div className="landing-page-container">
      <TopNav />
      <main>
        <div className="child">
          <img src={svgIcon} alt="SVG" />
          <section>
            <h1>Welcome to AnonyPost</h1>
            <p>
              Share your favorite quotes, personal thoughts, or inspirational
              notes. It's all about expressing yourself, your way.
            </p>
            <button onClick={handleButton}>Start sharing</button>
          </section>
        </div>
      </main>
      <footer>
        <p>Develop by</p>
        <p>Euro Abao</p>
      </footer>
    </div>
  );
}

export default LandingPage;
