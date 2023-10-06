import React, { useEffect, useState } from "react";
import logoIcon from "../assets/who.png";
import "./TopNav.css";
import { LuCopyPlus } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function TopNav({ refresh }) {
  const apiURL = "https://anonypost.onrender.com/api/post/";
  const navigate = useNavigate();
  const [currentURL, setCurrentURL] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body) {
      toast.error("Body must not be empty", {
        className: "toast-container",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }

    if (!author) {
      axios
        .post(apiURL, { body, author: "Anonymous" })
        .then((response) => {
          setModalState(false);
          refresh();
          setBody("");
          setAuthor("");
          toast.success(response.data.message, {
            className: "toast-container",
            autoClose: 2000,
            theme: "dark",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    axios
      .post(apiURL, { body, author })
      .then((response) => {
        setModalState(false);
        refresh();
        setBody("");
        setAuthor("");
        toast.success(response.data.message, {
          className: "toast-container",
          autoClose: 2000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => {
    setModalState(false);
    setBody("");
    setAuthor("");
  };

  useEffect(() => {
    // get the current URL
    // it only get the path
    // last part
    const url = window.location.pathname;
    const urlSlice = url.split("/");
    setCurrentURL(urlSlice[1]);
  }, []);

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logoIcon} alt="logo" />
          <h1>AnonyPost</h1>
        </div>
        {currentURL && (
          <button
            className="button-container"
            onClick={() => setModalState(!modalState)}>
            <LuCopyPlus className="icon" />
            Add Post
          </button>
        )}
      </header>
      {/* FIX THE MODAL */}
      <div className={`modal-container ${modalState ? "show" : " "}`}>
        <div className="form-container">
          <h1>Share your thoughts</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="Write something..."
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <label htmlFor="author">
              Author name <span>(Optional)</span>
            </label>
            <input
              type="text"
              id="author"
              placeholder="username, etc."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <div className="form-action">
              <div className="cancel" onClick={handleClose}>
                Cancel
              </div>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TopNav;
