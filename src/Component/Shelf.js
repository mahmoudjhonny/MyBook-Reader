import React, { Component } from 'react'

export default class CurrentlyReading extends Component {
    render() {
        const Books = this.props.Books;
        const title_catogirey = this.props.title;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title_catogirey}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {Books.map(book => (
                            <li key = {book + Math.random()}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select 
                                            value = {book.shelf} 
                                            onChange = {e => {this.props.ShelvesChanges(book , e.target.value)}}>
                                                <option value="move" disabled>Move to...</option>
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
                </div>
            </div>
        )
    }
}
