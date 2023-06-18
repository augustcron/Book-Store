import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";


function AuthorScreen() {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/v1/authors/${id}`
        );
        setAuthor(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAuthor();
  }, [id]);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row>
        <Col>
          <Image src={author.photo} alt={author.photo} width="400" />
        </Col>
        <Col>
          <h2>{author.name}</h2>
          <h2>{author.about}</h2>
        </Col>
      </Row>
    </div>
  );
}

export default AuthorScreen;
