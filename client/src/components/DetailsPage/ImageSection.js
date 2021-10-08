import React, { useState } from "react";
import { global } from "../../stores/global.store";

const ImageSection = () => {
  // const [state, setState] = useState({
  //   languages: "",
  //   techSkills: "",
  //   techSkills1: "",
  //   hobbies: "",
  //   hobbies1: "",
  // });

  const {
    languages,
    techSkills,
    techSkills1,
    hobbies,
    hobbies1,
    setLanguages,
    setTechSkills,
    setTechSkills1,
    setHobbies,
    setHobbies1,
  } = global();

  const handleLanguages = (e) => {
    setLanguages(e.target.value);
  };
  const handleTechSkills = (e) => {
    setTechSkills(e.target.value);
  };
  const handleTechSkills1 = (e) => {
    setTechSkills1(e.target.value);
  };
  const handleHobbies = (e) => {
    setHobbies(e.target.value);
  };
  const handleHobbies1 = (e) => {
    setHobbies1(e.target.value);
  };

  return (
    <div className="DetailsPage_ImageSection_div">
      <form className="DetailsPage_Image_form" method="post">
        <img className="DetailsPage_displayPicture"></img>
        <section className="DetailsPage_languages">
          Languages:
          <textarea
            id="DetailsPage_language"
            placeholder="English, French"
            name="languages"
            value={languages}
            onChange={handleLanguages}
          />
        </section>
        <section className="DetailsPage_techSkills">
          Technical Skills:
          <ul>
            <li id="DetailsPage_techSkills_li">
              <input
                type="text"
                id="DetailsPage_techSkills_1"
                placeholder="Lorem ipsum dolor sit amet"
                name="techSkills"
                value={techSkills}
                onChange={handleTechSkills}
              />
              <input
                type="text"
                id="DetailsPage_techSkills_2"
                placeholder="Lorem ipsum dolor sit amet"
                name="techSkills1"
                value={techSkills1}
                onChange={handleTechSkills1}
              />
            </li>
          </ul>
        </section>
        <section className="DetailsPage_hobbies">
          Hobbies:
          <ul>
            <li id="DetailsPage_hobbies_li">
              <input
                type="text"
                id="DetailsPage_hobbies_1"
                placeholder="Sed nisl neque"
                name="hobbies"
                value={hobbies}
                onChange={handleHobbies}
              />
              <input
                type="text"
                id="DetailsPage_hobbies_2"
                placeholder="Sed nisl neque"
                name="hobbies1"
                value={hobbies1}
                onChange={handleHobbies1}
              />
            </li>
          </ul>
        </section>
      </form>
    </div>
  );
};

export default ImageSection;
