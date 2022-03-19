import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import * as style from "./projectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <div className="w-full bg-gray-800 text-2xl tracking-widest pb-10 py-8 md:py-16 px-6">
      <div className={style.container}>
        {/* 0 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/chiFarms">Chi Farms</Link>
            </div>
          </div>
          <Link href="/chiFarms">
            <StaticImage
              src="../../images/chiFarms.png"
              alt="Chi Farms"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>

        {/* 1 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/experiences">Lonely Planet Experiences</Link>
            </div>
          </div>
          <Link href="/experiences">
            <StaticImage
              src="../../images/lpExperiences.png"
              alt="Lonely Planet Experiences"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>

        {/* 2 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/nextSite">NextJS Site</Link>
            </div>
          </div>
          <Link href="/nextSite">
            <StaticImage
              src="../../images/gatsbySite.png"
              alt="NextJS Site"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>

        {/* 3 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/domTraversal">Dom Traversal</Link>
            </div>
          </div>
          <Link href="/domTraversal">
            <StaticImage
              src="../../images/dom.png"
              alt="Dom Traversal"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>

        {/* 4 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/responsiveLayout">Responsive Layout</Link>
            </div>
          </div>
          <Link href="/responsiveLayout">
            <StaticImage
              src="../../images/responsiveLayout.png"
              alt="Responsive Layout"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>

        {/* 5 */}
        <div className="relative w-full">
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/codeEditor">Code Editor</Link>
            </div>
          </div>
          <Link href="/codeEditor">
            <StaticImage
              src="../../images/nextjsCodeEditor.jpeg"
              alt="Code Editor"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
              style={{
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
