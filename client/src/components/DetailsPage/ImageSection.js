import React, { useState } from "react";

const ImageSection = () => {
  const [state, setState] = useState({
    languages: "",
    techSkills: "",
    techSkills1: "",
    hobbies: "",
    hobbies1: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <img className="DetailsPage_displayPicture"></img>
      <form className="DetailsPage_Image_form" method="post">
        <section className="DetailsPage_languages">
          Languages:
          <textarea
            id="DetailsPage_language"
            placeholder="English, French"
            name="languages"
            value={state.languages}
            onChange={handleChange}
          />
        </section>
        <section className="DetailsPage_techSkills">
          Technical Skills:
          <ul>
            <li>
              <input
                type="text"
                id="DetailsPage_techSkills_1"
                placeholder="Lorem ipsum dolor sit amet"
                name="techSkills"
                value={state.techSkills}
                onChange={handleChange}
              />
              <input
                type="text"
                id="DetailsPage_techSkills_2"
                placeholder="Lorem ipsum dolor sit amet"
                name="techSkills1"
                value={state.techSkills1}
                onChange={handleChange}
              />
            </li>
          </ul>
        </section>
        <section className="DetailsPage_hobbies">
          Hobbies:
          <ul>
            <li>
              <input
                type="text"
                id="DetailsPage_hobbies_1"
                placeholder="Sed nisl neque"
                name="hobbies"
                value={state.hobbies}
                onChange={handleChange}
              />
              <input
                type="text"
                id="DetailsPage_hobbies_2"
                placeholder="Sed nisl neque"
                name="hobbies1"
                value={state.hobbies1}
                onChange={handleChange}
              />
            </li>
          </ul>
        </section>
      </form>
    </div>
  );
};

export default ImageSection;
