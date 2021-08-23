import React, { Component } from 'react';
import CloseSearch from './CloseSearch';
import SearchReturnes from './SearchReturnes'

class Search extends Component {

    render() {

        const {state , search , change} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <CloseSearch />

                    <div className="search-books-input-wrapper">
                        { }
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={e => {search(e.target.value)}} 
                            value = {state.query}
                            />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <SearchReturnes
                        books = {state.books_info}
                        returns = {state.returns}
                        query = {state.query}
                        change = {change}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search;