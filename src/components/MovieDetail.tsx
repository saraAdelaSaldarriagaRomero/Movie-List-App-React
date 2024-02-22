
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function MovieDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState ();

  const getMovie = () => {
    const url = `https://api.themoviedb.org/3/movie/${id}`    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ1MDUyNmM3NjdlOTJlNzU2NWQ3NGQ1NTU2YWMyMSIsInN1YiI6IjY1YjEzMjM4Yjc2Y2JiMDE5NDJiYzkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1G88SYkt9JhNQV2zOy1dQA7CUlTPLW-cv81oo84XtA",
      },
    };

    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => data)
      .catch((err) => {
        console.error("Error fetching movies:", err);
        throw err;
      });
  };

  useEffect(() => {
    getMovie().then((data) => setMovie(data));
  },[]);


  function handleBack() {
    navigate (-1)
  }

  return (
    <section>
      <div className="movie-detail-container">
      
      {movie && (
        <>
          <img className="img-movie-detail"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="detail-container">
          <h2 className="movie-title-detail">{movie.title}</h2>
          <p className="movie-detail">RELASE DATE:{movie.release_date}</p>
          <p className="movie-detail">{movie.overview}</p>
          <p className="movie-detail">VOTES {movie.vote_average}</p>
          </div>

          <button className="button-back" onClick={handleBack}> MOVIE LIST</button>
        </>
      )}
    </div>

    
   

    </section>
  );
}


export default MovieDetail;





