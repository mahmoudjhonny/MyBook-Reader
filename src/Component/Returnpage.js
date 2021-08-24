import React, { Component } from "react";

export default class Returnpage extends Component {
  render() {

    // call books, change, returns and query props
    const { books , returns , query , change } = this.props;

    let book_return = [];
    /** this condition for check the array of returns books id greater than zero and the query
     isn't empty push the result books on a new array to show on the screen */
    returns.length > 0 && query !== "" ? 
      returns.forEach(result => {
        const matchingResults = books.filter(book => book.id === result.id);
       (matchingResults.length > 0) ? book_return.push(...matchingResults) : book_return.push(result)
        }) : <h2>Don't match any books</h2>

        return(
          // UI
        <ol className="books-grid">
        {book_return.map(book => (
          <li key={book + Math.random()}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks && (
                  <img
                    src={book.imageLinks.thumbnail}
                    className="book-cover"
                    alt={book.title}
                    style={{ width: 128 }}
                  />
                )}
                {!book.imageLinks && (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundColor: "#000",
                      color: "#fff",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    NO IMAGE
                  </div>
                )}
                <div className="book-shelf-changer">
                  {/* If book is not on any shelf, give dropdown an empty value; otherwise set it's value to shelf name. On menu change, call the update props method to change shelf */}
                  <select
                    id={book.id}
                    value={book.shelf ? book.shelf : "none"}
                    onChange={e => change(book, e.target.value)}
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
              {/* itialize the title of book  */}
              <div className="book-title">{book.title}</div>
              {/* itialize the authors of book */}
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}