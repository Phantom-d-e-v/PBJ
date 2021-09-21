import React from "react";

const ImageSection = () => {
  return (
    <div>
      <img className="DetailsPage_displayPicture"></img>
      <form className="DetailsPage_Image_form" method="post">
        <section className="DetailsPage_languages">
          Languages:
          <textarea id="DetailsPage_language" placeholder="English, French" />
        </section>
        <section className="DetailsPage_techSkills">
          Technical Skills:
          <ul>
            <li>
              <input
                type="text"
                id="DetailsPage_techSkills_1"
                placeholder="Lorem ipsum dolor sit amet"
              />
              <input
                type="text"
                id="DetailsPage_techSkills_2"
                placeholder="Lorem ipsum dolor sit amet"
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
              />
              <input
                type="text"
                id="DetailsPage_hobbies_2"
                placeholder="Sed nisl neque"
              />
            </li>
          </ul>
        </section>
      </form>
    </div>
  );
};

export default ImageSection;
