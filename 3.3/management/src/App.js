import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <form onSubmit={addBook} className="form">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit" className="add-btn">
            Add Book
          </button>
        </form>
      </div>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div>
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
            </div>

            <button className="remove-btn" onClick={() => removeBook(book.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
