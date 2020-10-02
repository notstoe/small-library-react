import React, { useState } from "react";
import "./ModalAdd.css";

function ModalAdd(props) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    pageNum: "",
    read: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    const temp = type === "checkbox" ? checked : value; // for checkboxes must use 'checked' instead of 'value'

    setNewBook((prevState) => ({ ...prevState, [name]: temp }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (newBook.title.length < 1 || newBook.author.length < 1) return;
    if (isNaN(newBook.pageNum)) return;
    props.addBook(newBook);
    props.toggleModal();

    const clearState = {
      title: "",
      author: "",
      pageNum: "",
      read: false,
    };
    setNewBook(clearState);
  }

  return (
    <div onClick={props.toggleModal} id="myModal" className={props.modalClass}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <span onClick={props.toggleModal} className="close">
          {"\u00D7"}
        </span>
        <form>
          <label htmlFor="title">Title of the Book:</label>
          <br />
          <input
            className="inputStyle"
            type="text"
            id="titleInput"
            name="title"
            onChange={handleChange}
            value={newBook.title}
            required="required"
          />
          <br />

          <label htmlFor="author">Author:</label>
          <br />
          <input
            className="inputStyle"
            type="text"
            id="authorInput"
            name="author"
            onChange={handleChange}
            value={newBook.author}
            required="required"
          />
          <br />

          <label htmlFor="pageNum">Number of Pages:</label>
          <br />
          <input
            className="inputStyle"
            type="text"
            id="pageNumInput"
            name="pageNum"
            onChange={handleChange}
            value={newBook.pageNum}
            required="required"
          />
          <br />

          <label htmlFor="read">Tick the box if you've already read it</label>
          <br />
          <input
            type="checkbox"
            id="readInput"
            name="read"
            onChange={handleChange}
            checked={newBook.read}
          />
          <br />

          <label htmlFor="submitBtn"></label>
          <br />
          <input
            onClick={handleSubmit}
            type="submit"
            id="submitBtn"
            name="submitBtn"
            value="Submit"
          />
          <br />
        </form>
      </div>
    </div>
  );
}

export default ModalAdd;
