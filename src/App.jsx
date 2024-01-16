import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";

import { TweetContext } from "./pages/useTweet.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <Layout>
      <Home />
      <userNameAll />
    </Layout>
  );
}
