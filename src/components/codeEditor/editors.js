import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

import * as styles from "./editors.module.css";

export const JavascriptEditor = () => {
  return <Editor title={"Javascript"} />;
};

export const HtmlEditor = () => {
  return <Editor title={"HTML"} />;
};

export const CssEditor = () => {
  return <Editor title={"CSS"} />;
};

const Editor = ({ mode, onChange, value, title, height }) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
      <AceEditor
        mode={mode}
        theme="monokai"
        name={title}
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
