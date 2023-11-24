import React from 'react'
import avatar from '../images/profile-photo.png';
import icon1 from '../images/img.png';
import icon2 from '../images/Gif.png';
import icon3 from '../images/Poll.png';
import icon4 from '../images/Emoji.png';
import icon5 from '../images/Schedule.png';



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