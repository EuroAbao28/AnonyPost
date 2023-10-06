import React, { useEffect, useState } from "react";
import "./Home.css";
import TopNav from "../components/TopNav";
import axios from "axios";
import copy from "clipboard-copy";

function Home() {
  const apiURL = "https://anonypost.onrender.com/api/post/";
  const [toggleTool, setToggleTool] = useState("");
  const [posts, setPosts] = useState([]);

  const showTools = (id) => {
    if (toggleTool === id) return setToggleTool("");
    setToggleTool(id);
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(apiURL);
      setPosts(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleCopy = async (body) => {
    try {
      await copy(body);
      console.log("Copied note: ", body);
    } catch (error) {
      console.error("Copy failed: ", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-container">
      <TopNav refresh={() => getPosts()} />
      <main>
        <div className="card-container">
          {posts &&
            posts.map((post) => (
              <div
                className="card"
                onClick={() => showTools(post._id)}
                key={post._id}>
                <div
                  className={`tools ${toggleTool == post._id ? "show" : ""}`}>
                  <p onClick={() => handleCopy(post.body)}>Copy </p>
                </div>
                <p className="body">{post.body}</p>
                <span>{post.author}</span>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
