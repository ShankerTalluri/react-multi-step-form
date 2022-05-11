import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import StudentDetails from "./StudentDetails";
import SchoolDetails from "./SchoolDetails";

export default function ReviewProfile() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile summary
      </Typography>

      <Grid container spacing={2}>
        <StudentDetails formValues={formValues} />
        <SchoolDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
