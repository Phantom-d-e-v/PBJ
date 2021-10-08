import React from "react";
import { jsPDF } from "jspdf";
import DetailsSection from "./DetailsSection";
import ImageSection from "./ImageSection";
import { global } from "../../stores/global.store";
import "./DetailsPage.css";
import html2canvas from "html2canvas";
import axios from "axios";

const DetailsPage = (props) => {
  const {
    uName,
    about,
    education,
    education1,
    work,
    work1,
    address,
    number,
    email,
    languages,
    techSkills,
    techSkills1,
    hobbies,
    hobbies1,
  } = global();

  const handleSubmit = () => {
    // var doc = new jsPDF("p", "pt", "a4");
    // doc.html(document.querySelector("#Cv"), {
    //   callback: function (pdf) {
    //     pdf.save("Cv.pdf");
    //   },
    // });

    axios
      .post("http://localhost:5000/updatecv", {
        name: uName,
        about: about,
        education1: education,
        education2: education1,
        work1: work,
        work2: work1,
        address: address,
        pnumber: number,
        email: email,
        languages: languages,
        tskills1: techSkills,
        tskills2: techSkills1,
        hobbies1: hobbies,
        hobbies2: hobbies1,
      })
      .then((response) => {
        if (response) {
          console.log(`cv data: ${JSON.stringify(response)}`);
        }
      });

    var ignore = document.getElementsByClassName("DetailsPage_button")[0];
    window.scrollTo(0, 0);
    html2canvas(document.getElementsByClassName("DetailsPage_page")[0], {
      ignoreElements: function (ignore) {
        //Ignores generate pdf button
        if ("DetailsPage_button" === ignore.className) {
          return true;
        }
      },
      scrollY: -window.scrollY,
    }).then(function (canvas) {
      // var wid = 1920;
      // var hgt = 1080;
      var img = canvas.toDataURL(
        "image/png"
        // (wid = canvas.width),
        // (hgt = canvas.height)
      );
      // var hratio = hgt / wid;
      var doc = new jsPDF({ orientation: "landscape" });
      // var width = doc.internal.pageSize.width;
      // var height = width * hratio;
      // const imgProps = doc.getImageProperties(img);
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(img, "PNG", 0, 0, width, height);
      doc.save("CV.pdf");
    });
  };

  const goHome = () => {
    props.history.push("/");
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
          Generate PDF
        </button>
      </div>
      <button className="DetailsPage_home" onClick={goHome}>
        Home
      </button>
    </div>
  );
};

export default DetailsPage;
