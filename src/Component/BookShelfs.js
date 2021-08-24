import React , { Component } from "react";
import Shelf from "./Shelf";
import SearchButton from "./SearchButton";
import Header from './Header'

export default class BookShelfs extends Component {
  /** UI */
    render(){
      // call books and change props
      const { Books , change } = this.props
      
      // this part for filter the books by shelf cat
      const currentlyReading = Books.filter(book => book.shelf === "currentlyReading");
      const wanttoread = Books.filter(book => book.shelf === "wantToRead");
      const reading = Books.filter(book => book.shelf === "read");

      console.log(Books);
      console.log(currentlyReading);
      console.log(wanttoread);
      console.log(reading);

        return(
          /** UI */
        <div className="list-books-content">
          {/* render header component */}
          <Header />

        <div>

          {/* render shelves Components */}
          <Shelf 
          Books = {currentlyReading}
          change = {change} 
          title = {"Currently Reading"}/>

          <Shelf 
          Books = {wanttoread}  
          change = {change}
          title = {"Want To Read"}/>

          <Shelf 
          Books = {reading} 
          change = {change}
          title = {"Read"}/>

        </div>

        {/* render searhe button component  */}
        <SearchButton />

      </div>
        )
    }
}