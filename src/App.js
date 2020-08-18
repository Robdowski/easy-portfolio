import React from 'react';
import 'bulma'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'

 
function App() {
  return (
    <div className="App">
      <section className='hero is-info is-fullheight'>
        <Navbar />
        <Route exact path='/' component={Home} />
      </section>
      <Portfolio src='#' title='HELLO THIS IS A TITLE' />
    </div>
  );
}

export default App;
