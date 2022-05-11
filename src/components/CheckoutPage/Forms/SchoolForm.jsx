import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, SelectField } from "../../FormFields";
import StateCityMap from "../../../Data/map.json";
import { FormikContext, useFormikContext } from "formik";

export default function SchoolForm(props) {
  const {
    formField: { schoolName, city, state, pincode, curriculum, grade },
  } = props;

  const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   const { values: formvalues } = FormikContext();
  //   console.log(formvalues);
  // }, [formvalues]);

  const { values: formvalues } = useFormikContext();

  useEffect(() => {
    const city_list = StateCityMap[formvalues.state];
    const cities_list = [];
    if (city_list) {
      city_list.forEach((city) =>
        cities_list.push({ value: city, label: city })
      );
    }

    setCities(cities_list);
  }, [formvalues.state]);

  const curriculums = [
    {
      value: "cbse",
      label: "CBSE",
    },
    {
      value: "state",
      label: "State",
    },
  ];

  const grades = [
    {
      value: "6",
      label: "6th",
    },
    {
      value: "7",
      label: "7th",
    },
    {
      value: "8",
      label: "8th",
    },
    {
      value: "9",
      label: "9th",
    },
    {
      value: "10",
      label: "10th",
    },
  ];

  const stateList = Object.keys(StateCityMap);
  const states = [];
  stateList.forEach((state) => states.push({ value: state, label: state }));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        School Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6} sm={6}>
          <SelectField
            name={grade.name}
            label={grade.label}
            data={grades}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <SelectField
            name={curriculum.name}
            label={curriculum.label}
            data={curriculums}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={schoolName.name}
            label={schoolName.label}
            fullWidth
          />
        </Grid>

        <Grid item xs={6} md={6} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField name={pincode.name} label={pincode.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
