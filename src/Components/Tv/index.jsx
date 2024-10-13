import React, { useContext } from "react";
import { ContextMovies } from "../store";

export default function Tv() {
  let { DataTv } = useContext(ContextMovies);
  return (
    <div className=" container">
      <div className="row">
        {DataTv.map((Tv) => (
          <div className=" col-lg-2 col-md-3 col-sm-4 my-2">
            <div className="w-100">
              <img
                className="w-100 mb-2"
                src={`https://image.tmdb.org/t/p/w500/` + Tv.poster_path}
                alt="JustImage"
              />
              <h6>{Tv.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
