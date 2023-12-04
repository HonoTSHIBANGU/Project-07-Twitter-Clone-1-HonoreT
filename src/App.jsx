import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import SideBar from "./pages/SideBar.jsx";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <SideBar />
      <Home />
      <Trends />
    </Layout>
  );
};
