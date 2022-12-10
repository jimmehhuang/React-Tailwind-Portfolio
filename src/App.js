import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <Links />
      <Contact />
    </div>
  );
}

export default App;
