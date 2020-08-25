import React from 'react';
import 'bulma'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'

const whitetail = require('./images/whitetail_portfolio.png')

const slides = [
    {
        "title": "Whitetail Septic",
        "src": whitetail,
        "text": "Whitetail Septic is a website built fully customized for a client using Next.JS along with custom CSS. The website includes on-page search-engine optimization as well as a modern, fully responsive layout.",
        "tech": "Next(React), HTML, CSS(Bulma), Node",
        "live": "https://whitetailseptic.com",
        "code": "private"
    },
    {
        "title": "Whitetail Septic",
        "src": whitetail,
    },
    {
        "title": "Whitetail Septic",
        "src": whitetail,
    }]


function App() {
  return (
    <div className="App">
      <section className='hero is-info is-fullheight'>
        <Navbar />
        <Route exact path='/' component={Home} />
      </section>
      {slides.map(item => (
        <Portfolio src={item.src} title={item.title} text={item.text} tech={item.tech} live={item.live} code={item.code} />
      ))}
      
    </div>
  );
}

export default App;
