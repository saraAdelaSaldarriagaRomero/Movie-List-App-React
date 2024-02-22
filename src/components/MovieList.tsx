import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard.tsx";
import Filter from "./Filter.tsx";
import SortBy from "./SortBy.tsx";
import { useNavigate } from "react-router-dom";




function MovieList() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [pageNumber, setPageNumber] = useState(1); // State to keep track of current page
  const navigate = useNavigate();
  

  const getMovies = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&without_genres=35,80,99,18,10751,36,10402,10749,10770,37&primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-12-31&page=${pageNumber}&sort_by=${sortBy}${genre ? `&with_genres=${genre}` : ''}`;
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjQ1MDUyNmM3NjdlOTJlNzU2NWQ3NGQ1NTU2YWMyMSIsInN1YiI6IjY1YjEzMjM4Yjc2Y2JiMDE5NDJiYzkzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1G88SYkt9JhNQV2zOy1dQA7CUlTPLW-cv81oo84XtA",
      },
    };

    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => data.results)
      .catch((err) => {
        console.error("Error fetching movies:", err);
        throw err;
      });
  };

  useEffect(() => {
    getAllMovies();
  }, [genre, sortBy, pageNumber]); // Add pageNumber to the dependency array

  const getAllMovies = () => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  };

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
    setPageNumber(1); // Reset page number when genre changes
  };

  const handleSortByChange = (selectedSortBy) => {
    setSortBy(selectedSortBy);
    setPageNumber(1); // Reset page number when sorting changes
  };

  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handleMovieClick = (id) => {
    navigate (`/detail/${id}`)
    console.log(id);
  };

  

  return (
    <section className="movie">
      <div className="titulo"><h1>Movie List</h1></div>
      <div className="div-filtros">
        <Filter onGenreChange={handleGenreChange} />
        <SortBy onSortByChange={handleSortByChange} />
      </div>
      <div className="movie-list-container">
        {movies.map((film) => (
          <MovieCard
            key={film.id}
            id={film.id}
            imageURL={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            title={film.title}
            movieYear={film.release_date}
            handleMovieClick={handleMovieClick}
            
          />
        ))}
      </div>

      <div>
      {[...Array(10)].map((_, index) => (
        <button key={index} onClick={() => setPageNumber(index + 1)} disabled={index + 1 === pageNumber}>{index + 1}</button>
      ))}
      <button onClick={handleNextPage}>Next Page</button> 
      </div>
      
    </section>
  );
}

export default MovieList;








