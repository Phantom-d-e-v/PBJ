import React, { useState } from "react";
import { global } from "../../stores/global.store";

const DetailsSection = () => {
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
    setUName,
    setAbout,
    setEducation,
    setEducation1,
    setWork,
    setWork1,
    setAddress,
    setNumber,
    setEmail,
  } = global();

  const handleUName = (e) => {
    setUName(e.target.value);
  };
  const handleAbout = (e) => {
    setAbout(e.target.value);
  };
  const handleEducation = (e) => {
    setEducation(e.target.value);
  };
  const handleEducation1 = (e) => {
    setEducation1(e.target.value);
  };
  const handleWork = (e) => {
    setWork(e.target.value);
  };
  const handleWork1 = (e) => {
    setWork1(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="DetailsPage_DetailsSection_div">
      <form className="DetailsPage_Section_form" method="post">
        <section className="DetailsPage_name">
          <input
            type="text"
            id="DetailsPage_name"
            placeholder="Your Name"
            name="uName"
            value={uName}
            onChange={handleUName}
          ></input>
        </section>
        <section className="DetailsPage_about">
          About:
          <textarea
            id="DetailsPage_about"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis fermentum, pharetra metus vitae, mattis quam. Quisque posuere laoreet neque, vel iaculis arcu lacinia in. Cras gravida eleifend ligula."
            name="about"
            value={about}
            onChange={handleAbout}
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
                value={education}
                onChange={handleEducation}
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_education_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
                name="education1"
                value={education1}
                onChange={handleEducation1}
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
                value={work}
                onChange={handleWork}
              />
            </li>
            <li>
              <textarea
                id="DetailsPage_workExp_2"
                placeholder="Curabitur in lacus justo. Maecenas posuere luctus ultricies. Class aptent taciti sociosqu ad litora"
                name="work1"
                value={work1}
                onChange={handleWork1}
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
              value={address}
              onChange={handleAddress}
            ></input>
          </span>
          <span className="DetailsPage_number">
            PhoneNumber:
            <input
              type="text"
              id="DetailsPage_number"
              placeholder="9823410569"
              name="number"
              value={number}
              onChange={handleNumber}
            ></input>
          </span>
          <span className="DetailsPage_email">
            Email:
            <input
              type="text"
              id="DetailsPage_email"
              placeholder="abcdefghijk@gmail.com"
              name="email"
              value={email}
              onChange={handleEmail}
            ></input>
          </span>
        </section>
      </form>
    </div>
  );
};

export default DetailsSection;
