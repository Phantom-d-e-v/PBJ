import React, { useState } from "react";

const DetailsSection = () => {
  const [state, setState] = useState({
    uName: "",
    about: "",
    education: "",
    education1: "",
    work: "",
    work1: "",
    address: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="DetailsPage_Section_form" method="post">
        <section className="DetailsPage_about">
          Name:
          <span className="DetailsPage_address">
            <header className="DetailsPage_name">
              <input
                type="text"
                id="DetailsPage_name"
                placeholder="Your Name"
                name="uName"
                value={state.uName}
                onchange={handleChange}
              ></input>
            </header>
          </span>
        </section>
        <section className="DetailsPage_about">
          About:
          <textarea
            id="DetailsPage_about"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis fermentum, pharetra metus vitae, mattis quam. Quisque posuere laoreet neque, vel iaculis arcu lacinia in. Cras gravida eleifend ligula."
            name="about"
            value={state.about}
            onChange={handleChange}
          ></textarea>
        </section>
        <section className="DetailsPage_education">
          Education:
          <ul>
            <li>
              <textarea
                id="DetailsPage_education_1"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
                name="education"
                value={state.education}
                onChange={handleChange}
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_education_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
                name="education1"
                value={state.education1}
                onChange={handleChange}
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
                name="work"
                value={state.work}
                onChange={handleChange}
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_workExp_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
                name="work1"
                value={state.work1}
                onChange={handleChange}
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
              name="address"
              value={state.address}
              onChange={handleChange}
            ></input>
          </span>
          <span className="DetailsPage_number">
            PhoneNumber:
            <input
              type="text"
              id="DetailsPage_number"
              placeholder="9823410569"
              name="number"
              value={state.number}
              onChange={handleChange}
            ></input>
          </span>
          <span className="DetailsPage_email">
            Email:
            <input
              type="text"
              id="DetailsPage_email"
              placeholder="abcdefghijk@gmail.com"
              name="email"
              value={state.email}
              onChange={handleChange}
            ></input>
          </span>
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetailsSection;
