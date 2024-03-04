import React from 'react'

function Header({ handleDarkMode }) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} className='toggleSave'>Toggle Mode</button>
        </div>
    )
}

export default Header