import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <Work />
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <p style={{ backgroundColor: "#0a192f" }}>&nbsp;</p>
      <Contact />
    </div>
  );
}

export default App;
