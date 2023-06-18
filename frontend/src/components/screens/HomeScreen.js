import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Book from "../Book";
import axios from "axios";

function Homescreen() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/v1/books/");
      setBooks(data);
    }
	fetchBooks()
  },[])
  
  return (
    <div>
      <h1 className="text-center">Новинки</h1>
      <Row>
        {books.slice(0, 5).map((book) => (
          <Col key={book.id}>
            <Link to={`/books/${book.id}`}></Link>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;