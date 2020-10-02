import React, { useState, useEffect } from "react";
import "./BooksContainer.css";
import Book from "./CreateBook/Book";
import Modal from "./CreateBook/AddBtn/Modal/ModalAdd";
import AddBtn from "./CreateBook/AddBtn/AddBtn";

function BooksContainer() {
  const [books, setBooks] = useState([]);
  const [modalClass, setModalClass] = useState("modal hidden");

  function addBook(newBook) {
    let newState = books.slice();
    newState.push(newBook);
    setBooks(newState);
  }

  function toggleRead(e) {
    const bookIndex = e.target.parentNode.attributes[1].nodeValue;
    let newState = books.slice();
    newState[bookIndex].read = !newState[bookIndex].read;
    setBooks(newState);
  }

  function rmvBook(e) {
    const ref = e.target.parentNode.attributes[1].nodeValue;
    let newStateArr = books.slice();
    newStateArr.splice(ref, 1);
    setBooks(newStateArr);
  }

  function toggleModal(e) {
    const newClass = modalClass.length > 5 ? "modal" : "modal hidden";
    setModalClass(newClass);
  }

  const BooksComponents = books.map((book, index) => (
    <Book
      bookInfo={book}
      key={index}
      toggleRead={toggleRead}
      metadata={index}
      rmvBook={rmvBook}
    />
  ));

  return (
    <div>
      <AddBtn toggleModal={toggleModal} />
      <Modal
        toggleModal={toggleModal}
        modalClass={modalClass}
        addBook={addBook}
      />
      <div className="books">{BooksComponents}</div>
    </div>
  );
}

export default BooksContainer;
