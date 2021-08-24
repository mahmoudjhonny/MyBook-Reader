import React , {Component} from "react";
import {Link } from 'react-router-dom';

export default class CloseSearch extends Component {
    
    clearSearchInput = () => {
        this.setState({querySearch: ''});
    }

    render() {
        return (
            <Link
                    to = '/' 
                    className="close-search"
                    onClick = {this.clearSearchInput}
                    >
                        Close
                    </Link>
        )
    }
}