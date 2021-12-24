import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import DomTraversal from "../components/domTraversal";
import ProjectsLayout from "../components/projectsLayout";

const Code = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nifty Code</title>
        <link rel="canonical" href="http://ayse.site/code" />
      </Helmet>
      <Layout pageTitle="Nifty Code">
        <div className="pb-6 md:py-6">
          {/*  DOM Traversal */}
          <div className="text-center text-3xl pb-10">DOM Traversal</div>
          <div className=" flex justify-center align-middle">
            <StaticImage
              className="max-w-sm md:max-w-xl"
              src="../images/nodeTree.png"
              alt="Node Tree"
              objectPosition="center center"
            />
          </div>
          <DomTraversal />
        </div>
        <div className="pb-10 max-w-2xl lg:max-w-4xl m-auto text-center">
          I created this page to familiarize myself with traversing the dom. All
          of the logic used in this page stems from the DOM. I used a for loop
          to traverse the node tree. For the fun facts, I used
          getElementsByTagName to find the " &lt;td&gt; element and an if
          statement to change the text color.
        </div>
        <hr />

        <ProjectsLayout />
      </Layout>
    </>
  );
};

export default Code;
