import React from 'react'
import './ProfileBadge.css'
import star5 from '../../images/daimond-5.png'
import star4 from '../../images/daimond-4.png'
import star3 from '../../images/daimond-3.png'
import star2 from '../../images/daimond-2.png'
import star1 from '../../images/daimond-1.png'
const ProfileBadge = () => {
    const handleClickOnProfileBadge5 = () => {
        window.open('https://testnets.opensea.io/assets/rinkeby/0x059dec2a9e4af2d1f0e6b0f6c0c28a4e201a5546/29', '_blank');
    }
    const handleClickOnProfileBadge4 = () => {
        window.open('https://testnets.opensea.io/assets/rinkeby/0x059dec2a9e4af2d1f0e6b0f6c0c28a4e201a5546/23', '_blank');
    }
    return (
        <div className='d-flex profile-badge'>
            <div className="badge-5" onClick={handleClickOnProfileBadge5}>
                <span>7</span>
                <img src={star5} alt="" />
            </div>
            <div className="badge-4" onClick={handleClickOnProfileBadge4}>
                <span>2</span>
                <img src={star4} alt="" />
            </div>
            <div className="badge-3">
                <span>4</span>
                <img src={star3} alt="" />
            </div>
            <div className="badge-2">
                <span>3</span>
                <img src={star2} alt="" />
            </div>
            <div className="badge-1">
                <span>8</span>
                <img src={star1} alt="" />
            </div>
        </div>
    )
}

export default ProfileBadge