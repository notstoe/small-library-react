import React from "react";
import "./AddBtn.css";

function AddBtn(props) {
  return (
    <div className="containerBtn">
      <button onClick={props.toggleModal} id="addBtn">
        Add Book
      </button>
    </div>
  );
}

export default AddBtn;
