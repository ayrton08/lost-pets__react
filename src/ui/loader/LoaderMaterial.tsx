import { CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  message?: string;
}

export const LoaderMaterial = ({ message = "Loading" }: Props) => {
  return (
    <div className="loader">
      <CircularProgress color="success" size={60} />
      <span>{message}</span>
    </div>
  );
};
