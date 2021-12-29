import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

import * as styles from "./codeEditor.module.css";

const CodeEditor = () => {
  return (
    <div className="h-64">
      <SplitPane split="horizontal" minSize={"50%"}>
        <SplitPane split="vertical" minSize={"33%"}>
          <div className={styles.editorContainer}>
            <div className={styles.editorTitle}>HTML</div>
            <AceEditor
              mode="html"
              theme="monokai"
              name="HTML"
              setOptions={{ useWorker: false }}
            />
          </div>
          <SplitPane split="vertical" minSize={"50%"}>
            <div className={styles.editorContainer}>
              <div className={styles.editorTitle}>CSS</div>
              <AceEditor
                mode="css"
                theme="monokai"
                name="CSS"
                setOptions={{ useWorker: false }}
              />
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
