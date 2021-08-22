import React, { Component } from 'react';
import {search} from '../BooksAPI'
import BookShelfs from './BookShelfs';

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            querySearch: '',
            books: []
        }
    }

    handleChanges = async query => {
        const res = query.target.value;
        if(res.trim()){
        try{
        this.setState({ querySearch: res });
        const result = await search(res);
        if(result.error){
            this.setState({books: []});
        }else {
            this.setState({books: result});
        }
    }catch(error) {
        console.log(error);
    }
}else{
    this.setState({books: []});
}
}

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search"
                        onClick={() => { this.props.showSearchPage(false) }
                        }>
                        Close
                    </button>

                    <div className="search-books-input-wrapper">
                        { }
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleChanges} 
                            value = {this.state.querySearch}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 && 
                        this.state.books.map(book => <BookShelfs key = {book + Math.random()} {... book}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search;