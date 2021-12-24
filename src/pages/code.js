import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import DomTraversal from "../components/domTraversal";
import ProjectsLayout from "../components/projectsLayout";
import Breakline from "../components/cssBreakline/cssBreakline";
import CodeEditor from "../components/codeEditor/app";

const Code = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Projects</title>
        <link rel="canonical" href="http://ayse.site/code" />
      </Helmet>
      <Layout pageTitle="Code Projects">
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
        <div>
          I created this page to familiarize myself with traversing the dom. All
          of the logic used in this page stems from the DOM. I used a for loop
          to traverse the node tree. For the fun facts, I used
          getElementsByTagName to find the " &lt;td&gt; element and an if
          statement to change the text color.
        </div>
        <hr />

        <div className="pb-6 md:py-6">
          {/*  CSS Trick */}
          <div className="text-center text-3xl pb-10">Media Query</div>

          <Breakline />
          <div className="pt-64">fas</div>
          <CodeEditor />
        </div>
        <div className="max-w-2xl lg:max-w-4xl m-auto">
          <hr />
        </div>

        <ProjectsLayout />
      </Layout>
    </>
  );
};

export default Code;
