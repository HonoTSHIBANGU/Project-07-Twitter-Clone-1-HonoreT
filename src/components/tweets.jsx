import React from 'react'
import photo from '../images/tweet-profile-photo.png';



function Tweets() {
    return (
        <div className='tweet'>
            <img src={photo} alt='' />
            <p>
                <span>CNN</span>
            </p>
            <p>
                President Joe Biden touted a new agreement reached with the european union to ease Trump-era
                tariffs on aluminuim and stell as a "major breakthrough" that would serve to both strengthen the
                US steel industry and combat the global climate crisis.
            </p>

            <div className='tweet-content'>
                <div className='tweet-body'>
                    <p className='tweet-title'>The new york Times</p>
                </div>

            </div>
        </div>
        
        <div></div>




    )
}


export default Tweets