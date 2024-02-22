

function MovieCard ({ imageURL, title, movieYear, handleMovieClick, id}: MovieProps){
  return (
    
      <section className="movie-card" onClick={()=>handleMovieClick(id)}>
          <img src={imageURL} alt=""/>
          <h5>{title}</h5>
          <p>{movieYear}</p>
          
      </section>
  );
}

export default MovieCard
















// import React from 'react';
// import { URL_IMAGE } from "../services/movieService";

// const MovieItem = ({ movie, onSelectMovie }) => {
//   return (
//     <div className="col-md-4 mb-4" onClick={() => onSelectMovie(movie)}>
//       <img
//         src={movie.poster_path ? `${URL_IMAGE}${movie.poster_path}` : 'URL_DE_FALLBACK'}
//         alt=""
//         height={400}
//         width="90%"
//       />
//       <h5 className="text-center">{movie.title}</h5>
//       <h6 className="text-left">{movie.release_date}</h6>
//     </div>
//   );
// };

// export default MovieItem;

// import React from 'react';
// import { URL_IMAGE } from "../services/movieService";

// interface MovieItemProps {
//   movie: {
//     poster_path: string;
//     title: string;
//     release_date: string;
//     // Agrega más propiedades según las necesidades de tu aplicación
//   };
//   onSelectMovie: (movie: { poster_path: string; title: string; release_date: string }) => void;
// }

// const MovieItem: React.FC<MovieItemProps> = ({ movie, onSelectMovie }) => {
//   return (
//     <div className="col-md-4 mb-4" onClick={() => onSelectMovie(movie)}>
//       <img
//         src={movie.poster_path ? `${URL_IMAGE}${movie.poster_path}` : 'URL_DE_FALLBACK'}
//         alt=""
//         height={400}
//         width="90%"
//       />
//       <h5 className="text-center">{movie.title}</h5>
//       <h6 className="text-left">{movie.release_date}</h6>
//     </div>
//   );
// };

// export default MovieItem;
