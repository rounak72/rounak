import React, { Component } from 'react';
import 'tachyons';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField : event.target.value })
        
    }

    render() {
        const filtered = this.state.robots.filter(robots => {
           return  robots.username.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })

        return (
            <div className='tc'>
                <h2 >My List</h2>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filtered} />
            </div>
        )
    }
}

export default App;
