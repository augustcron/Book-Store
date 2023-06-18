import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";

function BookScreen() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/v1/books/${id}`
        );
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row>
        <Col>
          <Image src={book.cover} alt={book.title} width="400" />
        </Col>
        <Col>
          <h3>{book.title}</h3>
          <Link to={`/authors/${book.author[0].id}`}>
            <h5>{book.author[0].name}</h5>
          </Link>
          <h5>Аннотация:</h5>
          <p>{book.annotation}</p>
          <h5>Год издания: {book.year_published}</h5>
          <h5>{book.price} р</h5>
        </Col>
      </Row>
    </div>
  );
}

export default BookScreen;
