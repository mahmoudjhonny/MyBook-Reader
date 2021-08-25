import React, { Component } from 'react'
import PropTypes from "prop-types";

class CurrentlyReading extends Component {

    render() {

    // call books, change and change props
        const { Books, title , change} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {Books.map(book => (
                            <li key={book + Math.random()}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                            style={
                                                {
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                                                }}></div>
                                        <div className="book-shelf-changer">
                                            <select
                                                id={book.id}
                                                value={book.shelf ? book.shelf : "none"}
                                                onChange={e => change(book, e.target.value)}
                                            >

                                                <option value="move" disabled>Move to...</option>
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
                                    <div className="book-authors">{book.authors && book.authors.join(' , ')}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

CurrentlyReading.propTypes = {
    title: PropTypes.string,
    change: PropTypes.func,
    books: PropTypes.array
};

export default CurrentlyReading;