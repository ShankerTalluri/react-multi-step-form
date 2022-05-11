import * as Yup from "yup";
import moment from "moment";
import registrationFormModel from "./registrationFormModel";
const {
  formField: { firstName, lastName, dateOfBirth, pincode, email, phone },
} = registrationFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [dateOfBirth.name]: Yup.string()
      .nullable()
      .required(`${dateOfBirth.requiredErrorMsg}`)
      .test("expDate", dateOfBirth.invalidErrorMsg, (val) => {
        if (val) {
          const startDate = new Date(2006, 1, 1);
          const endDate = new Date(2016, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
  }),
  Yup.object().shape({
    [pincode.name]: Yup.string()
      .required(`${pincode.requiredErrorMsg}`)
      .test(
        "len",
        `${pincode.invalidErrorMsg}`,
        (val) => val && val.length === 6
      ),
  }),
];
