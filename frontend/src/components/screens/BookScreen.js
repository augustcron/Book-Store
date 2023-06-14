import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import books from "../../books";

function BookScreen() {
  const { id } = useParams();
  const book = books.find((p) => p._id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <Row className="my-4">
        <Col md={3}>
          <Image src={book.cover} alt={book.title} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{book.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Author: {book.author}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Price: {book.price}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Year published: {book.year_published}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{book.annotation}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default BookScreen;