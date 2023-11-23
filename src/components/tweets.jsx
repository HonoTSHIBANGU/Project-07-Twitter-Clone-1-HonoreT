import React from 'react'
import photo from '../images/tweet-profile-photo.png';
import photo4 from '../images/verified.svg';
import Reply1 from '../images/Tweet-Replies1.svg';
import Reply2 from '../images/Tweet-Replies2.svg';
import Reply3 from '../images/Tweet-Replies3.svg';
import Reply4 from '../images/Tweet-Replies4.svg';



function Tweets() {
    return (
        <div className='tweets'>
            <div className='tweet'>
                <img src={photo} alt='' />
                <p>
                    <span>CNN</span>
                    <span><img src={photo4} alt="" /></span>
                    <span className='tweet-title-details'>@CNN</span>
                </p>
                <p className=''>
                    President Joe Biden touted a new agreement reached with the european union to ease Trump-era
                    tariffs on aluminuim and stell as a "major breakthrough" that would serve to both strengthen the
                    US steel industry and combat the global climate crisis.
                </p>

                <div className='tweet-actions'>
                    <div className='tweet-action'><img src={Reply1} alt='' /></div>
                    <div className='tweet-action'><img src={Reply2} alt='' /></div>
                    <div className='tweet-action'><img src={Reply3} alt='' /></div>
                    <div className='tweet-action'><img src={Reply4} alt='' /></div>
                </div>


            </div>

        </div>



    )
}


export default Tweets