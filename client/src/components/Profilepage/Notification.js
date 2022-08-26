import React from 'react'
import bell from '../../images/bell.png'
import './Notification.css'
const Notification = () => {
    const showNotificationDropDown = () => {
        document.querySelector('.notification-group').classList.toggle('d-none')
    }
    return (
        <>
            <div class="list-group notification-group d-none position-absolute">
                <a href="#" class="list-group-item list-group-item-action list-group-item-notification">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Congrats!! Your project is approved</h5>
                        {/* <small class="text-muted">3 days ago</small> */}
                    </div>
                    {/* <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-muted">And some muted small print.</small> */}
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-notification">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 c-black">Heyy!! Sakshi Requested for Collaboration</h5>
                        {/* <small class="text-muted">5 days ago</small> */}
                    </div>
                    <small class="mb-1">I saw your project, and I have some suggestion to imporve it</small>
                    {/* <small class="text-muted">And some muted small print.</small> */}
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-notification">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 c-black">Heyy!! Dhruv Requested for Collaboration</h5>
                        {/* <small class="text-muted">5 days ago</small> */}
                    </div>
                    <small class="mb-1">I saw your project, and I have some suggestion to imporve it</small>
                    {/* <small class="text-muted">And some muted small print.</small> */}
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-notification">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 c-black">Heyy!! Stuti Requested for Collaboration</h5>
                        {/* <small class="text-muted">5 days ago</small> */}
                    </div>
                    <small class="mb-1">I saw your project, and I have some suggestion to imporve it</small>
                    {/* <small class="text-muted">And some muted small print.</small> */}
                </a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-notification">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 c-black">Heyy!! Prarthana Requested for Collaboration</h5>
                        {/* <small class="text-muted">5 days ago</small> */}
                    </div>
                    <small class="mb-1">I saw your project, and I have some suggestion to imporve it</small>
                    {/* <small class="text-muted">And some muted small print.</small> */}
                </a>
            </div>
            <img src={bell} className="bell-notify" onClick={showNotificationDropDown} style={{ cursor: "pointer" }}></img>
        </>
    )
}

export default Notification