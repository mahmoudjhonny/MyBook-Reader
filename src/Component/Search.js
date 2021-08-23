import React, { Component } from 'react';
import {search} from '../BooksAPI'
import CloseSearch from './CloseSearch';
// import BookShelfs from './BookShelfs';

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
                    <CloseSearch />

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
                        {/* {this.querySearch !== '' ? 
                        <p>Don't match any Books</p> : <p>Hallo</p> } */}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search;