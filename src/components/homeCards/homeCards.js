import React from 'react'
import './homeCards.css'
const homeCards = () => {
    return (
        <>

            <div class="homeCard">
                <span class="badge rounded-pill bg-color text-bg-primary">Completed</span>
                <p className='cardTitle'>Plagarism Detector</p>
                <p className='cardSubtitle'>Charusat University of Science and Technology</p>
                <div className="tech-stack">
                    <p> Machine Learning</p>
                    <p> LSTM</p>
                    <p> Python</p>
                    <p> NLP</p>
                </div>

            </div>

        </>
    )
}

export default homeCards