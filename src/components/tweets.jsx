import React from 'react'
import photo from '../images/tweet-profile-photo.png';
import photo4 from '../images/verified.svg';
import photo5 from '../images/a1Tweet-Replies.svg';
import photo6 from '../images/a2Tweet-Replies.svg';
import photo7 from '../images/a3Tweet-Replies.svg';
import photo8 from '../images/a4Tweet-Replies.svg';



function Tweets() {
    return (
        <div className='tweets'>

            <div className='tweet'>
                <img src={photo} alt='' />
                <p >
                    <span>CNN</span>
                    <span><img src={photo4} alt="" /></span>
                    <span className='tweet-title-details'>@CNN</span>
                </p>
                <p className='tweet-text'>
                    President Joe Biden touted a new agreement reached with the european union to ease Trump-era
                    tariffs on aluminuim and stell as a "major breakthrough" that would serve to both strengthen the
                    US steel industry and combat the global climate crisis.

                </p>
                <div className='tweet'>
                    <div ><img src={photo5} alt="" /></div>
                    <div ><img src={photo6} alt="" /></div>
                    <div ><img src={photo7} alt="" /></div>
                    <div ><img src={photo8} alt="" /></div>
                </div>
            </div>




        </div>



    )
}


export default Tweets