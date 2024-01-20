import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import { UserContext } from "./model/MyContext.js";
import Tweet from "./model/user.js";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <UserContext.Provider value={Tweet}>
      <Layout>
        <Home />
      </Layout>
    </UserContext.Provider>
  );
}
