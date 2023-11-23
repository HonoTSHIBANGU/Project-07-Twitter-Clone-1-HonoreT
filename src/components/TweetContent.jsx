import React from 'react'
import photo2 from '../images/Tweet-Profile-Photo2.svg';
import photo3 from '../images/tweet-image.png';
import photo4 from '../images/verified.svg';
import Reply1 from '../images/Tweet-Replies1.svg';
import Reply2 from '../images/Tweet-Replies2.svg';
import Reply3 from '../images/Tweet-Replies3.svg';
import Reply4 from '../images/Tweet-Replies4.svg';



function TweetContent() {
    return (
        <div className='tweet'>
            <a className='tweet-avatar' href=""><img src={photo2} alt='' /></a>
            <div className='tweet-content'>

                <div className='tweet-body'>
                    <p className='tweet-title'><span className='tweet-title-author'>The new york Times</span>
                        <span><img src={photo4} alt='' /></span>
                        <span className='tweet-title-details'>@nytimes</span>
                    </p>
                    <p className='tweet-text'>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
                    <a className='tweet-image' href=""><img src={photo3} alt="" /></a>
                </div>
                <div className='tweet-actions'>
                    <div className='tweet-action'><img src={Reply1} alt="" /></div>
                    <div className='tweet-action'><img src={Reply2} alt="" /></div>
                    <div className='tweet-action'><img src={Reply3} alt="" /></div>
                    <div className='tweet-action'><img src={Reply4} alt="" /></div>
                </div>



            </div>


        </div>
    )
}

export default TweetContent