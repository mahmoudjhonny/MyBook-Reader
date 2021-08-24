import React , {Component} from "react";
import {Link } from 'react-router-dom';

export default class CloseSearch extends Component {
    
    render() {

        /** UI */

        return (
            <Link
                    to = '/' 
                    className="close-search"
                    >
                        Close
                    </Link>
        )
    }
}