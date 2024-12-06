import React from 'react'

const Header = (onSubmit, onChang, value) => {
    // const handleChange = (e) => {
    //     setSearchQuery(e.target.value)
    //   };
  return (
    <div>   
        <header className="header">
    <h2> <span>AdeEmma</span> movie app</h2>
        <form onSubmit={onSubmit}>
          <input 
           className="header-search"
            type="text"
            placeholder="Search movies..."
            value={value}
            onChange={(e) => onChang(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        </header>
        </div>
  )
}

export default Header