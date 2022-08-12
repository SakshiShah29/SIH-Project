import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div class="homeCard">
    <span class="badge rounded-pill bg-color text-bg-primary">{props.tag}</span>
    <p className='cardTitle'>Plagarism Detector</p>
    <p className='cardSubtitle'>Charusat University of Science and Technology</p>
    <div className="tech-stack">
        <p> Machine Learning</p>
        <p> LSTM</p>
        <p> Python</p>
        <p> NLP</p>
    </div>

</div>
  )
}

export default Card