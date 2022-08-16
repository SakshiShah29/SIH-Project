import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../search/search'
import './homePage.css'
import CardStack from '../homeCards/cardStack'
import Pagination from '../pagination/pagination'
const homePage = () => {
    return (
        <>
            <div className="homePage">
                <Navbar />
                <Search />
                <CardStack />
                <CardStack />
                <CardStack />
                <CardStack />
                <CardStack />
                <Pagination />
            </div>

        </>
    )
}

export default homePage