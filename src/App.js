import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import About from "./components/navComponents/About";
import Projects from "./components/navComponents/Projects";
import Contacts from "./components/navComponents/Contacts";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
