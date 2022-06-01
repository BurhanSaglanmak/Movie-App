import React from "react";

function MovieList(props) {
  return (
    <div className="col-2 row-cols-1" key={props.index}>
      <div className="row">
        <div className="card">
          <img src={props.Img1} className="card-img-top" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{props.cardName1}</h5>
            <p className="card-text" >{props.cardTitle1}</p>
          </div>
          <div className="card-footer">
            <div>
            <p className="card-text  btn-primary">Raiting {props.link1}</p>
            
            
              <small className="text-muted">{props.cardTime1}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
