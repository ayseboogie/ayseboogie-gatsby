import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import * as styles from "./codeEditor.module.css";

const CodeEditor = () => {
  return (
    <SplitPane className="h-64" split="horizontal" minSize={"50%"}>
      <SplitPane split="vertical" minSize={"33%"}>
        <div>HTML Editor</div>
        <SplitPane split="vertical" minSize={"50%"}>
          <div>CSS Editor</div>
          <div>JS Editor</div>
        </SplitPane>
      </SplitPane>
      <div>Preview Page</div>
    </SplitPane>
  );
};

export default CodeEditor;
