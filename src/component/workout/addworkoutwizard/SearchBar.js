import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/exerciseinfo'

class SearchBar extends Component {
    state = {
        query: '',
        results: []
    }

    onInputChange = () => {
        this.setState({query: this.search.value},
             () => {
            if (this.state.query && this.state.query.length >1) {
             (this.state)}
        })
    }

    getInfo = () => {
        axios.get(`${API_URL}`)
        .then(({data}) => {
            this.setState({
                results: data
            })
        })
    }

    render(){
        return (
            <form>
                <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.onInputChange}
                ></input>
                <p>{this.state.query}</p>
            </form>
        )
    }



}

export default SearchBar