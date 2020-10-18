import React from 'react'
import './Header.scss'

const Header = () => {
   return (
      <div>
         <header id="header" className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container">
                  <a href="#" className="navbar-brand">BVM Corp</a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navContent"
                     aria-controls="navContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navContent">
                     <ul className="navbar-nav mr-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                           <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                           <a href="" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                           <a href="" className="nav-link">About</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a href=""
                              className="nav-link 
                           dropdown-toggle"
                              id="navDrop"
                              role="button"
                              data-toggle="dropdown"
                              aria-expanded="false"
                           >Services</a>
                           <ul className="dropdown-menu" aria-labelledby="navDrop">
                              <li><a href="" className="dropdown-item">Drop1</a></li>
                              <li><a href="" className="dropdown-item">Drop2</a></li>
                              <li><a href="" className="dropdown-item">Drop3</a></li>
                           </ul>
                        </li>
                     </ul>
                     <form action="#" className="d-flex">
                        <input type="text" className="form-control mr-2" />
                        <button className="btn btn-outline-info">Search</button>
                     </form>
                  </div>
               </div>
            </nav>
         </header>
      </div >
   )
}

export default Header
