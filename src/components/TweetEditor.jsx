import React from 'react'
import avatar from '../images/profile-photo.png';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';



function TweetEditor() {
    return (
        <div className='tweet-editor'>
            <aside className='avatar'>
                <img src={avatar} alt='' />
            </aside>

            <div className='tweet-editor-form'>
                <input className='tweet-editor-input' type='text' placeholder="What's happening?" />
                <div className='tweet-editor-buttons'>
                    <div className='tweet-editor-actions'>
                        <img src={icon1} alt='' />
                        <img src={icon2} alt='' />
                        <img src={icon3} alt='' />
                        <img src={icon4} alt='' />
                        <img src={icon5} alt='' />
                    </div>
                    <div className='button'></div>
                </div>
            </div>
        </div>



    )
}

export default TweetEditor