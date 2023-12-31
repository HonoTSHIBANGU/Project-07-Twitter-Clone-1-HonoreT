import Layout from "./components/layout.jsx";
import SideBar from "./pages/SideBar.jsx";
import Trends from "./pages/Trends.jsx";
import Home from "./pages/home.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
