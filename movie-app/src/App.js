import React, { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Movie from "./components/Movie";

function App() {
  const [change, setchange] = useState("");
  const [isClick, setIsClick]=useState(1)
  // state'i buraya taşıdık ki hem searchbar'da kullanalım hem de
  // movie componentinde. Movie componentinde, inputa yazılan harflerin
  // film ile eşleşip eşlenmediğini kontrol ediyoruz.
  return (
    <div className="App">
      <Searchbar change={change} setchange={setchange} isClick={isClick} setIsClick={setIsClick} />
      <Movie change={change} isClick={isClick} />
    </div>
  );
}

export default App;
