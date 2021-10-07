import React from "react";
import { jsPDF } from "jspdf";
import DetailsSection from "./DetailsSection";
import ImageSection from "./ImageSection";
import "./DetailsPage.css";

const DetailsPage = () => {
  const doc = new jsPDF({
    orientation: "portrait",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    doc.html(document.querySelector("#Cv"), {
      callback: function (pdf) {
        pdf.save("Cv.pdf");
      },
    });
  };

  return (
    <div id="Cv">
      <div className="DetailsPage_page">
        <div className="DetailsPage_imageSection">
          <ImageSection />
        </div>
        <div className="DetailsPage_detailsSection">
          <DetailsSection />
        </div>
        <button
          type="submit"
          className="DetailsPage_button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
