import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, SelectField, DatePickerField } from "../../FormFields";

export default function StudentForm(props) {
  const {
    formField: { firstName, lastName, email, phone, gender, dateOfBirth },
  } = props;
  const genders = [
    {
      value: "NA",
      label: "Prefer Not to Say",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Fe-Male",
    },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={dateOfBirth.name}
            label={dateOfBirth.label}
            format="dd/MM/yy"
            views={["day", "month", "year"]}
            minDate={new Date(2006 / 12 / 31)}
            maxDate={new Date("2016/12/31")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={gender.name}
            label={gender.label}
            data={genders}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
