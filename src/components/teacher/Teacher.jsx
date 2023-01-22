import React from 'react'
import "./teacher.css"
import Teacher1 from '../../images/instructor-1.png'
import Teacher2 from '../../images/instructor-2.png'
import Teacher3 from '../../images/instructor-3.png'

const Teacher = () => {
  return (
    <div className='container teacher'>
        <div className='teacher__header'>
            <h1>Introduce with Our<br /> Famous Teacher</h1>
            <button className='btn teacher__btn'>View all Teachers</button>
        </div>
        <div className="teacher__container">
            <div className="teacher__card">
                <img src={Teacher1} alt="" />
                <h2>Shaapir Prio</h2>
                <h4>Assistant Director</h4>
            </div>
            <div className="teacher__card">
                <img src={Teacher2} alt="" />
                <h2>Sellina</h2>
                <h4>Director</h4>
            </div>
            <div className="teacher__card">
                <img src={Teacher3} alt="" />
                <h2>John Smitch</h2>
                <h4>Assistant Director</h4>
            </div>
        </div>
    </div>
  )
}

export default Teacher