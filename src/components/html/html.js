import * as React from "react";
import * as style from "./html.module.css";
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import get from "lodash/get";
import CSS from "../../components/cssBreakLine/cssBreakLine";

const HTML = () => {
  const defaultStyle = {
    display: "block",
    overflow: "hidden",
    resize: "none",
    width: "100%",
    backgroundColor: "mediumSpringGreen",
  };

  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(""); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  function showPreview() {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode =
      "<style>" + document.getElementById("cssCode").value + "</style>";
    let jsCode =
      "<scri" +
      "pt>" +
      document.getElementById("jsCode").value +
      "</scri" +
      "pt>";
    let frame =
      document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
  }

  return (
    <>
      <div className={style.codeArea}>
        <textarea
          className={style.textArea}
          id="htmlCode"
          placeholder="HTML Code"
          // onInput="showPreview()"
          onInput={showPreview}
        />
        <textarea
          className={style.textArea}
          id="cssCode"
          placeholder="CSS Code"
          // onInput="showPreview()"
          onInput={showPreview}
        />
        <textarea
          className={style.textArea}
          id="jsCode"
          placeholder="JavaScript Code"
          // onInput="showPreview()"
          onInput={showPreview}
        />
      </div>
      <div className={style.previewArea} className="preview-area">
        <iframe className={style.iFrame} id="preview-window" />
      </div>
      Resizable
      <textarea id="htmlCode" placeholder="HTML Code" onInput={showPreview}>
        <CSS />
      </textarea>
      <textarea
        ref={textareaRef}
        style={style}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          //to do something with value, maybe callback?
        }}
      >
        <CSS />
      </textarea>
    </>
  );
};

export default HTML;
