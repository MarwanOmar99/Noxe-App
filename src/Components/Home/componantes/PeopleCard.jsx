import React, { useContext } from "react";
import { imgPath } from "../../imgPath";
import { ContextMovies } from "../../store";
import { Link } from "react-router-dom";

export default function PeopleCard({ People }) {
  let { setType } = useContext(ContextMovies);

  return (
    <div key={People.id} className=" col-lg-2 col-md-3 col-sm-4 my-2">
      <Link to={`/details/${People.id}`} onClick={() => setType("person")}>
        <div className="w-100">
          <img
            className="w-100 mb-2"
            src={imgPath(People.profile_path)}
            alt="JustImge"
          />
          <h6>{People.name}</h6>
        </div>
      </Link>
    </div>
  );
}
