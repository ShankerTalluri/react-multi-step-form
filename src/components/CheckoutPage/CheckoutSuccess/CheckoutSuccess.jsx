import React from "react";
import { Typography } from "@material-ui/core";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Your Registration is submitted successfully ✅
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Please Check your inbox and spam folders for a Registration Confirmation
        Email
      </Typography>
      <Typography variant="subtitle1">If you dont find any Email</Typography>
      <Typography variant="subtitle1">Please reach out to us at</Typography>
      <Typography variant="subtitle1">
        📞 +91 9643087897, 📧 help@askanjlee.com
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
