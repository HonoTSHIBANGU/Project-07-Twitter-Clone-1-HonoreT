
import React from 'react'
import Header from '../components/header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/tweets';
import SideBar from './SideBar';



function Home() {
  return (
    <>
      <div className="left-sidebar" >
        <SideBar />
      </div>

      <main className='timeline'>
        <Header />
        <TweetEditor />
        <Tweets />
      </main>

      <div className="right-sidebar">

      </div>
    </>
  )
}

export default Home