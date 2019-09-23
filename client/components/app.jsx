import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Results from './results.jsx';
import Search from './search.jsx';
import Header from './header.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [],
                       pageCount: 0,
                       searchTerm: ''
                     };

    };

    setPageNumber(term) {
        axios.get(`/events?description_like=${term}`)
        .then(data => {
            this.setState({ 
                pageCount: data.data.length / 10
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    loadResults(page, term) {
        axios.get(`/events?description_like=${term}&_page=${page}&_limit=10`)
        .then(data => {
            this.setState({ 
                data: data.data
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    handlePageClick(data) {
        let selected = data.selected + 1;
        this.loadResults(selected, this.state.searchTerm);
    };

    handleSearch(term) {
        this.setState({ searchTerm: term })
        this.loadResults(1, term);
        this.setPageNumber(term);
    }

    render() {
        if (this.state.data) {
            return (
                <>
                <Header />
                <Search handleSearch={this.handleSearch.bind(this)} />
                <div className="results">
                    <Results data={this.state.data} />
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick.bind(this)}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
                </>
            )
        } else {
            return null;
        }
    }

}