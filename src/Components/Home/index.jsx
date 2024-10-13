import React, { useContext } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MoviesCard from "./componantes/MovieCard";
import PeopleCard from "./componantes/PeopleCard";
import TvCard from "./componantes/TvCard";
import { ContextMovies } from "../store";

export default function Home() {
  let { DataMov, DataPeople, DataTv } = useContext(ContextMovies);
  return (
    <div className=" container">
      <div className="row my-5 position-relative">
        <div className="ic  d-flex align-items-center  position-absolute">
          <Link to="/movies">
            <FontAwesomeIcon
              className=" Icc "
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </Link>
        </div>
        <div className=" col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>
              Trending <br />
              Movies
              <br />
              To Watch Right Now
            </h3>
            <p className=" mb-4">Top Trending Movies by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {Array.isArray(DataMov) && DataMov.length ? (
          DataMov.slice(0, 4).map((movies) => (
            <MoviesCard key={movies.id} movies={movies} />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="row my-5 position-relative">
        <Link
          className="ic position-absolute d-flex align-items-center"
          to="/people"
        >
          <FontAwesomeIcon
            className=" Icc "
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </Link>
        <div className=" col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>
              Trending <br />
              Star
              <br />
              To Watch Right Now
            </h3>
            <p className=" mb-4">Top Trending Movies by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {DataPeople.slice(0, 4).map((People) => (
          <PeopleCard People={People} />
        ))}
      </div>
      <div className="row my-5 position-relative">
        <Link
          className="ic position-absolute d-flex align-items-center"
          to="/tv"
        >
          <FontAwesomeIcon
            className=" Icc "
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </Link>
        <div className=" col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>
              Trending <br />
              Tv Show
              <br />
              To Watch Right Now
            </h3>
            <p className=" mb-4">Top Trending Movies by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {DataTv.slice(0, 4).map((Tv) => (
          <TvCard Tv={Tv} />
        ))}
      </div>
    </div>
  );
}
