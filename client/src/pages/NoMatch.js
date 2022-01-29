import React from "react";
import Header from "../components/Header";

const NoMatch = () => {
  return (
    <div className="d-flex flex-column justify-center" style={{textAlign:"center"}}> 
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
    </div>
  );
};

export default NoMatch;
