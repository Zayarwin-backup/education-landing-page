import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Teacher from "./components/teacher/Teacher";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Teacher />
    </div>
  );
}

export default App;
