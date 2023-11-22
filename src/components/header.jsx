import React from 'react'
import logo from '../images/iconheader.svg';



function header() {
    return (
        <div className='header'>
            <h1 className='page-title'>Home</h1>
            <img className='top-tweets' src={logo} alt='' />
        </div>
    )
}

export default header