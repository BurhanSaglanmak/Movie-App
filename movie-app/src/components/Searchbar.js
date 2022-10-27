import React from "react";

function Searchbar({ change, setchange, isClick,setIsClick }) {
  function click(){
    setIsClick(isClick+1)
  }
  return (
    <div className="input-group input-group-lg bar">
      <input
        type="text"
        value={change}
        onChange={(event) => {
          setchange(event.target.value);
        }}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Film Yaz!!"
      />
      <button className="btn" onClick={click}>İLERİ</button>
    </div>
  );
}

export default Searchbar;
