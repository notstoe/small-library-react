import React from "react";
import "./ModalAdd.css";

function ModalAdd(props) {
  return (
    <div onClick={props.toggleModal} id="myModal" className={props.modalClass}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <span onClick={props.toggleModal} className="close">
          {"\u00D7"}
        </span>
        <form>
          <label htmlFor="TitleInput">Title of the Book:</label>
          <br />
          <input
            className="inputStyle"
            type="text"
            id="TitleInput"
            name="TitleInput"
            required="required"
          />
          <br />

          <label htmlFor="authorInput">Author:</label>
          <br />
          <input
            className="inputStyle"
            type="text"
            id="authorInput"
            name="authorInput"
            required="required"
          />
          <br />

          <label htmlFor="pageNumInput">Number of Pages:</label>
          <br />
          <input
            className="inputStyle"
            type="number"
            id="pageNumInput"
            name="pageNumInput"
            required="required"
          />
          <br />

          <label htmlFor="readInput">
            Tick the box if you've already read it
          </label>
          <br />
          <input
            type="checkbox"
            id="readInput"
            name="readInput"
            defaultChecked={true}
          />
          <br />

          <label htmlFor="submitBtn"></label>
          <br />
          <input type="submit" id="submitBtn" name="submitBtn" value="Submit" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default ModalAdd;
