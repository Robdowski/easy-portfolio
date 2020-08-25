import React from 'react'

const Portfolio = (props) => {
    return (
        <div>
            <section className='hero is-fullheight is-success'>
                <div className='hero-head has-text-centered mt-6'>
                    <h2 className='title has-text-white'>{props.title}</h2>
                </div>
                <div className='hero-body'>
                    <div className='container' id='port-body'>
                        <div className='columns mx-3'>
                            <div className='column'>
                                <figure className='is-image is-2by1'>
                                    <img className='has-ratio' src={props.src} />
                                </figure>
                            </div>
                            <div className='column'>
                                <p className='has-text-white is-size-5'>
                                    {props.text}
                                </p>
                                <p className='mt-6 has-text-white is-size-5'>Technologies: {props.tech}</p>
                                <p className='mt-6 has-text-white is-size-5' id='port-icons'>
                                    <a className='has-text-white' href={props.live} target='_blank'>
                                        <div className='is-flex clickable'>
                                            <i className='is-size-3 fas fa-laptop'></i>
                                            <p className='has-text-white ml-3'>LIVE</p>
                                        </div>
                                    </a>
                                    {props.code !== 'private' && (
                                        <a className='has-text-white' href={props.code} target='_blank'>
                                        <div className='is-flex clickable mt-4'>
                                            <i className='is-size-3 fas fa-code'></i>
                                            <p className='has-text-white ml-3'>CODE</p>
                                        </div>
                                    </a>
                                    )}
                                    {props.code === 'private' && (
                                        <div className='is-flex mt-4'>
                                            <i className='is-size-3 fas fa-code'></i>
                                            <p className='has-text-white ml-3'>CODE PRIVATE (FOR CLIENT)</p>
                                        </div>
                                    )}
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
