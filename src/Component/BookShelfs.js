import React , { Component } from "react";
import Shelf from "./Shelf";

class BookShelfs extends Component {
    render(){
      const books_info = this.props.Books;
      console.log(books_info);
      const currentlyReading = books_info.filter(book => book.shelf === "currentlyReading");
      const wanttoread = books_info.filter(book => book.shelf === "wantToRead");
      const reading = books_info.filter(book => book.shelf === "read");
      console.log(currentlyReading);
      console.log(wanttoread);
      console.log(reading);
        return(
            <div className="list-books-content">
            <div>
              <Shelf 
              Books = {currentlyReading} 
              ShelvesChanges = {this.props.ShelvesChanges} 
              title = {"Currently Reading"}/>

              <Shelf 
              Books = {wanttoread} 
              ShelvesChanges = {this.props.ShelvesChanges} 
              title = {"Want To Read"}/>

              <Shelf 
              Books = {reading} 
              ShelvesChanges = {this.props.ShelvesChanges} 
              title = {"Read"}/>

            </div>
          </div>
        )
    }
}

export default BookShelfs;