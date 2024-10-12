import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [errMass, seterrMass] = useState([]);
  const [errsMass, seterrsMass] = useState("");
  const Navigate = useNavigate();
  const [FormData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  function getD(e) {
    let data = { ...FormData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }
  function submitHandler(e) {
    e.preventDefault();
    let StatusOfError = validation();
    if (StatusOfError?.error) {
      seterrMass(StatusOfError?.error.details);
    } else {
      axios
        .post("http://hawas.runasp.net/api/v1/Register", FormData)
        .then((res) => {
          Navigate("/login");
          console.log(res);
        })
        .catch((err) => {
          seterrsMass(err.message);
          console.log(errsMass);
          console.log(err);
        });
    }
  }
  function validation() {
    let schema = Joi.object({
      userName: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      rePassword: Joi.ref("password"),
    });
    return schema.validate(FormData, { abortEarly: false });
  }
  return (
    <div className=" container w-75 mx-auto my-5">
      <h1 className=" text-center">Register Now</h1>
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

      <form className="w-75 m-auto" onSubmit={submitHandler}>
        <label className=" form-label">User Name :</label>
        <input
          type="text"
          className=" form-control mb-4"
          name="userName"
          onChange={getD}
        />
        <label className=" form-label">Email :</label>
        <input
          type="text"
          className=" form-control mb-4"
          name="email"
          onChange={getD}
        />
        <label className=" form-label">Password :</label>
        <input
          type="password"
          className=" form-control mb-4"
          name="password"
          onChange={getD}
        />
        <label className=" form-label">Confirm Password :</label>
        <input
          type="password"
          className=" form-control mb-4"
          name="rePassword"
          onChange={getD}
        />
        <button type="submit" className=" btn btn-outline-info">
          Register
        </button>
      </form>
    </div>
  );
}
