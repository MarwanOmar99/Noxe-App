import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgPath } from "../imgPath";
import "./style.css";
import { ContextMovies } from "../store";

export default function Details() {
  let [MovieDet, setMovieDet] = useState([]);
  let { Type } = useContext(ContextMovies);
  let { id } = useParams();

  const getMovies = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${Type}/${id}?api_key=92f8d5dc692e7ef4aae9c3820dd3da70`
      )
      .then((res) => {
        setMovieDet(res.data);
        console.log(res.data); // Use res.data instead of MovieDet
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Type, id]);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <div className=" container">
      <div className=" row">
        <div className=" col-md-12 my-5">
          <div className="w-100 d-flex align-items-center justify-content-center position-relative">
            <div className="maskImg position-absolute ">
              <h6>{MovieDet.title}</h6>
              <div className=""></div>
            </div>

            <img
              alt="JustImages"
              className=" w-75 "
              src={
                Type === "movie"
                  ? imgPath(MovieDet.backdrop_path)
                  : imgPath(MovieDet.profile_path)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
