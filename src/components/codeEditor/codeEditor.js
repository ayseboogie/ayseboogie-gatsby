import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import * as styles from "./codeEditor.module.css";

const CodeEditor = () => {
  return (
    <SplitPane split="vertical" minSize={"50%"}>
      <div>Part 1</div>
      <div>Part 2</div>
    </SplitPane>
  );
};

export default CodeEditor;
