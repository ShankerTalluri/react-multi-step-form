import React from "react";
import { Link, Typography } from "@material-ui/core/";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {"Ask Anjlee "}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
