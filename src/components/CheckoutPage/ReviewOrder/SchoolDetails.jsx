import React from "react";
import moment from "moment";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

function SchoolDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { school, curriculum, city, state, pincode } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        School Details
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>School Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{school}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Curriculum</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{curriculum}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>City</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{city}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>State</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{state}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Pincode</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{pincode}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default SchoolDetails;
