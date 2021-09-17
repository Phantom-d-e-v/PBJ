import React from "react";
import t_default from "../../templates/t4-orange.jpg";
import arrowIconRight from "../../templates/icons8-arrow-50.png";
import "./Template.css";

const T_Form = () => {
  return (
    <form>
      <button className="leftTraverse">
        <img src={arrowIconRight}></img>
      </button>
      <span />
      <button className="imageButton">
        <img src={t_default}></img>
      </button>
      <span />
      <button className="rightTraverse">
        <img src={arrowIconRight}></img>
      </button>
    </form>
  );
};

export default T_Form;
