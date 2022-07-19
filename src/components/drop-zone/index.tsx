import React, { useCallback, useEffect, useState, useRef } from "react";
import css from "./dropzone.css";
import { useDropzone } from "react-dropzone";
import { dropzone } from "../../lib/dropzone-atom";
import { useRecoilState } from "recoil";

type Dropzone = {
  className: string;
};

export function Dropzone(props: Dropzone) {
  const [images, setImages] = useRecoilState(dropzone);

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

  return (
    <div>
      <div className={props.className} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          "Drag Active"
        ) : (
          <div className={css.content}>"You can drop your picture here"</div>
        )}
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
