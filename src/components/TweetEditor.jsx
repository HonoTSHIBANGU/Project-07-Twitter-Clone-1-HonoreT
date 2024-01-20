import React, { useContext, useState } from "react";
import UserContext from "../model/MyContext.js";
import tweet from "../model/Tweet.js";
import icon1 from "../images/img.png";
import icon2 from "../images/Gif.png";
import icon3 from "../images/Poll.png";
import icon4 from "../images/Emoji.png";
import icon5 from "../images/Schedule.png";
import userPerso from "../model/userPerso.js";
import { Link } from "react-router-dom";

function TweetEditor() {
  // Récupérer le contexte utilisateur en utilisant useContext
  const contextValue = useContext(UserContext);

  // État pour gérer les tweets
  const [tweets, setTweets] = useState([]);

  // Fonction pour ajouter un nouveau tweet
  const ajouterTweet = () => {
    // Créer un nouvel objet tweet
    const nouveauTweet = {
      id: tweets.length, // Utilisez la longueur actuelle des tweets comme nouvel identifiant
      userId: contextValue.userId, // Utilisez l'ID d'utilisateur à partir du contexte
      tweetText: "Votre contenu de tweet ici", // Ajoutez le texte du tweet
    };

    // Mettre à jour l'état des tweets avec le nouveau tweet
    setTweets([...tweets, nouveauTweet]);
  };

  return (
    <div className="flex items-start justify-start gap-16 p-3 border-b border-solid border-gray-700">
      <aside>
        <Link to="/Profil">
          <img
            className="h-16 w-16 rounded-full relative left-2 top-5 "
            src={userPerso.imageSrc}
            alt=""
          />
        </Link>
      </aside>

      <div className="flex-auto ">
        <input
          className="h-37 w-full border-none outline-none text-1.3rem bg-black text-white resize-none pt-10 pr-0 pb-0 pl-0 mt-13 mb-0"
          type="text"
          placeholder="Quoi de neuf ?"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
          </div>
          <button
            onClick={ajouterTweet} // Appeler la fonction ajouterTweet lors du clic sur le bouton "Tweet"
            className="capitalize px-3 py-0.5 border-none rounded-full bg-blue-500 text-white text-lg"
          >
            <span>Tweeter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
