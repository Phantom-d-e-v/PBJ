import React from "react";
import t_default from "../../templates/t4-orange.jpg";
import arrowIconRight from "../../templates/icons8-arrow-50.png";
import "./Template.css";

const T_Form = () => {
  return (
    <form className="T_Form_form">
      <button className="T_Form_leftTraverse">
        <img src={arrowIconRight}></img>
      </button>
      <span className="T_Form_Space" />
      <button className="T_Form_imageButton">
        <img src={t_default}></img>
      </button>
      <span className="T_Form_Space" />
      <button className="T_Form_rightTraverse">
        <img src={arrowIconRight}></img>
      </button>
    </form>
  );
};

export default T_Form;
