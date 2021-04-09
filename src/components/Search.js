import React from 'react'

const mtg = require('mtgsdk')

function Search() {

    function handleSearch(e) {
        e.preventDefault();
        console.log('test')
    }

    return(
        <form>
            <input type='text' name='name' placeholder='Card Name' />
            <button onSubmit={handleSearch()} type='submit'>Search</button>
        </form>
    )
}

export default Search;