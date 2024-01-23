import Layout from "./components/layout.jsx";
import Home from "./pages/Home.jsx";
import Tweet from "./model/Tweet.js";
import TweetProvider from "./contexte/TweetProvider.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <TweetProvider>
      <Layout>
        <Home />
      </Layout>
    </TweetProvider>
  );
}
