import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import data from "./FakeData.json";
import NoMatch from "./screens/NoMatch";
import Home from "./screens/Home";
import About from "./screens/About";
import Posts from "./screens/Posts";
import Post from "./screens/Post";
function App() {
  return (
    <div className="App">
      <div className="links">
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/posts"}>Posts</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts data={data} />} />
        <Route path="/posts/:post_id" element={<Post {...data} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
