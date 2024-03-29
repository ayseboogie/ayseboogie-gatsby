import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import * as style from "./aboutPhotos.module.css";

const AboutPhotos = () => {
  return (
    <div className="flex mx-2 md:mx-3 md:pb-10">
      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <StaticImage
          src="../../images/atPups.jpg"
          alt="Appalachian Trail Puppies"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white md:text-2xl">Motivated</div>
        </div>
      </div>

      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <StaticImage
          src="../../images/starMtn.jpg"
          alt="Star Mountain Hike"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white md:text-2xl">Passionate</div>
        </div>
      </div>

      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <StaticImage
          src="../../images/weaversBend.jpg"
          alt="Weavers Bend Horse Ride"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white md:text-2xl">Dedicated</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhotos;
