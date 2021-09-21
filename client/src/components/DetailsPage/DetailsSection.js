import React from "react";

const DetailsSection = () => {
  return (
    <div>
      <form className="DetailsPage_Section_form" method="post">
        <header className="DetailsPage_name">
          <input
            type="text"
            id="DetailsPage_name"
            placeholder="Your Name"
          ></input>
        </header>
        <section className="DetailsPage_about">
          About:
          <textarea
            id="DetailsPage_about"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis fermentum, pharetra metus vitae, mattis quam. Quisque posuere laoreet neque, vel iaculis arcu lacinia in. Cras gravida eleifend ligula."
          ></textarea>
        </section>
        <section className="DetailsPage_education">
          Education:
          <ul>
            <li>
              <textarea
                id="DetailsPage_education_1"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_education_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
              />
            </li>
          </ul>
        </section>
        <section className="DetailsPage_workExp">
          Work Experience:
          <ul>
            <li>
              <textarea
                id="DetailsPage_workExp_1"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_workExp_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
              />
            </li>
          </ul>
        </section>
        <section className="DetailsPage_contact">
          Contact Information:
          <span className="DetailsPage_address">
            Address:
            <input
              type="text"
              id="DetailsPage_address"
              placeholder="XYZ, 123 , Pune, India"
            ></input>
          </span>
          <span className="DetailsPage_number">
            PhoneNumber:
            <input
              type="text"
              id="DetailsPage_number"
              placeholder="9823410569"
            ></input>
          </span>
          <span className="DetailsPage_email">
            Email:
            <input
              type="text"
              id="DetailsPage_email"
              placeholder="abcdefghijk@gmail.com"
            ></input>
          </span>
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetailsSection;
