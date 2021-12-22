import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import HTML from "../components/html/html";

const Code = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code</title>
        <link rel="canonical" href="http://ayse.site/code" />
      </Helmet>
      <Layout pageTitle="Code Editor">
        <HTML />
      </Layout>
    </>
  );
};

export default Code;
