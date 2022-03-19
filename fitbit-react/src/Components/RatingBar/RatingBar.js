import React from "react";
import { AiFillStar } from "../../Assets/icons";
function RatingBar({ rating }) {
  return (
    <div>
      {Array(5)
        .fill("")
        .map((data, index) => {
          return (
            <AiFillStar
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
