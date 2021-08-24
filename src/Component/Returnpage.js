import React, { Component } from "react";
import { update } from '../BooksAPI'

export default class Returnpage extends Component {
  render() {

    const { books, returns, query } = this.props;

    let returns_search_array = [];

returns.length > 0 && query !== "" ? 
      returns.forEach(result => {
        const results_Book = books.filter(book => book.id === result.id);
        (results_Book.length > 0) ? returns_search_array.push(...results_Book) : returns_search_array.push(result)
        }) : <h2>Don't match any book with this name</h2>
    

    return (
      <ol className="books-grid">
        {returns_search_array.map(book => (
          <li key={book + Math.random()}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"
                  style={
                    {
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                <div className="book-shelf-changer">
                  <select
                    id={book.id}
                    value={book.shelf ? book.shelf : "none"}
                    onChange={e => update(book, e.target.value)}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}