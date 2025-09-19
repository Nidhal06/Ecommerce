import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email </h1>
            <p>Subscripe to our newsletter and stay updated</p>
            <div className='form'>
            <input type='email' placeholder='Your E-mail ici'/>
            <button>Subscripe</button>
            </div>
        </div>
    )
}
export default NewsLetter
