import React from "React";
import Dropzone from "dropzone";
import css from "./dropzone.css";

export function DropZone() {
  let imageDataURL;
  const div = document.getElementById("drop");
  const myDropzone = new Dropzone(div, {
    url: "/falsa",
    autoProcessQueue: false,
    clickable: true,
  });
  myDropzone.on("addedfile", function (file) {
    // usando este evento pueden acceder al dataURL directamente
    imageDataURL = file;
  });
  console.log(imageDataURL);
  return <div className={css.drop} id="drop"></div>;
}
