import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />

      <Links />
    </div>
  );
}

export default App;
