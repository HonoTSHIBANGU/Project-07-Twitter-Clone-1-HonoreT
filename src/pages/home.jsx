
import React from 'react'
import Header from '../components/header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/tweets';
import TweetContent from '../components/TweetContent.jsx';


function home() {
  return (
    <main className='timeline'>
      <Header />
      <TweetEditor />
      <Tweets />
      <TweetContent />



    </main>
  )
}

export default home