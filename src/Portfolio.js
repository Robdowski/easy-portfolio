import React from 'react'

const Portfolio = (props) => {
    return (
        <div>
            <section className='hero is-fullheight is-success'>
                <div className='hero-head has-text-centered'>
                    <h2 className='title has-text-white'>{props.title}</h2>
                </div>
                <div className='hero-body'>
                    <div className='container' id='port-body'>
                        <i class="fas fa-chevron-left"></i>
                        <figure className='is-image'>
                            <img src={props.src | '#'} />
                        </figure>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
