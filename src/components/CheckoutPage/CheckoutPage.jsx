import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import Welcome_1 from "./WelcomePage";
import StudentForm from "./Forms/StudentForm";
import SchoolForm from "./Forms/SchoolForm";
import ReviewProfile from "./ReviewOrder/ReviewProfile";
import CheckoutSuccess from "./CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import registrationFormModel from "./FormModel/registrationFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";

const steps = ["Student Details", "School Details", "Review your Details"];
const { formId, formField } = registrationFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <StudentForm formField={formField} />;
    case 1:
      return <SchoolForm formField={formField} />;
    case 2:
      return <ReviewProfile />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    // await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    console.log(values);

    const formattedData = {
      student_name: values.firstName + " " + values.lastName,
      email: values.email.toLocaleLowerCase(),
      phone_no: values.phone,
      gender: values.gender,
      date_of_birth: values.dateOfBirth?.format("YYYY-MM-DD"),
      school: values.schoolName,
      location: values.city + " " + values.state,
      pincode: values.pincode,
      grade: values.grade,
      curriculum: values.curriculum,
      telegram_id: "",
      last_progress: [],
    };
    console.log(formattedData);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/student`, {
      method: "post",
      body: JSON.stringify(formattedData),
      headers: { "Content-type": "application/json" },
    });
    console.log("status -> ", res.status);
    const json = await res.json();
    console.log(json);

    if (json.error == "email exists") {
      alert(
        `The Email ${formattedData.email} is already in use please register using differnt Email id`
      );
    } else {
      navigate("/status");
      const email_res = await fetch(
        `${process.env.REACT_APP_EMAIL_URL}/send-email?email=${formattedData.email}&template=registered_email&name=${values.firstName}&subject=Ask Anjlee Registration Successful`
      );
      const email_json = await email_res.json();
      console.log(email_json);
    }

    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log("submitted");
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Welcome_1 />
    </React.Fragment>
  );
}
