import Topbar from "./components/topbar/Topbar";
import Portofolio from "./components/portofolio/Portofolio";
import Intro from "./components/intro/Intro";
// import Works from "./components/works/Works";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu"; 
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portofolio></Portofolio>
        {/* <Works></Works>
        <Testimonials></Testimonials> */}
        <Contact></Contact>

      </div>
    </div>
  );
}

export default App;
