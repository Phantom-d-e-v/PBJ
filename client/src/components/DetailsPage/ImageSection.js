import React from "react";

const ImageSection = () => {
  return (
    <div>
      <img className="DetailsPage_displayPicture"></img>
      <form>
        <section className="DetailsPage_languages">
          Languages:
          <textarea id="DetailsPage_language" />
        </section>
        <section className="DetailsPage_techSkills">
          Technical Skills:
          <ul>
            <li>
              <input
                type="text"
                id="DetailsPage_techSkills"
                placeholder="Lorem ipsum dolor sit amet"
              />
              <input
                type="text"
                id="DetailsPage_techSkills"
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
                id="DetailsPage_hobbies"
                placeholder="Sed nisl neque"
              />
              <input
                type="text"
                id="DetailsPage_hobbies"
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
