import React, { useEffect, useState } from "react";
import logoIcon from "../assets/who.png";
import "./TopNav.css";
import { LuCopyPlus } from "react-icons/lu";

function TopNav() {
  const [currentURL, setCurrentURL] = useState(null);
  const [modalState, setModalState] = useState(false);

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
        <div className="logo">
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
          <form>
            <textarea type="text" placeholder="Write something..." rows={4} />
            <div className="form-action">
              <div className="cancel" onClick={() => setModalState(false)}>
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
