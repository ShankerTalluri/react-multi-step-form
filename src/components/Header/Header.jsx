import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Logo from "../../Data/logo.png";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <img
          src={Logo}
          alt="AskAnjlee logo"
          style={{
            height: "6vh",
            objectFit: "cover",
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
