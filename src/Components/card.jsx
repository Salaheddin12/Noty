import React from "react";
import cardTitleStyle from "./styles/styles";
const Card = ({ color }) => {
  return (
    <div
      className="card"
      style={{
        width: "24rem",
        border: 0,
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: `${color}`,
      }}
    >
      <div className="card-body">
        <h5 className="card-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h5>
        <p className="card-text">
          {" "}
          Quia, eveniet corporis. Qui magni assumenda quidem blanditiis
          aspernatur in nihil dolore nulla
        </p>
        <h6 className="card-subtitle mb-2">March 3</h6>
      </div>
    </div>
  );
};

export default Card;
