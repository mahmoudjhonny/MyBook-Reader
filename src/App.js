import React from 'react'
import * as BooksAPI from './BooksAPI'
import { update } from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import BookShelfs from './Component/BookShelfs'
import Searchpage from './Component/Search'


class BooksApp extends React.Component {
  state = {
    query: '',
    returns: [],
    books_info: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(res =>
      this.setState({ books_info: res }));
  }

  shelvesChanges = (b, shelf) => {
    update(b, shelf).then(() => {
      this.setState(prevState => ({
        // Filter all books in state to find correct book match
        books: prevState.books.filter(book => {
          if (book.id === b.id) {
            // If book is found, set it's current shelf to a new one
            return (b.shelf = shelf);
          } else {
            return b;
          }
        })
      }));
    });
  };

  // searchBook = book => {
  //   this.setState({ query: book });
  //   if (book.length > 0) {
  //     search(book).then(res => {
  //       this.setState({ returns: res });
  //     });
  //   }
  // }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <Switch>
            <Route
            exact
            path = '/home'>
                {<BookShelfs Books={this.state.books_info} change={this.shelvesChanges} />}
            </Route>
            <Route
            exact
            path = '/search'>
                {<Searchpage />}
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default BooksApp;