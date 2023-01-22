import React from 'react'
import './about.css'
import AboutBanner from '../../images/about-banner.png'
import AboutBannerVector from '../../images/about-vector.svg'

const About = () => {
  return (
    <div className='container about'>
        <div className="about__img">
            <img className='banner' src={AboutBanner} alt="" />
            <img className='banner__vector' src={AboutBannerVector} alt="" />
        </div>
        <div className="about__content">
            <h1>We Help to Create Possibility & Success in Your Career!</h1>
            <p>Continually administrate process-centric human capital rather than bleeding-edge methodologies. Distinctively supply accurate methods of empowerment before.</p>
            <button className='btn about__btn'>Get Started Today</button>
        </div>
    </div>
  )
}

export default About