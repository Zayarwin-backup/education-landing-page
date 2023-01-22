import React from 'react'
import './service.css'
import Intelligence from '../../images/depertment-1.png';
import Civial from '../../images/depertment-2.png'
import Business from '../../images/depertment-3.png'

const Service = () => {
  return (
    <div className='container service'>
        <h1>We Have Most of Popular Departments</h1>
        <div className="card__container">
            <div className="card">
                <img src={Intelligence} alt="" />
                <h3>Artificial Intelligence</h3>
                <p>Assertively parallel task synergistic deliverables after high-quality.</p>
                <a href='/'>Learn More <span className='arrow'>- ></span></a>
            </div>
            <div className="card">
                <img src={Civial} alt="" />
                <h3>Civil Engineering</h3>
                <p>Assertively parallel task synergistic deliverables after high-quality.</p>
                <a href='/'>Learn More <span className='arrow'>- ></span></a>
            </div>
            <div className="card">
                <img src={Business} alt="" />
                <h3>Business Studies</h3>
                <p>Assertively parallel task synergistic deliverables after high-quality.</p>
                <a href='/'>Learn More <span className='arrow'>- ></span></a>
            </div>
        </div>
        <button className='btn deparment__btn'>View all Deparments</button>
    </div>
  )
}

export default Service