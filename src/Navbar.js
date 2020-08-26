import React from 'react'

const Navbar = () => {
  return (
    <div className='hero-head'>
      <nav class="navbar is-transparent">
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
              <a class="navbar-item" href='https://github.com/Robdowski' target='_blank'>
                Github
            </a>
              <a class="navbar-item" href='https://www.linkedin.com/in/robertcarterdev/' target='_blank'>
                LinkedIn
            </a>
              <span class="navbar-item">
                <a class="button is-info is-inverted" href='#port1'>
                  <span class="icon">
                    <i class="fas fa-folder"></i>
                  </span>
                  <span>Portfolio</span>
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
