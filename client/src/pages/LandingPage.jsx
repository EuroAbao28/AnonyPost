import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import TopNav from "../components/TopNav";

function LandingPage() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <div className="landing-page-container">
      <TopNav />
      <main>
        <section>
          <h1>Welcome to AnonyPost</h1>
          <p>
            The place where your words find a home, choose to be the author of
            your words or let them roam free, anonymously. Share your favorite
            quotes, personal thoughts, or inspirational notes. It's all about
            expressing yourself, your way.
          </p>
          <button onClick={handleButton}>Start sharing</button>
        </section>
      </main>
      <footer>
        <p>Develop by</p>
        <p>Euro Abao</p>
      </footer>
    </div>
  );
}

export default LandingPage;