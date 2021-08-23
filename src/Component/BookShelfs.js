import React , { Component } from "react";
import Shelf from "./Shelf";
import SearchButton from "./SearchButton";
import Header from './Header'

class BookShelfs extends Component {
    render(){
      const books_info = this.props.Books;
      console.log(books_info);

      const update_page = this.props.update;

      const currentlyReading = books_info.filter(book => book.shelf === "currentlyReading");
      const wanttoread = books_info.filter(book => book.shelf === "wantToRead");
      const reading = books_info.filter(book => book.shelf === "read");
      console.log(currentlyReading);
      console.log(wanttoread);
      console.log(reading);
        return(
        <div className="list-books-content">

          <Header />

        <div>
          <Shelf 
          Books = {currentlyReading}
          change = {update_page} 
          title = {"Currently Reading"}/>

          <Shelf 
          Books = {wanttoread}  
          change = {update_page}
          title = {"Want To Read"}/>

          <Shelf 
          Books = {reading} 
          change = {update_page}
          title = {"Read"}/>

        </div>
        <SearchButton />
      </div>
        )
    }
}

export default BookShelfs;