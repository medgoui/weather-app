import React from 'react';

const Search = props => {

    return (
        <div className="search">
            <input type="text" className="form-control" placeholder="new york" onChange={props.change} value={props.location} />
            <button onClick={props.click}><i className="fa fa-search"></i></button>
        </div>
    );
}

export default Search