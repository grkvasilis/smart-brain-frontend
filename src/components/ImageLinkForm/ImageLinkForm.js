import React from 'react'
import "./ImageLinkForm.css"

function ImageLinkForm({onInputChange, onButtonSubmit}) {
  return (
    <div className='image-link-form'>
        <p>
            {"This Magic Brain will detect faces in your pictures. Git it a try!"}
        </p>
        <div className='center'>
            <div className='image-link-form-box'>
                <input className='image-link-form-input' type='text' onChange={onInputChange} />
                <button onClick={onButtonSubmit} className='image-link-form-btn'>
                    Detect
                </button>
            </div>
        </div>
    </div>
  )
}

export default ImageLinkForm