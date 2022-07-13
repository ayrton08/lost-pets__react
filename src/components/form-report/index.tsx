import React from "react";
import { Link } from "react-router-dom";
import css from "./report-form.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { Dropzone } from "../drop-zone";
import { dropzone } from "../../hooks/dropzone-atom";
import { useRecoilValue } from "recoil";
import { Mapbox } from "../mapbox";
import { locationReport } from "../../hooks/location";

type ReportPet = {
  report: (params: {
    name?: string;
    race?: string;
    pictureURL?: string;
    lat: number;
    lng: number;
  }) => any;
  error?: String;
};

export function ReportForm(props: ReportPet) {
  const location = useRecoilValue(locationReport);
  console.log("location desde el form", location);

  const picture = useRecoilValue(dropzone);

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const race = e.target.race.value;
    const pictureURL = picture[0];
    props.report({
      name,
      race,
      pictureURL,
      lat: location["lat"],
      lng: location["lng"],
    });
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Report</h2>
      <form className={css.root} onSubmit={onSubmitHandler}>
        <TextField type="text" name="name" placeholder="Name" />
        <TextField type="text" name="race" placeholder="Race" />
        <div className={css.dropzone}>
          <Dropzone />
        </div>
        <span className={css.instruction}>
          By default the location where you are will be reported, if you wish to
          indicate another location in the report you can do so on the map
          below.
        </span>
        <Mapbox></Mapbox>

        <button className={css.report}>Report</button>
        <Link to="/home">
          <button className={css.cancel}>Cancel</button>
        </Link>
      </form>
    </div>
  );
}
