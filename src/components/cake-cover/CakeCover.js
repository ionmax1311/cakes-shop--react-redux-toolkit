import React from "react";
import "./cake-cover.css";

export const CakeCover = ({ image = "" }) => {
  return (
    <div className="cake-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};
