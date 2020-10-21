import React from "react";
import Project from "./components/Project";
import "./style/master.scss";
import { projects } from "./data/projects";

function App() {
   return (
      <>
         <h1 className="text-primary">Hello world!</h1>
         {projects.map(({ title, rating }, index) => (
            <Project title={title} rating={rating} key={index} />
         ))}
      </>
   );
}

export default App;
