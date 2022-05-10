import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";

import "./style/landing.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
      {/* end of intro */}
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
