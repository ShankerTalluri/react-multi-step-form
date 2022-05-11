import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import stat_1 from "../../../Data/2.png";
import stat_2 from "../../../Data/3.png";
import stat_3 from "../../../Data/1.png";
import quote from "../../../Data/quote.png";
// import { useNavigate } from "react-router-dom";

export default function Welcome_1() {
  // const navigate = useNavigate();
  return (
    <>
      <Paper sx={{ height: "100%", padding: 2 }}>
        <Box
          component="img"
          src={quote}
          alt="Quotation Mark"
          sx={{
            height: 80,
            width: "auto",
            maxHeight: { xs: 80, md: 150 },
          }}
        />
        <Typography
          component="div"
          sx={{ padding: 2, marginTop: -8, marginLeft: 2 }}
        >
          <Box sx={{ fontStyle: "oblique", fontSize: "h6.fontSize" }}>
            Out of school students will{" "}
            <Typography
              variant="h6"
              component="span"
              style={{ fontWeight: "bold" }}
            >
              {" Double "}
            </Typography>
            from
            <Typography
              variant="h6"
              component="span"
              style={{ fontWeight: "bold" }}
            >
              {" 32.2 million "}
            </Typography>
            as a result of COVID Aftermath
          </Box>
        </Typography>

        <Typography
          component="div"
          sx={{ padding: 2, paddingTop: 0, marginLeft: 2 }}
        >
          <Box sx={{ fontSize: "11px" }}>
            <strong>source: </strong>The impact of COVID 19 on school education
            and road to recovery, KPMG
          </Box>
        </Typography>

        <Typography
          component="div"
          sx={{ padding: 2, marginTop: 8, marginLeft: 2 }}
        >
          <Box sx={{ fontSize: "16px" }}>
            We have taken up a mission to serve
            <Typography component="span" style={{ fontWeight: "bold" }}>
              {" 1 Million (10 Lakh) "}
            </Typography>
            such students through
            <Typography component="span" style={{ fontWeight: "bold" }}>
              {" Ask Anjlee "}
            </Typography>
            <Typography component="p">
              A
              <Typography component="span" style={{ fontWeight: "bold" }}>
                {" Free "}
              </Typography>
              Educational Bot
            </Typography>
          </Box>
        </Typography>

        <Typography
          component="div"
          sx={{ padding: 2, marginTop: 0, marginLeft: 2 }}
        >
          <Box sx={{ fontSize: "16px" }}>
            If you are someone or Know someone who lost your Education due to
            COVID-19 Click on
            <Typography component="span" style={{ fontWeight: "bold" }}>
              {" REGISTER "}
            </Typography>
            to get your Access
          </Box>
        </Typography>

        <Box
          textAlign="center"
          sx={{ padding: 2, marginTop: 3, marginLeft: 2 }}
        >
          <Button
            style={{ backgroundColor: "#25A942" }}
            size="large"
            variant="contained"
            disableElevation
            onClick={() => navigate("/student_info")}
          >
            REGISTER
          </Button>
        </Box>
        <Typography
          component="div"
          sx={{
            padding: 2,
            marginTop: 14,
            paddingBottom: 0,
            marginLeft: 2,
          }}
        >
          <Box sx={{ fontSize: "12px" }}>
            <Typography component="span" variant="subtitle2">
              Any
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              style={{ fontWeight: "bold" }}
            >
              {" Queries"}
            </Typography>
            ?
            <Typography component="p" variant="subtitle2">
              Contact Us: <a href="tel:9343234543">+91 9343234543</a>,{" "}
              <a href="mailto:enquire@askanjlee.com">enquire@askanjlee.com</a>
            </Typography>
          </Box>
        </Typography>
      </Paper>
    </>
  );
}
