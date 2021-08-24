import React, { Component } from 'react';
import CloseSearch from './CloseSearch';
import Returnpage from './Returnpage'

class Search extends Component {

    render() {

        const {returns , search , change , Books , query} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <CloseSearch />

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={e => {search(e.target.value)}} 
                            value = {query}
                            />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Returnpage
                        books = {Books}
                        returns = {returns}
                        query = {query}
                        change = {change}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search;