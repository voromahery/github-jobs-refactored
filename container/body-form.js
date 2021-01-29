import React, { useContext } from "react";
import BodyForm from "../components/body-form";
import { Context } from "../GlobalContext";

export default function BodyFormContainer() {
  const {
    state,
    dispatch,
    location,
    setLocation,
    locationList,
    setLocationList,
    jobType,
    setJobType,
  } = useContext(Context);

  function searchByLocation(e) {
    if (state.response) {
      setLocation(e.target.value);
    } else {
      setLocation("New York");
    }
  }

  function searchByType() {
    setJobType(!jobType);
  }

  function searchByLocationList(e) {
    const findJob = locationList.find((data) => data === e.target.value);
    setLocation(findJob);
  }

  return (
    <>
      <BodyForm>
        <BodyForm.CheckBox type="checkBox" onChange={searchByType} />
        <BodyForm.Span>Full time</BodyForm.Span>
      </BodyForm>
      <BodyForm>
        <BodyForm.Label>Location</BodyForm.Label>
        <BodyForm.Input
          type="text"
          onChange={searchByLocation}
          placeholder="City, state, zip code or country"
        />
      </BodyForm>
      <BodyForm>
        {locationList.map((location) => (
          <div key={location}>
            <BodyForm.CheckBox
              type="radio"
              value={location}
              onChange={searchByLocationList}
            />
            <BodyForm.Span>{location}</BodyForm.Span>
          </div>
        ))}
      </BodyForm>
    </>
  );
}
