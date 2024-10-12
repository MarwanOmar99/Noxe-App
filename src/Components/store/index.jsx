import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export let ContextMovies = createContext(0);
export function ContextMoviesProvider(props) {
  const [DataMov, setDataMov] = useState([]);
  const [DataPeople, setDataPeople] = useState([]);
  const [DataTv, setDataTv] = useState([]);
  const [Type, setType] = useState(null);

  function getMov(type, callback) {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=92f8d5dc692e7ef4aae9c3820dd3da70`
      )
      .then(({ data: { results } }) => {
        callback(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getMov("movie", setDataMov);
    getMov("person", setDataPeople);
    getMov("tv", setDataTv);
  }, []);
  return (
    <ContextMovies.Provider
      value={{ DataMov, DataPeople, DataTv, setType, Type }}
    >
      {props.children}
    </ContextMovies.Provider>
  );
}
