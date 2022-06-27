import React from "react";
import { AiFillStar } from "../../Assets/icons";
import { v4 as uuid } from "uuid";

function RatingBar({ rating }) {
  return (
    <div>
      {Array(5)
        .fill("")
        .map((data, index) => {
          return (
            <AiFillStar
              key={uuid()}
              style={
                rating > index
                  ? { color: "var(--dark-yellow)", fontSize: "1.5rem" }
                  : { color: "gray", fontSize: "1.5rem" }
              }
            />
          );
        })}
    </div>
  );
}

export default RatingBar;
