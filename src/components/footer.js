import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full text-center text-3xl tracking-widest md:px-80 py-16 bg-gray-800">
      <a
        href="https://github.com/ayseboogie"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/ayse-stinnett-41a100140/"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white" icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/aysestinnett"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white" icon={faTwitter} />
      </a>
      <br />
    </div>
  );
};

export default Footer;