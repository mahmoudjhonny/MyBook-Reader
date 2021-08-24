import React from 'react'
import { search , update , getAll} from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import BookShelfs from './Component/BookShelfs'
import Searchpage from './Component/Search'


class BooksApp extends React.Component {
  state = {
    query: '',
    books_info: [],
    returns: []
  }

  componentDidMount() {
    getAll().then(res =>
      this.setState({ books_info: res }));
  }

  shelvesChanges = (b, s) => {
    update(b, s).then(() => {
      this.setState(prevState => ({
        books_info: prevState.books_info.filter(book => {
          if (book.id === b.id) {
            return (b.shelf = s);
          } else {
            return b;
          }
        })
      }));
    });
  };

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