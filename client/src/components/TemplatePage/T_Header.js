import React from "react";
import T_Form from "./T_Form";
import "../TemplatePage/Template.css";

const T_Header = (props) => {
  return (
    <div>
      <label id="T_Header_Label">Choose your Template</label>
      <T_Form />
    </div>
  );
};

export default T_Header;
