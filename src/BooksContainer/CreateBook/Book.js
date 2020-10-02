import React from "react";
import rmvBtn from "./assets/trashcan.png";
import "./Book.css";

function Book(props) {
  return (
    <div className="singleBook" metadata={props.metadata}>
      {props.bookInfo.title +
        " by " +
        props.bookInfo.author +
        ". " +
        props.bookInfo.pageNum +
        " pages"}
      <img
        className="removeBtn"
        alt="remove button"
        src={rmvBtn}
        onClick={props.rmvBook}
      />
      <label className="checkReadLabel">Read</label>
      <input
        id="readInput"
        className="checkRead"
        type="checkbox"
        name="readInput"
        checked={props.bookInfo.read}
        onChange={props.toggleRead}
      />
    </div>
  );
}

export default Book;
