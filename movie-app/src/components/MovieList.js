import React from "react";
import "./style.css"

function MovieList(props) {
  return (
    <div className="containerMovie" key={props.index}>
      <div className=" movieList">
        <div className="">
          <img src={props.Img1} className="" alt=""></img>
          <div className="centerP">
            <h6 className="">{props.cardName1}</h6>
            <p className="" >{props.cardTitle1}</p>
          </div>
          <div className="">
            <div>
            <h6 className=" ">Raiting {props.link1}</h6>
            
            
              <small className="">{props.cardTime1}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
