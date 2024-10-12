import React from "react";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jelly } from "ldrs";

jelly.register();

export default function Login({ TeJWT }) {
  const Navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [errMass, seterrMass] = useState([]);
  const [errsMass, seterrsMass] = useState("");
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  function submitHandler(e) {
    setisLoading(true);
    e.preventDefault();
    let StatusOfError = validation();
    if (StatusOfError?.error) {
      seterrMass(StatusOfError?.error.details);
    } else {
      axios
        .post("http://hawas.runasp.net/api/v1/Login", FormData)
        .then((res) => {
          Navigate("/home");

          localStorage.setItem("Token", res.data.jwt);
          console.log(localStorage.getItem("Token"));
          localStorage.setItem("TheName", res.data.user.userName);
          TeJWT();
        })
        .catch((err) => {
          seterrsMass(err.message);
          console.log(errsMass);
          console.log(err);
        });
    }
  }
  function getD(e) {
    let data = { ...FormData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }
  function validation() {
    let schema = Joi.object({
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });
    return schema.validate(FormData, { abortEarly: false });
  }
  return (
    <div className=" container w-75 mx-auto my-5">
      <form className="m-auto w-75 " onSubmit={submitHandler}>
        <h1 className=" text-center">Login</h1>
        {errsMass.length ? (
          <h6 className=" alert alert-danger">{errsMass}</h6>
        ) : (
          <></>
        )}
        {errMass?.length > 0 ? (
          errMass.map((err, i) => (
            <h6 key={i} className=" alert alert-danger">
              {err.message}
            </h6>
          ))
        ) : (
          <></>
        )}
        <label className=" form-label">Email :</label>
        <input
          onChange={getD}
          type="text"
          className=" form-control mb-4"
          name="email"
        />
        <label className=" form-label">Password :</label>
        <input
          onChange={getD}
          type="password"
          className=" form-control mb-4"
          name="password"
        />

        {isLoading && !errMass ? (
          <div className="d-flex justify-content-center align-items-center">
            <l-jelly size="40" speed="0.9" color="white"></l-jelly>
          </div>
        ) : (
          <button type="submit " className="form-control btn btn-outline-info">
            Login
          </button>
        )}
      </form>
    </div>
  );
}
