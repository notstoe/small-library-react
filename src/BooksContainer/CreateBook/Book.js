import React from "react";
import rmvBtn from "./assets/trashcan.png";
import "./Book.css";

function Book(props) {
  return (
    <div className="singleBook" data-attribute={props.bookInfo.author}>
      {props.bookInfo.title +
        " by " +
        props.bookInfo.author +
        ". " +
        props.bookInfo.pages +
        " pages"}
      <img className="removeBtn" alt="remove button" src={rmvBtn} />
      <label className="checkReadLabel">Read</label>
      <input
        id="readInput"
        className="checkRead"
        type="checkbox"
        name="readInput"
        checked={props.bookInfo.read}
      />
    </div>
  );
}

export default Book;
