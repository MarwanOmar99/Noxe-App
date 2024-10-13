import React, { useContext } from "react";
import { ContextMovies } from "../store";
import PeopleCard from "../Home/componantes/PeopleCard";

export default function Tv() {
  let { DataPeople } = useContext(ContextMovies);
  return (
    <div className=" container">
      <div className="row">
        {DataPeople.map((People) => (
          <PeopleCard People={People} />
        ))}
      </div>
    </div>
  );
}
