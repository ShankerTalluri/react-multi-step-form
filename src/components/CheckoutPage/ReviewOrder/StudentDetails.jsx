import React from "react";
import moment from "moment";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

function StudentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, lastName, gender, email, phone, dateOfBirth } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Student Details
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>
        {moment(dateOfBirth).format("DD/MM/YY")}
      </Typography>
      <Typography gutterBottom>{`${gender}`}</Typography>
      <Typography gutterBottom>{`${email}`}</Typography>
      <Typography gutterBottom>{`${phone}`}</Typography>
    </Grid>
  );
}

export default StudentDetails;
