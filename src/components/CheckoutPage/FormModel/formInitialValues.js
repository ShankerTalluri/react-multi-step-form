import registrationFormModel from "./registrationFormModel";
const {
  formField: {
    firstName,
    lastName,
    email,
    phone,
    gender,
    dateOfBirth,
    city,
    pincode,
    state,
    schoolName,
    curriculum,
  },
} = registrationFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phone.name]: "",
  [pincode.name]: "",
  [gender.name]: "",
  [city.name]: "",
  [state.name]: "",
  [schoolName.name]: "",
  [dateOfBirth.name]: "",
  [curriculum.name]: "",
};
