import React, { useRef } from "react";
import { Link } from "react-router-dom";
import css from "./report-form.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { Dropzone } from "../drop-zone";
import { dropzone } from "../../lib/dropzone-atom";
import { useRecoilValue } from "recoil";
import { Mapbox } from "../mapbox";
import { locationReport } from "../../lib/location";

type ReportPet = {
  report: (params: {
    name?: string;
    raza?: string;
    pictureURL?: string;
    lat: number;
    lng: number;
    location: string;
    state: any;
  }) => any;
  error?: String;
};

export function ReportForm(props: ReportPet) {
  const locationCoor = useRecoilValue(locationReport);
  const form = useRef(null);

  const picture = useRecoilValue(dropzone);

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const raza = e.target.race.value;
    const location = e.target.location.value;
    const pictureURL = picture[0];
    props.report({
      name,
      raza,
      pictureURL,
      lat: locationCoor["lat"],
      lng: locationCoor["lng"],
      state: true,
      location,
    });
    form.current.reset();
  }

  return (
    <div className={css.container}>
      <form className={css.root} onSubmit={onSubmitHandler} ref={form}>
        <TextField type="text" name="name" placeholder="Name" />
        <TextField type="text" name="race" placeholder="Race" />
        <div className={css.dropzone}>
          <Dropzone />
        </div>
        <span className={css.instruction}>
          Please select the report location on the map.
        </span>
        <Mapbox></Mapbox>
        <div className={css.locationName}>
          <span>Location name: </span>
          <TextField
            type="text"
            name="location"
            placeholder="Write an address, Eje: City, Neighborhood, Street..."
          />
        </div>

        {/* <textarea
          name="info"
          className={css.textarea}
          placeholder="Write a place"
        ></textarea> */}
        <button className={css.report}>Report</button>
        <Link to="/home">
          <button className={css.cancel}>Cancel</button>
        </Link>
      </form>
    </div>
  );
}
