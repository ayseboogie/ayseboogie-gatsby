import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

import * as styles from "./codeEditor.module.css";
import { CssEditor, JavascriptEditor } from "./editors";

const CodeEditor = () => {
  return (
    <div className="h-64">
      <SplitPane split="horizontal" minSize={"50%"}>
        <SplitPane split="vertical" minSize={"33%"}>
          <div className={styles.editorContainer}>
            <div className={styles.editorTitle}>HTML</div>
          </div>
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
