import TopBar from "./components/Top/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work"
import Test from "./components/Test/Test"
import Contact from "./components/Contact/Contact"
import "./App.scss"
import {useState} from 'react'
import Side from "./components/side/Side";
function App() {
  const[open, setopen]=useState(false)
  return (
    <div className="app">
      <TopBar open={open} setopen={setopen} />
      <Side open={open} setopen={setopen}/>
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Work/>
        <Test/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
