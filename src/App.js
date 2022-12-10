import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <Links />
    </div>
  );
}

export default App;
