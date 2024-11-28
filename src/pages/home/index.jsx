import React from "react";
import Header from "../../components/header"
import { Box, Button, Card, styled } from "@mui/material";
import Grid from '@mui/material/Grid2';

const HomeWrapper = styled("div")(() => ({
  "& .section1": {
    textAlign: "center",
    height: "68vh"
  },
  "& .innerWrapper": {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "& .innerWrapper h1": {
      fontSize: "60px"
  },
   "& .section2": {
    margin: "40px",
   },
  "& .section2 .MuiCard-root": {
    margin: "20px",
    height: "350px",
    // width: "200px",
  },
  "& .section3": {
    textAlign: "center",
    height: "62vh",
    padding: "0 40px",
    width: "740px",
    margin: "10px auto",
  },
  "& .section3 .heading": {
    fontSize: "82px",
    fontWeight: "bold"
  },
  "& .section3 p": {
    fontSize: "28px",
    marginTop: "5px"
  }
}));

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeWrapper>
        <div className="section1">
          <div className="innerWrapper">
            <h1>Generative AI</h1>
          </div>
        </div>
        <div className="section2">
          <Grid container spacing={1}>
          <Grid size={3}>
          {/* <Box sx={{ minWidth: 175 }}> */}
            <Card variant="outlined"></Card>
          {/* </Box> */}
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>

          <Grid size={3}>
          {/* <Box sx={{ minWidth: 175 }}> */}
            <Card variant="outlined"></Card>
          {/* </Box> */}
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>
          <Grid size={3}>
          <Card variant="outlined"></Card>
          </Grid>
          </Grid>
        </div>
        <div className="section3">
          <div className="innerWrapper">
            <span className="heading">360° VALUE</span>
            <p>Every day, we embrace change and create value for all our stakeholders, in every part of the world.</p>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export default Home;