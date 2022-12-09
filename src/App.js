import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Portfolio />

      <Links />
    </div>
  );
}

export default App;
