import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Book from "../Book";




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
      <Book book={book} />
    </div>
  );
}

export default BookScreen;