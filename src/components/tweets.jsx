import React from 'react'
import Photo5 from '../images/Reply.png'
import Photo6 from '../images/Retweet.png'
import Photo7 from '../images/React'
import Photo8 from '../images/Buton.png'
import Photo9 from '../images/tweet-profile-photo.png'
import photo10 from '../images/Group.png'
import photo11 from '../images/Tweet-Profile-Photo2.svg';
import photo12 from '../images/Tweet-image.png';







const tweets = [
    {
        autor: 'CNN',
        autorDetail: '@CNN',
        tweetText: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        imageSrc: Photo9,
        Image: false,
        authorAvatarSrc: photo10,
        actions: [
            { id: 1, iconSource: Photo5 },
            { id: 2, iconSource: Photo6 },
            { id: 3, iconSource: Photo7 },
            { id: 4, iconSource: Photo8 },

        ]
    },
    {
        autor: 'The New York Times',
        autorDetail: '@anytimes',
        tweetText: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.',
        imageSrc: photo11,
        Image: photo12,
        authorAvatarSrc: photo10,
        actions: [
            { id: 1, iconSource: Photo5 },
            { id: 2, iconSource: Photo6 },
            { id: 3, iconSource: Photo7 },
            { id: 4, iconSource: Photo8 },
        ]

    },
    {
        autor: 'Twitter',
        autorDetail: '@Twitter',
        tweetText: 'BIG NEWS lol jk still Twitter.',
        imageSrc: false,
        Image: '',
        authorAvatarSrc: photo10,
        actions: [
            { id: 1, iconSource: Photo5 },
            { id: 2, iconSource: Photo6 },
            { id: 3, iconSource: Photo7 },
            { id: 4, iconSource: Photo8 },
        ]


    }

]


function Tweets() {
    const ht = tweets.map((item) =>
        <div className='tweets'>
            <div className='tweet'>
                <div className='tweet-title'>
                    <p className='tweet-title'><span className='tweet-title-author'>The new york Times</span>
                        <span><img src={photo4} alt='' /></span>
                        <span className='tweet-title-details'>@nytimes</span>
                    </p>
                    <p className='tweet-text'>Gardening boomed during the pandemic. Six Black writers share how it
                        has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
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
    return (
        <div className=''>{ht}</div>
    )
}

export default Tweets