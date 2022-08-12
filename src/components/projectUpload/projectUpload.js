import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './projectUpload.css'
import upload from '../../images/upload-image.png'
import attach from '../../images/attach.png'
import imgSection from '../../images/img-section.png'
import cross from '../../images/cross.png'
const ProjectUpload = () => {




    const handleStatusChange = () => {
        if (document.querySelector('#OnGoing').checked) {
            document.querySelector('.upload-project-area').classList.add('d-none')
        }
        else if (document.querySelector('#Completed').checked) {
            document.querySelector('.upload-project-area').classList.remove('d-none')

        }
    }

    return (

        <>
            <Navbar />
            <div className="project-upload d-flex flex-column justify-content-center align-items-center">
                <h1>Upload Project</h1>
                <div className="input-fields-project-upload">
                    <div class="mb-3">
                        <label class="label-project-upload">Project Title <span className='cumpulsory'>*</span></label>
                        <input type="text" class="input-project-upload" placeholder="Title of your project" />
                    </div>
                    <div class="mb-3">
                        <label class="label-project-upload">Abstract <span className='cumpulsory'>*</span></label>
                        <input type="text" class="input-project-upload" placeholder="Abstract of your project" />
                    </div>
                    <div class="mb-3">
                        <label class="label-project-upload">Technology Stack <span className='cumpulsory'>*</span></label>
                        <div className="stack-details d-flex mb-1">
                            <div className='tech-stacks'>Java <span class="badge">✕</span></div>
                            <div className='tech-stacks'>JavaScript <span class="badge">✕</span></div>
                            <div className='tech-stacks'>ReactJS <span class="badge">✕</span></div>

                        </div>
                        <input type="text" class="input-project-upload" placeholder="Technology Stack of your project" />
                    </div>
                    <div class="mb-3">
                        <label class="label-project-upload">Upload Photos</label>
                        <button className='upload-photos-button'>Drag and drop or browse your files <img src={upload} alt="" /> </button>
                        <div className="image-content">
                            <div className="image-stack d-inline-block mr-1">
                                <img src={imgSection} className='img-content-uploaded' alt="" />
                                <div className="cover"> <img src={cross} alt="" /> </div>
                            </div>
                            <div className="image-stack d-inline-block mr-1">
                                <img src={imgSection} className='img-content-uploaded' alt="" />
                                <div className="cover"> <img src={cross} alt="" /> </div>
                            </div>
                            <div className="image-stack d-inline-block mr-1">
                                <img src={imgSection} className='img-content-uploaded' alt="" />
                            </div>
                            <div className="image-stack d-inline-block mr-1">
                                <img src={imgSection} className='img-content-uploaded' alt="" />
                                <div className="cover"> <img src={cross} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="label-project-upload">Other Creators</label>
                        <input type="text" class="input-project-upload" placeholder="Email ID of other creators" />
                    </div>

                    <div class="mb-5">
                        <label class="label-project-upload">Project Status <span className='cumpulsory'>*</span></label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id='Completed' name='status' value="option2" onChange={handleStatusChange} />
                            <label class="form-check-label" for="inlineCheckbox2">Completed</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id='OnGoing' name='status' value="option1" onChange={handleStatusChange} />
                            <label class="form-check-label" for="inlineCheckbox1">OnGoing</label>
                        </div>

                    </div>
                    <div class="upload-project-area mb-5">
                        <label class="label-project-upload">Upload Zip File of Project</label>
                        <button className='upload-photos-button btn-small'>Add File <img src={attach} alt="" /> </button>

                    </div>
                    <div class="d-flex justify-content-center mb-5">
                        <button className='verification-button'>Send for Verification</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectUpload