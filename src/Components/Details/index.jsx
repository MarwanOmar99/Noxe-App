import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgPath } from "../imgPath";
import "./style.css";
import { ContextMovies } from "../store";

export default function Details() {
  let [MovieDet, setMovieDet] = useState([]);
  let { Type } = useContext(ContextMovies);
  let { id } = useParams();
  useEffect(() => {
    getMovies();
  }, []);
  function getMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/${Type}/${id}?api_key=92f8d5dc692e7ef4aae9c3820dd3da70`
      )
      .then((res) => {
        setMovieDet(res.data);
        console.log(MovieDet);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
              className=" w-75 "
              src={
                Type == "movie"
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
