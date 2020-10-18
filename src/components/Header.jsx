import React from 'react'
import './Header.scss'

const Header = () => {
   return (
      <div>
         <header id="header" className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark ">
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
                        <li className="nav-item">Item1</li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
      </div>
   )
}

export default Header
