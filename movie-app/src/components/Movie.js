import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "./MovieList";
import "./style.css"


function Movie({ change,isClick }) {
  const [users,setUsers]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    const key = process.env.React_App_Key
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${isClick}`)
    .then((res)=> setUsers(res.data.results))
    
    .finally(()=> setIsLoading(false))
    //console.log(users);
  }, [users, isClick])


  const filtered = users?.filter((item) =>
   item.original_title.toLowerCase().includes(change.toLowerCase())
  );

  return (
    <div className="card-group">
      {isLoading && <div><h4 className="loading">Loading...</h4> </div>}
      {filtered?.map((item, index) => (
        <MovieList
          key={index}
          Img1={ `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
          cardName1={item.original_title}
          cardTitle1={item.overview}
          cardTime1={item.release_date}
          link1={item.vote_average}
          index={index}
        />
      ))}
    </div>
  );
}

export default Movie;
