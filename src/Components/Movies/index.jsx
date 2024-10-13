import React, { useContext } from "react";
import MoviesCard from "../Home/componantes/MovieCard";
import { ContextMovies } from "../store";
import Loading from "../Home/componantes/Loading";

export default function Movies() {
  let { DataMov } = useContext(ContextMovies);
  return (
    <div className=" container">
      <div className="row">
        {Array.isArray(DataMov) && DataMov.length ? (
          DataMov.map((movies) => (
            <MoviesCard key={movies.id} movies={movies} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
