import React, { useCallback, useEffect, useState, useRef } from "react";
import css from "./dropzone.css";
import { useDropzone } from "react-dropzone";
import { dropzone } from "../../lib/dropzone-atom";
import { useRecoilState } from "recoil";

export function Dropzone() {
  //   const [images, setImages] = useState([]);
  const [images, setImages] = useRecoilState(dropzone);
  const container = useRef(null);

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages([reader.result]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  // if (images.length > 0) {
  //   container.current.style.display = "none";
  // }

  return (
    <div>
      <div className={css.container} {...getRootProps()} ref={container}>
        <input {...getInputProps()} />
        {isDragActive ? "Drag Active" : "You can drop your picture here"}
      </div>
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <img className={css.image} src={image} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
