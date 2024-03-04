import React from 'react'
import { FiSearch } from 'react-icons/fi';
function Searh({ handleSearch }) {
    return (
        <div className='search'>
            <FiSearch className='search-icon' size="1.3em" />
            <input type='text' placeholder='type to search' onChange={(e) => handleSearch(e.target.value)} />
        </div>
    )
}

export default Searh