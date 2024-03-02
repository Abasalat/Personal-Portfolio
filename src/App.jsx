import Home from "./Components/Home";
import "./App.css";
import About from "./Components/About";
import Card from "./Components/Card";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About></About>
      <Card />
      <Skills />
      <Footer></Footer>
    </div>
  );
}

export default App;
