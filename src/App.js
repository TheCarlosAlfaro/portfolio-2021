import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";
import Bio from "./components/Bio";
import orderBy from "lodash/orderBy";
import { safelyParseJson } from "./utils/helpers";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      const activeProjects = projects.filter((project) => {
         return project.isActive;
      }); // imagine we are returning the filtered results from an API
      const defaultOrder = '["postedAt", "desc"]';
      const params = safelyParseJson(defaultOrder);
      const orderedProjects = orderBy(activeProjects, ...params);
      this.state = {
         activeProjects: orderedProjects,
         isAdvanced: false,
         displayedProjects: orderedProjects,
         searchInput: "",
         projectOrder: defaultOrder,
      };
   }

   updateState(e) {
      let value = e.target.value;
      if (value === "true" || value === "false") {
         value = safelyParseJson(value); // "true" will turn into true
      }
      // eslint-disable-next-line
      if (value == Number(value)) {
         value = safelyParseJson(value); // "4" will turn into 4
      }
      this.setState({ [e.target.name]: value });
   }

   setSearchInput(e) {
      const searchInput = e.target.value;
      this.setState((prevState) => {
         return {
            searchInput: searchInput,
            displayedProjects: prevState.activeProjects.filter((project) => {
               const lowerCasedInput = searchInput.toLowerCase();
               const projectTitle = project.title.toLowerCase();
               const projectDesc = project.desc.toLowerCase();
               return (
                  projectTitle.includes(lowerCasedInput) ||
                  projectDesc.includes(lowerCasedInput)
               );
            }),
         };
      });
   }

   setProjectOrder(e) {
      const projectOrder = e.target.value;
      const params = safelyParseJson(projectOrder);
      this.setState((prevState) => {
         return {
            projectOrder: projectOrder,
            displayedProjects: orderBy(prevState.displayedProjects, ...params),
         };
      });
   }

   render() {
      return (
         <div className="container">
            <div className="row mt-2">
               <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                  <Bio />
                  <div className="row mb-2">
                     <div className="col-12 col-sm-8">
                        <input
                           id="search-projects"
                           className="form-control"
                           placeholder="Search projects"
                           value={this.state.searchInput}
                           onChange={(e) => {
                              this.setSearchInput(e);
                           }}
                        />
                     </div>
                     <div className="col-12 col-sm-4">
                        <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isAdvanced"
                              checked={this.state.isAdvanced}
                              name="isAdvanced"
                              value={!this.state.isAdvanced}
                              onChange={(e) => this.updateState(e)}
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="isAdvanced"
                           >
                              Advanced view
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="row mb-5">
                     <div className="col-12">
                        <div className="custom-control custom-radio custom-control-inline">
                           <input
                              type="radio"
                              id="most-recent"
                              name="project-order"
                              value='["postedAt", "desc"]'
                              checked={
                                 this.state.projectOrder ===
                                 '["postedAt", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
                              className="custom-control-input"
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="most-recent"
                           >
                              Most recent
                           </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                           <input
                              type="radio"
                              id="most-popular"
                              name="project-order"
                              value='["rating", "desc"]'
                              checked={
                                 this.state.projectOrder ===
                                 '["rating", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
                              className="custom-control-input"
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="most-popular"
                           >
                              Most popular
                           </label>
                        </div>
                     </div>
                  </div>

                  {this.state.displayedProjects.map((project) => {
                     return (
                        <Project
                           project={project}
                           key={project.id}
                           isAdvanced={this.state.isAdvanced}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}
