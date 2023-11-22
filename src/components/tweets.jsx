import React, { useState } from 'react';
import './Tweet.css'; // Importez le fichier de style pour le tweet

const Tweet = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleRetweet = () => {
    setRetweets(retweets + 1);
  };

  const handleTweet = () => {
    // Implémentez la logique pour publier le tweet
    console.log('Tweet publié :', tweetContent);
  };

  return (
    <div className="tweet-container">
      <textarea
        placeholder="Quoi de neuf ?"
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      />
      <div className="tweet-actions">
        <button onClick={handleTweet}>Tweet</button>
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleRetweet}>Retweet ({retweets})</button>
      </div>
    </div>
  );
};

export default Tweet;