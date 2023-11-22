
import React from 'react'
import Header from '../components/header';
import TweetEditor from '../components/TweetEditor';

function home() {
  return (
    <main className='timeline'>
      <Header />
      <TweetEditor />

    </main>
  )
}

export default home