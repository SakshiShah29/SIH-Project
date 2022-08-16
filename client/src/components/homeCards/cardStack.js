import React from 'react'
import HomeCards from '../homeCards/homeCards'

const cardStack = () => {
    return (
        <>
            <div className="home-cards d-flex justify-content-center">
                <HomeCards />
                <HomeCards />
                <HomeCards />
            </div>
        </>
    )
}

export default cardStack