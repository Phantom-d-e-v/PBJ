import React from "react";
import DetailsSection from "./DetailsSection";
import ImageSection from "./ImageSection";
import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <div className="DetailsPage_page">
      <div className="DetailsPage_imageSection">
        <ImageSection />
      </div>
      <div className="DetailsPage_detailsSection">
        <DetailsSection />
      </div>
    </div>
  );
};

export default DetailsPage;
