import { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import BookCard from "./BookCard";
//component makes the API searches and renders the results with BookCards
export default function Library() {
  const [books, setBooks] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const getBooks = async (search) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apiKey}&maxResults=40`
      )
      .then((res) => setBooks(res.data));
    console.log(books);
  };

  //Loading and Loaded functions for API calls
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="list">
        {books.items.map((book) => (
          <div className="column">
            <BookCard key={book.id} props={book} />
          </div>
        ))}
        ;
      </div>
    );
  };
  //displays books on React by default
  useEffect(() => {
    getBooks("React");
  }, []);
  return (
    <div className="App">
      <h1>Get Started With Your Reading Journey Today!</h1>
      <Form booksearch={getBooks} />
      {books ? loaded() : loading}
    </div>
  );
}
