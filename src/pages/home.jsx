
import React from 'react'
import Header from '../components/header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/tweets';

function home() {
  return (
    <main className='timeline'>
      <Header />
      <TweetEditor />
      <Tweets />

    </main>
  )
}

export default home