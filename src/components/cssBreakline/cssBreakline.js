import * as React from "react";
import * as style from "./cssBreakLine.module.css";

const Breakline = () => {
  return (
    <div className={style.container}>
      <div className={style.slate}>slate</div>
      <div className={style.red}>red</div>
      <div className={style.orange}> orange</div>
      <div className={style.yellow}>yellow</div>
      <div className={style.green}>green</div>
      <div className={style.blue}>blue</div>
      <div className={style.indigo}>indigo</div>
      <div className={style.violet}> violet</div>
      <div className={style.grey}>grey</div>
    </div>
    // <div class="container">
    //     <div class="slate">slate</div>
    //     <div class="red">red</div>
    //     <div class="orange"> orange</div>
    //     <div class="yellow">yellow</div>
    //     <div class="green">green</div>
    //     <div class="blue">blue</div>
    //     <div class="indigo">indigo</div>
    //     <div class="violet"> violet</div>
    //     <div class="grey">grey</div>
    // </div>
  );
};

export default Breakline;
