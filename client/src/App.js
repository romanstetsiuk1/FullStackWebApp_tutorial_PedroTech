import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect (() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <h1>How are you??</h1>
    </div>
  );
}

export default App;
