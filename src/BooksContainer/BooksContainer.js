import React, { useState } from "react";
import "./BooksContainer.css";
import Book from "./CreateBook/Book";
import Modal from "./CreateBook/AddBtn/Modal/ModalAdd";
import AddBtn from "./CreateBook/AddBtn/AddBtn";

function BooksContainer() {
  const [books, setBooks] = useState([]);
  const [modalClass, setModalClass] = useState("modal hidden");

  function addBook(newBook) {
    setBooks((prevBooks) => prevBooks.push(newBook));
  }

  function toggleModal(e) {
    console.log("called");
    setModalClass((prevClass) => {
      return prevClass.length > 5 ? "modal" : "modal hidden";
    });
  }

  return (
    <div>
      <AddBtn toggleModal={toggleModal} />
      <Modal toggleModal={toggleModal} modalClass={modalClass} />
      <div className="books">
        <Book
          bookInfo={{
            title: "test title",
            author: "test author",
            pages: "12",
            read: true,
          }}
        />
      </div>
    </div>
  );
}

export default BooksContainer;
