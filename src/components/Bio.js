import React from "react";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

export default function Bio() {
   return (
      <>
         <h1 className="display-3 mb-1 text-center title">Carlos Alfaro</h1>
         <p className="lead font-weight-normal mb-4 text-center">
            Full stack developer
         </p>
         <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
            <a
               href="https://www.google.com"
               target="_blank"
               rel="noopener noreferrer"
               className="d-inline-block"
            >
               <img
                  src={githubLogo}
                  width="24px"
                  className="mt-n1"
                  alt="Github logo"
               />
               <span className="ml-2">Github</span>
            </a>
            <a
               href="https://www.google.com"
               target="_blank"
               rel="noopener noreferrer"
               className="d-inline-block"
            >
               <img
                  src={linkedInLogo}
                  width="20px"
                  className="ml-4 mt-n1"
                  alt="LinkedIn logo"
               />
               <span className="ml-2">LinkedIn</span>
            </a>
            <a
               href="https://www.google.com"
               target="_blank"
               rel="noopener noreferrer"
               className="d-inline-block"
            >
               <img
                  src={youtubeLogo}
                  width="28px"
                  className="ml-4 mt-1"
                  alt="YouTube logo"
               />
               <span className="ml-2">YouTube</span>
            </a>
         </p>
      </>
   );
}
