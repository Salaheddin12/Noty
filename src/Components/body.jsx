import React from "react";
import Card from "./card";
import { bodyStyle, addIconStyle } from "./styles/styles.js";
const Body = () => {
  return (
    <>
      <div style={bodyStyle}>
        <Card color="#AED6F1" />
        <Card color="#F2D7D5" />
        <Card color="#D5F5E3" />
        <Card color="#AED6F1" />
        <Card color="#D4E6F1" />
        <Card color="#A9CCE3" />
        <Card color="#A3E4D7" />
        <Card color="#FCF3CF" />
        <Card color="#AED6F1" />
      </div>
      <img src="./images/plus_3.png" style={addIconStyle} />
    </>
  );
};

export default Body;
