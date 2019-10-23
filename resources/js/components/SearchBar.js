import React, { Component } from 'react';
 
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="search-zone">
                <h2 className="text-center mb-5">Apprendre en toute liberté</h2>
                <div className="search">
                    <input type="text" placeholder="Recherche" className="search-input"/>
                    <button className="d-inline-block ml-2 btn-primary btn">Search</button>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;