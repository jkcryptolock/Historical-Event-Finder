import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    loadData() {
        axios.get('/data');
    }

    componentDidMount() {

    }

    render() {
        return (
            <h1>Hello World</h1>
        )
    }

}