import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Component/Header'
import Search from './Component/Search'
import BookShelfs from './Component/BookShelfs'
import SearchButton from './Component/SearchButton'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books_info: []
  }

  SearchState = (state) => {
    this.setState({showSearchPage: state});
  }

  componentDidMount() {
    BooksAPI.getAll().then(res => this.setState({books_info: res}))
  }

  // ShelvesChanges = (books , shelf) => {
  //   this.setState({
  //     books_info: this.state.books_info.map(book => book.id === books.id ? (book.shelf = shelf) : book
  //     )
      
  //   })
  // }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <Search showSearchPage = {this.SearchState}/>
        ) : (
          <div className="list-books">
              <Header/>
              <BookShelfs Books = {this.state.books_info} change = {this.ShelvesChanges}/>
              <SearchButton showSearchPage = {this.SearchState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
