import React, { useEffect, useState } from "react";
import SplitPane from "react-split-pane";
import { useDebounce } from "../../utils/useDebounce";
import * as styles from "./codeEditor.module.css";

import { CssEditor, HtmlEditor, JavascriptEditor } from "./editors";

const CodeEditor = () => {
  const [heightValue, setHeightValue] = useState("485px");

  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  useEffect(() => {
    const output = `<html>
                    <style>
                    ${debouncedCss}
                    </style>
                    <body>
                    ${debouncedHtml}
                    <script type="text/javascript">
                    ${debouncedJs}
                    </script>
                    </body>
                  </html>`;
    setOutputValue(output);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  return (
    <>
      <div className={styles.header}>
        {/*<button className={styles.button} onClick={() => (location.href = "/")}>*/}
        {/*  New*/}
        {/*</button>*/}
        {/*<button className={styles.button} onClick={save}>*/}
        {/*  {saving ? "Saving..." : "Save"}*/}
        {/*</button>*/}
      </div>
      <SplitPane
        style={{ marginTop: "60px" }}
        split="horizontal"
        minSize={"50%"}
        onDragFinished={(height) => {
          setHeightValue(`${height - 40}px`);
        }}
      >
        <SplitPane split="vertical" minSize={"33%"}>
          <HtmlEditor
            height={heightValue}
            value={htmlValue}
            onChange={setHtmlValue}
          />
          <SplitPane split="vertical" minSize={"50%"}>
            <CssEditor
              height={heightValue}
              value={cssValue}
              onChange={setCssValue}
            />
            <JavascriptEditor
              height={heightValue}
              value={jsValue}
              onChange={setJsValue}
            />
          </SplitPane>
        </SplitPane>
        <iframe srcDoc={outputValue} className={styles.previewIframe} />
      </SplitPane>
    </>
  );
};

export default CodeEditor;
