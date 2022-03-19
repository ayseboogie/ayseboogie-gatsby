import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Triangle from "../images/triangle.png";
import MI from "../images/ayseSite.png";
import MIT from "../images/ayseSite1.png";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import Contact from "../components/contact";
import useWindowDimensions from "../utils/hooks/useWindowDimensions";
import * as style from "./index.module.css";
import cn from "classnames";

function factorial(n) {
  console.log("factorial ", n);
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const IndexPage = () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://ayse.site" />
        <link rel="icon" href={Triangle} />
        <meta property="og:image" content={MI} />
        <meta name="twitter:image" content={MIT} />
      </Helmet>
      <Layout pageTitle="Home">
        <Seo lang="en" title="Home" />
        <div id="home" />
        <div className="py-6 md:py-10">
          <div className="w-full text-center pb-6">
            For NASA TSU STEM fair activity:&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/jonathangrossman/pen/VwLredR"
            >
              smiley face
            </a>
            <br />
            The website itself is{" "}
            <a target="_blank" rel="noreferrer" href="https://codepen.io/">
              codepen.io{" "}
            </a>
            which has lots of cool html, css, an js tricks that people have
            created!
            <br /> I also have some activities I have made on my site:
            <Link href="/domTraversal"> traversing the dom,</Link>
            <Link href="/codeEditor"> code editor,</Link> and
            <Link href="/responsiveLayout"> responsive rainbow.</Link>
            <br />I did not pay attention that you have to create a login for
            that site since I already have an account..apologies. I will put
            together a list of good resources on here when I get some time!
          </div>
          <div
            className="w-full text-center py-8 md:py-10"
            style={{ backgroundColor: "#B76E79" }}
          >
            <div className="text-sm md:text-lg tracking-widest m-auto text-center px-4 md:px-0 max-w-2xl lg:max-w-5xl">
              &quot;It was a musical thing and you were supposed to sing or to
              dance while the music was being played&quot;
              <br />- Alan Watts
            </div>
          </div>
        </div>
        <AboutPhotos />
        <span id="about" />
        <div className="flex items-center justify-center mt-6">
          <hr className="flex-1 flex-grow md:mx-16 lg:mx-24" />
          <StaticImage
            className="max-w-full rounded-full"
            width={windowWidth > 900 ? "240px" : "170px"}
            height={windowWidth > 900 ? "288px" : "195px"}
            src={MI}
            alt="Ayse"
          />
          <hr className="flex flex-grow md:mx-16 lg:mx-24" />
        </div>
        <div className="text-sm md:text-lg tracking-widest m-auto text-center px-4 md:px-0 max-w-2xl lg:max-w-4xl py-6 md:py-16">
          <h1>Hey, I&apos;m Ayse.</h1>
          <p>I am a frontend engineer with a passion for web development.</p>
          I enjoy taking on new challenges and continuously growing my skill
          set.
          <br />
          I am a React developer by day. I have built freelance sites with
          WordPress and Duda. I developed this website with React in the NextJS
          framework using Tailwind styling.
          <br />I received my computer science degree, with a business
          administration minor, from UT Chattanooga.
          <br />
          <br />
          Other than staring at a computer screen, a few of the things I enjoy
          include bicycling, paddleboarding, hiking, snowboarding, traveling,
          and scrabble.
        </div>
        <hr className="mx-20 md:mx-48" />
        <div className="text-sm md:text-lg tracking-widest m-auto text-center px-4 md:px-0 max-w-2xl lg:max-w-4xl py-6 md:py-16">
          If you would like to speak with me about building a website for you,
          please fill out the&nbsp;
          <AnchorLink
            to="/#contact"
            title="Contact"
            className={cn("px-2", style.pinkOverlay)}
          >
            contact form
          </AnchorLink>
          &nbsp;below.
        </div>
        <span id="portfolio" />
        <ProjectsContainer />
        <span id="contact" />
        <Contact />
        <div className="pb-10 md:py-10">
          <div
            className="w-full text-center py-8 md:py-10"
            style={{ backgroundColor: "#B76E79" }}
          >
            <div className="text-sm md:text-lg tracking-widest m-auto text-center px-4 md:px-0 max-w-2xl lg:max-w-5xl">
              &quot;We are the music makers, And we are the dreamers of dreams,
              Wandering by lone sea-breakers, And sitting by desolate streams; —
              World-losers and world-forsakers, On whom the pale moon gleams:
              Yet we are the movers and shakers Of the world for ever, it
              seems.&quot;
              <br />- Arthur O&apos;Shaugnessy
            </div>
          </div>
        </div>
        <hr className="pb-8 md:pb-12 mx-20 md:mx-48" />
      </Layout>
    </>
  );
};

export default IndexPage;
