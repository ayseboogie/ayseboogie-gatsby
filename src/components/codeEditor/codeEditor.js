import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";

import * as styles from "./codeEditor.module.css";

const CodeEditor = () => {
  return (
    <div className="h-64">
      <SplitPane split="horizontal" minSize={"50%"}>
        <SplitPane split="vertical" minSize={"33%"}>
          <div className={styles.editorContainer}>
            <div className={styles.editorTitle}>HTML</div>
          </div>
          <SplitPane split="vertical" minSize={"50%"}>
            <div className={styles.editorContainer}>
              <div className={styles.editorTitle}>CSS</div>
            </div>
            <div>JS Editor</div>
          </SplitPane>
        </SplitPane>
        <div>Preview Page</div>
      </SplitPane>
    </div>
  );
};

export default CodeEditor;
