import React from 'react'

const Navbar = () => {
    return (
        <div className='hero-head'>
            <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
            <h1 className='has-text-white is-size-1 has-text-weight-semibold'>Robert Carter</h1>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar
