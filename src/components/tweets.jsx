import React from 'react'
import Photo5 from '../images/Reply.png'
import Photo6 from '../images/Retweet.png'
import Photo7 from '../images/React.png'
import Photo8 from '../images/Buton.png'
import Photo9 from '../images/tweet-profile-photo.png'
import Photo10 from '../images/Group.png'
import Photo12 from '../images/Tweet-image.png';
import Photo11 from '../images/Tweet-Profile-Photo.svg';
import Photo13 from '../images/hh.jpg';





const tweets = [
    {
        autor: 'CNN',
        autorDetail: '@CNN',
        tweetText: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        imageSrc: Photo9,
        Image: false,
        authorAvatarSrc: Photo10,
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
        imageSrc: Photo11,
        Image: Photo12,
        authorAvatarSrc: Photo10,
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
        Image: Photo13,
        authorAvatarSrc: Photo10,
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
                <div className='tweet-avatar'>
                    <img src={item.imageSrc} alt="" />
                </div>
                <div className='tweet-content'>
                    <div className='tweet-body'>
                        <div className='tweet-title'>
                            <div className='tweet-title-author'><p>{item.autor}</p> </div>
                            <div className='tweet-title-details'><img src={item.authorAvatarSrc} alt="" /></div>
                            <div className='tweet-title-details'><p >{item.autorDetail}</p></div>

                        </div>
                        <p>{item.tweetText}</p>
                        <div className='tweet-image'>
                            <img src={item.Image} alt="" />
                        </div>

                        <div className='tweet-actions'>
                            {tweets[0].actions.map(({ iconSource, id }) =>
                                <div className='tweet-action'>
                                    <img src={iconSource} />
                                    <div>{id}</div>
                                </div>
                            )}





                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
    return (
        <div className=''>{ht}</div>
    )
}

export default Tweets