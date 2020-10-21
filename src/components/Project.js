import React from "react";

function Project({ title, rating }) {
   return (
      <>
         <h2 className="text-secondary">{title}</h2>
         <span className="text-primary">{rating}</span>
      </>
   );
}

export default Project;
