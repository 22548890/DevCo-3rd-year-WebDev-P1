import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="topnav">
    <a className="active" href="#home">
      Home
    </a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <input
      type="text"
      id="myInput"
      onkeyup="myFunction()"
      placeholder="Search.."
    />

   </div>


  );
}

export default App;
