import React from "react";
import github from "./assets/github.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="github headerElement" href="https://github.com/notstoe">
        <img className="github" alt="github" src={github} />
      </a>
      <h1 className="pageTitle">Small Library</h1>
      <p className="headerElement" id="help" onClick={helpAlert}>
        Help
      </p>
    </header>
  );
}

function helpAlert(e) {
  alert(
    "Add a book to get started and you're all set! \n\nUse it as your personal library!"
  );
}

export default Header;
