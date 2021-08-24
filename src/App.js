import React from 'react'
import { search , update , getAll} from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import BookShelfs from './Component/BookShelfs'
import Searchpage from './Component/Search'

class BooksApp extends React.Component {
   /** This is a state for intialize some objects such empty query for use in search func
   , books_info is an empty array for store the group of books that retrieve it from API
   and returns is an empty array also but for store the group of books that retrieve from search */ 
  state = {
    query: '',
    books_info: [],
    returns: []
  }

  // this func for get all data from API before the page render and store it in books_info arr
  componentDidMount() {
    getAll().then(res =>
      this.setState({ books_info: res }));
  }

// this func for move the books between shelves 
  shelvesChanges = (b, s) => {
    update(b, s).then(() => {
      this.setState(previous => ({
        books_info: previous.books_info.filter(books_change => {
          if (books_change.id === b.id) {
            return (b.shelf = s);
          } else {
            return b;
          }
        })
      }));
    });
  };

  // The func for search on books in API for add it in shelves 
  searchBook = Searchbook => {
    this.setState({ query: Searchbook });
    if (Searchbook.length > 0) {
      search(Searchbook).then(res => {
        this.setState({ returns: res });
      });
    }
  }

  render() {

    return (

      /** UI Part */
      <div className="app">
        <div className="list-books">
          <Switch>
            
            <Route path = "/search" > 
                    <Searchpage 
                    Books = {this.state.books_info}
                    query = {this.state.query}
                    change = {this.shelvesChanges}
                    search = {this.searchBook}
                    returns = {this.state.returns}
                    />
            </Route>
            
            <Route path = "/" exact>
              <BookShelfs Books={this.state.books_info} change={this.shelvesChanges} />
              </Route>
                
          </Switch>
        </div>
      </div>
    )
  }
}

export default BooksApp;