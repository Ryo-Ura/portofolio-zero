import Topbar from "./components/topbar/Topbar";
import Portofolio from "./components/portofolio/Portofolio";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar></Topbar>
      <div className="sections">
        <Intro></Intro>
        <Portofolio></Portofolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>

      </div>
    </div>
  );
}

export default App;
