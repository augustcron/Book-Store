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
        {books.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} xl={3}>
            <Link to={`/books/${book.id}`}></Link>
            <Book book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;