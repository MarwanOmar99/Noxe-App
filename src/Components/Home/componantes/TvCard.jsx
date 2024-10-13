import React from "react";
import { imgPath } from "../../imgPath";

export default function TvCard({ Tv }) {
  return (
    <div key={Tv.id} className=" col-lg-2 col-md-3 col-sm-4 my-2">
      <div className="w-100">
        <img
          className="w-100 mb-2"
          src={imgPath(Tv.poster_path)}
          alt="JustImges"
        />
        <h6>{Tv.name}</h6>
      </div>
    </div>
  );
}
