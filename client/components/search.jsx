import React from 'react';

const Search = (props) => {

    const submitClick = (term) => {
        props.handleSearch(term);
        document.getElementById('search').value = '';
    }

    return (
        <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
                <div className="input-group">
                    <input type="text" id="search" className="form-control" placeholder="Search for keyword..."></input>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => submitClick(document.getElementById('search').value)} >Go!</button>
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Search;