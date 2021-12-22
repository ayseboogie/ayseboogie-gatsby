import * as React from "react";
import * as style from "./html.module.css";
import { Helmet } from "react-helmet";
import { useRef } from "react";

const HTML = () => {
  const first = useRef(null);
  const iframe = useRef(null);
  const btn = useRef(null);

  console.log("first ", first);

  // btn.addEventListener("click", () => {
  //   var html = first.textContent;
  //   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  // });
  //
  // first.addEventListener("keyup", () => {
  //   var html = first.textContent;
  //   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  // });
  //
  // first.addEventListener("paste", function (e) {
  //   e.preventDefault();
  //   var text = e.clipboardData.getData("text/plain");
  //   document.execCommand("insertText", false, text);
  // });

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="code.css" />
        <title>Html editor</title>
      </Helmet>
      <body>
        <div className={style.mainEditor}>
          <button className="btn">Run</button>
          <div className={style.first} contentEditable>
            writecode
          </div>
          <iframe className={style.second}></iframe>
        </div>

        {/*<script src="editor.js"></script>*/}
      </body>
    </>
  );
};

export default HTML;
