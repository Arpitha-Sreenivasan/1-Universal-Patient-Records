import React, { useState } from "react";
import RegisterUser from "./RegisterUser";
import RegisterPatient from "./RegisterPatient";
import RegisterDoctor from "./RegisterDoctor";
import RegisterBoth from "./RegisterBoth";

// REGISTER USER 1
// REGISTER PATIENT 2
// REGISTER DOCTOR 3
// REGISTER BOTH 4

const RegisterForm = () => {
  const initialState = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    addharNumber: "",
    contact: "",
    dateOfBirth: Date.now(),
    gender: "",
    location: "",
    city: "",
    state: "",
    registerAs: "",
    patientHabits: [],
    chronicDisease: [],
    doctorLicenceNumber: "",
    doctorQualification: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const nextStep = () => {
    console.log("Next step function trigger");
    if (userDetails.registerAs == "patient") {
      setUserDetails({ ...userDetails, step: 2 });
    }
    if (userDetails.registerAs == "doctor") {
      setUserDetails({ ...userDetails, step: 3 });
    }
    if (userDetails.registerAs == "both") {
      setUserDetails({ ...userDetails, step: 4 });
    }
  };

  const pageDisplay = () => {
    if (userDetails.step === 1) {
      return (
        <RegisterUser
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else if (userDetails.step === 2) {
      return (
        <RegisterPatient
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else if (userDetails.step === 3) {
      return (
        <RegisterDoctor
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return (
        <RegisterBoth
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          nextStep={nextStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit clicked");
    console.log(userDetails);
  };

  return <>{pageDisplay()}</>;
};

export default RegisterForm;
