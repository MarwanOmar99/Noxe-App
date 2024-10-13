import React, { useContext } from "react";
import { imgPath } from "../../imgPath";
import { Link } from "react-router-dom";
import { ContextMovies } from "../../store";

export default function MoviesCard({ movies }) {
  let { setType } = useContext(ContextMovies);
  return (
    <div key={movies.id} className=" col-lg-2 col-md-3 col-sm-4 my-2">
      <Link to={`/details/${movies.id}`} onClick={() => setType("movie")}>
        <div className="w-100">
          <img
            className="w-100 mb-2"
            src={imgPath(movies.poster_path)}
            alt="JustImage"
          />
          <h6 className=" text-center">{movies.title}</h6>
        </div>
      </Link>
    </div>
  );
}
