import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import { CssEditor, HtmlEditor, JavascriptEditor } from "./editors";

import * as styles from "./codeEditor.module.css";

const CodeEditor = () => {
  return (
    <div className="h-64">
      <SplitPane split="horizontal" minSize={"50%"}>
        <SplitPane split="vertical" minSize={"33%"}>
          <HtmlEditor />
          <SplitPane split="vertical" minSize={"50%"}>
            <CssEditor />
            <JavascriptEditor />
          </SplitPane>
        </SplitPane>
        <div>Preview Page</div>
      </SplitPane>
    </div>
  );
};

export default CodeEditor;
