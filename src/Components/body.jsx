import React from "react";
import Card from "./card";
import { bodyStyle, addIconStyle } from "./styles/styles.js";
const colors = [
  '#AED6F1',
  '#F2D7D5',
  '#D5F5E3',
  '#AED6F1',
  '#D4E6F1',
  '#A9CCE3',
  '#A3E4D7',
  '#FCF3CF',
  '#AED6F1'
];
const Body = () => {
  return (
    <>
      <div style={bodyStyle}>
        {colors.map((color, index) =>
          <Card key={index} color={color} />
        )}
      </div>
      <img src="./images/plus_3.png" style={addIconStyle} />
    </>
  );
};

export default Body;
