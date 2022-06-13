import React from 'react';
import { Link } from 'react-router-dom';


export default ({match: {url}}) => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>{url === '/' ? <Link to="/new" className="btn btn-new">New Story</Link> : <Link to="/" className="btn btn-new">Home</Link>}</li>
          {/* <li><img alt="react-logo" src={logo} /></li> */}
          <li><Link to="/bookmark" className="btn btn-bookmarks">Bookmarks</Link></li>
        </ul>
      </nav>
    </header>
  )
}
