import React from 'react'
import "./popup.scss";
export default function Popup() {
    return (
        <div className='popup-background'>
            <div className='container'>
                <span className='close'>X</span>
                <div className='title'>
                    title
                </div>
                <div className='body'>
                    <p>
                    The AADF is a direct implementation organization focused on the 
                    development of a sustainable private sector economy and a democratic 
                    society in Albania.
                    </p>
                </div>
                <div className='footer'></div>
            </div>
        </div>
    )
}
