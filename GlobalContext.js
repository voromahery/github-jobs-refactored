import React, { useState, useEffect, useReducer, createContext } from "react";
import jobs from "./jobs.json";
const Context = createContext(null);

function GlobalContext(props) {
  const [locations, setLocations] = useState("New York");
  const [jobType, setJobType] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [locationList, setLocationList] = useState([
    "London",
    "Amsterdam",
    "New York",
    "Berlin",
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;
  const offSet = currentPage * perPage;

  const regeneratorRunTime = "https://cors-anywhere.herokuapp.com/";

  const jobUrl = `${regeneratorRunTime}https://jobs.github.com/positions.json?description=${jobDescription}&full_time=${jobType}&location=${locations}`;

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOADING": {
          return { ...state, loading: true };
        }
        case "RESOLVED": {
          return {
            ...state,
            loading: false,
            allData: action.allData,
            response: action.response,
            error: null,
          };
        }
        case "ERROR": {
          return {
            ...state,
            loading: false,
            response: null,
            error: action.error,
          };
        }
        case "SEARCH_BY_KEYWORD": {
          return {
            ...state,
            loading: false,
            response: action.filterData,
            error: null,
          };
        }
        default:
          return state;
      }
    },
    {
      loading: false,
      response: [],
      allData: [],
      error: null,
    }
  );

  useEffect(() => {
    let isCurrent = true;

    dispatch({ type: "LOADING" });

    fetch(jobUrl)
      .then((response) => response.json())
      .then((json) => {
        if (isCurrent) {
          dispatch({
            type: "RESOLVED",
            response: json ? json : jobs,
            allData: json ? json : jobs,
          });
        }
      })

      .catch((error) => {
        dispatch({ type: "ERROR", error });
      });

    return () => {
      isCurrent = false;
    };
  }, [locations, jobType]);

  console.log(state.response);
  let pageNumber = "";

  if (state.response) {
    pageNumber = Math.ceil(state.response.length / perPage);
  } else {
    pageNumber = 1;
  }

  return (
    <div>
      <Context.Provider
        value={{
          state,
          dispatch,
          locationList,
          setLocationList,
          locations,
          setLocations,
          jobType,
          setJobType,
          perPage,
          offSet,
          currentPage,
          setCurrentPage,
          pageNumber,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { GlobalContext, Context };
