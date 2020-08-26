import React from 'react';
import 'bulma'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio'

const whitetail = require('./images/whitetail_portfolio.png')
const sauti = require('./images/sauti.png')
const space = require('./images/spacecowboys.png')
const challenges = require('./images/challenges.png')

const slides = [
    {
        "id": "port1",
        "title": "Whitetail Septic",
        "src": whitetail,
        "text": "Whitetail Septic is a website built fully customized for a client using Next.JS along with custom CSS. The website includes on-page search-engine optimization as well as a modern, fully responsive layout. The contact form is linked to a Node server which sends out an email to business owner upon submission.",
        "tech": "Next(React), HTML, CSS(Bulma), Node",
        "live": "https://whitetailseptic.com",
        "code": "private",
        "color": "success-dark"
    },
    {
        "id": "port2",
        "title": "Sauti Databank",
        "src": sauti,
        "text": "Sauti Databank is a data-visualization platform built for the non-profit company Sauti Africa. Sauti Africa provides market prices to cross-border traders in Kenya, Rwanda, Uganda, and Tanzania. The data visualization platform helps Sauti staff, researchers, and governmental organizations in providing aid to cross-border traders.",
        "tech": "React, GraphQL, Node/Express, MySQL",
        "live": "https://sauti.now.sh",
        "code": "https://github.com/Robdowski/sauti-be",
        "color": "primary-dark"
    },
    {
      "id": "port3",
      "title": "Space Cowboys",
      "src": space,
      "text": "Space Cowboys is a video game built using React, Django, and PostgreSQL by a team of 4 during a 4-day hackathon. The game utilizes Django as a backend and React for the front-end client. I utilized an algorithm to randomly create rooms, walls, and names and descriptions for each room on each planet.",
      "tech": "React, HTML Canvas, Python/Django, PostgreSQL",
      "live": "https://space-cowboys.netlify.app",
      "code": "https://github.com/python-django-unchained",
      "color": "primary-dark"
    },
    {
      "id": "port4",
      "title": "Code Challenges",
      "src": challenges,
      "text": "If you're still here, check out my code challenges github repository. I sometimes update this repo with new challenges that I do, along with a description of how I approached the problem and what I could have done better. If you want to see what my problem solving skills are like, this is where to do it.",
      "tech": "Python",
      "live": "https://github.com/Robdowski/code-challenges",
      "code": "https://github.com/Robdowski/code-challenges",
      "color": "primary-dark"
    }

  ]


function App() {
  return (
    <div className="App">
      <section className='hero is-info is-fullheight' id='main-hero'>
        <Navbar />
        <Route exact path='/' component={Home} />
      </section>
      {slides.map(item => (
        <Portfolio src={item.src} title={item.title} text={item.text} tech={item.tech} live={item.live} code={item.code} color={item.color} id={item.id} />
      ))}
      
    </div>
  );
}

export default App;
