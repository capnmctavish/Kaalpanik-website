import React from "react";
import { styled } from "@mui/material";
import CustomSlider from "../../components/Slider";
import OurCapabilities from "../../components/OurCapabilities";
import CompanyInfo from "../../components/CompanyInfo";

const HomeWrapper = styled("div")(({theme}) => ({
  // "&": {
  //   marginTop: "40px",
  //   backgroundColor: "#000",
  //   color: "#fff"
  // },
  "& .section1": {
    textAlign: "center",
    // minHeight: "85vh",
    // position: "relative",
    // transform: "translate(0, 35%)",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "3rem",
      marginTop: "145px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "90px",
      marginBottom: "2rem",
    },
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
    [theme.breakpoints.up("sm")]: {
      margin: "3rem 0",
    },
  },
  "& .section2 .MuiCard-root.even h3": {
    borderBottom: "1px solid #fff",
  },
  "& .section3": {
    textAlign: "center",
    height: "60vh",
    padding: "0 40px",
    [theme.breakpoints.up("sm")]: {
      margin: "3rem 0",
    },
    // width: "740px",
    // margin: "10px auto",
  },
  "& .section3 .heading": {
    fontSize: "82px",
    fontWeight: "bold"
  },
  "& .section3 p": {
    fontSize: "28px",
    marginTop: "5px"
  },
  ".section4": {
    [theme.breakpoints.up("sm")]: {
      margin: "3rem 0",
    },
    // height: '55vh',
    // lineHeight: 10
  },
  ".section5": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    [theme.breakpoints.up("sm")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  ".section5 h2": {
    display: 'block',
  },
  ".list-unstyled" : { 
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "3",
    },
  },
  ".list-unstyled li" : { 
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
}));

const Home = () => {
  return (
    <div className="container">
      <HomeWrapper>
        <div className="section1">
          <CustomSlider />
        </div>
        <div className="section2">
          <CompanyInfo />
        </div>
        <div className="section4">
          <br/>
          <OurCapabilities />
        </div>
        <div className="section5">
          <h2 className="mb-4">Why Partner With Us?</h2>
          <ul className="list-unstyled">
            <li>✔ Global Expertise, Local Insights – We combine international innovation with deep industry knowledge.</li>
            <li>✔ People-First Approach – Technology is a tool; empowering people is our priority.</li>
            <li>✔ Sustainable & Responsible Innovation – Creating value that benefits businesses, people, and the planet.</li>
          </ul>
        </div>
        {/* <div className="section6 mt-5">
          <h2 className="fw-bold">Let’s Shape the Future Together</h2>
          <p className="lead text-muted">Unlock new possibilities, drive innovation, and redefine what’s next.</p>
          <a href="#contact" className="btn btn-primary btn-lg px-4 py-2">Connect With Us Today</a>
        </div> */}
      </HomeWrapper>
    </div>
  )
}

export default Home;