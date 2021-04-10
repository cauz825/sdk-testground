import React, { useState } from 'react'

const mtg = require('mtgsdk')

function Search() {

    const [cardName, setCardName] = useState('')

    function handleCardName(e) {
        setCardName(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        console.log(cardName)
    }

    return(
        <form>
            <input onChange={handleCardName} type='text' name='name' placeholder='Card Name' />
            <button onClick={handleSearch} type='submit'>Search</button>
        </form>
    )
}

export default Search;