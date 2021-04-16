import React from 'react';
import githubLogo from '../icon/github.svg';
import linkedInLogo from '../icon/linkedin.svg';
import youtubeLogo from '../icon/youtube.svg';

export default function Bio() {
  return (
    <>
      <div className="mt-4">
        <img
          src={require('../image/profile.jpg')}
          width="150px"
          className="img-fluid mx-auto d-block profile-pic"
          alt="profile"
        />
      </div>
      <h1 className="mb-1 mt-3 text-center title text-secondary">
        <span style={{ fontSize: '.7em' }} role="img" aria-label="hand waving">
          👋{' '}
        </span>
        Hi, I'm Carlos Alfaro.
      </h1>
      <p className="lead font-weight-normal mb-4 text-center">
        I'm a software developer.
      </p>
      <div className="lead font-weight-normal text-center mb-4 mb-sm-4">
        <a
          href="https://github.com/carlosalfarodev"
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
          <span className="ml-2 d-none d-sm-inline-block">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/carlosalfarodev/"
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
          <span className="ml-2 d-none d-sm-inline-block">LinkedIn</span>
        </a>
        <a
          href="https://www.youtube.com/c/CarlosAlfaro/videos"
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
          <span className="ml-2 d-none d-sm-inline-block">YouTube</span>
        </a>
        <a
          href="mailto: hello@carlosalfaro.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-block"
        >
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-envelope-fill ml-4 mt-n1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            />
          </svg>
          <span className="ml-2 d-none d-sm-inline-block">Email</span>
        </a>
      </div>
    </>
  );
}
