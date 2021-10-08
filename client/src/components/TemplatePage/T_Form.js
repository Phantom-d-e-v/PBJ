import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import template from "../../templates/template1.jpg";
import arrowIconRight from "../../templates/icons8-arrow-50.png";
import "./Template.css";

const T_Form = (props) => {
  const [templateList, settemplateList] = useState([]);
  var templatee;
  const handleClick = () => {
    props.history.push("/details");
  };
  const goHome = () => {
    props.history.push("/");
  };

  useEffect(() => {
    axios.get("http://localhost:5000/templates").then((res) => {
      //settemplateList(require("../../templates/template1.jpg"));
      console.log(`templa: ${res.data[0].template_path}`);

      templatee = res.data[0].template_path;
      console.log(`template_path: ${templatee}`);
    });
  }, [settemplateList]);

  return (
    <div>
      <form className="T_Form_form">
        <button className="T_Form_leftTraverse">
          <img src={arrowIconRight}></img>
        </button>
        <span className="T_Form_Space" />
        <button className="T_Form_imageButton" onClick={handleClick}>
          <img src={template} alt=""></img>
        </button>
        <span className="T_Form_Space" />
        <button className="T_Form_rightTraverse">
          <img src={arrowIconRight}></img>
        </button>
      </form>
      <button className="T_Form_Home" onClick={goHome}>
        Home
      </button>
    </div>
  );
};

export default withRouter(T_Form);
