import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'


function Book({ book }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/books/${book.id}`}>
        <Card.Img src={book.cover} />
      </Link>

      <Card.Body>
        <Link to={`/books/${book.id}`}>
          <Card.Title as="div">
            <strong>{book.title}</strong>
          </Card.Title>
        </Link>
        <Link to={`/authors/${book.author[0].id}`}>
              <Card.Title as="div">
                <strong>{book.author[0].name}</strong>
              </Card.Title>
            </Link>
        <Card.Text as="h3">{book.price}₽</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Book;