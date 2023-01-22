import React from 'react'
import './hero.css'
import HeroBanner from '../../images/hero-banner.png'

const Hero = () => {
  return (
    <div className='container hero'>
        <div className="hero__content">
            <h1>Start Your Future Education</h1>
            <p>Credibly redefine distinctive total linkage vis-a-vis multifunction data. Phosphorescently impact goal-oriented strategic</p>
            <button className='btn hero__btn'>Discover More</button>
        </div>
        <div className='hero__img'>
        <img src={HeroBanner} alt="" />
        </div>
    </div>
  )
}

export default Hero