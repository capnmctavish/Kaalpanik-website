import { styled } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const slides = [
  {
    title: "Revolutionize IT Operations with AiOps",
    description: "Leverage the power of AI to automate, optimize, and enhance your IT operations.",
    cta: <Link to='/aiops' style={linkStyle}>Learn More</Link>,
  },
  {
    title: "Transform Workflows with AI Agents",
    description: "Deploy intelligent agents to simplify complex processes and drive business growth.",
    cta: <Link to='/ai-agents' style={linkStyle}>Discover AI Agents</Link>,
  },
  {
    title: "Unlock Creativity with Generative AI",
    description: "Innovate with cutting-edge generative AI solutions for content creation and ideation.",
    cta: <Link to='/gen-ai' style={linkStyle}>See How It Works</Link>,
  },
  {
    title: "Scalable Cloud Solutions for a Connected Future",
    description: "Enhance flexibility, scalability, and security with our robust cloud services.",
    cta: <Link to='/cloud' style={linkStyle}>Explore Cloud Options</Link>,
  },
  {
    title: "Make Informed Decisions with Data Analytics",
    description: "Transform raw data into actionable insights to fuel your business strategies.",
    cta: <Link to='/data-analytics' style={linkStyle}>Get Started with Analytics</Link>,
  },
  {
    title: "Empowering Smart Solutions with IoT",
    description: "Connect devices and harness IoT technologies for smarter business outcomes.",
    cta: <Link to='/iot' style={linkStyle}>Discover IoT Solutions</Link>,
  },
];

const SliderWrapper = styled("div")(({theme}) => ({
  ".desktop":{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  ".mobile":{
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  ".mb-slider-container": {
    padding: "20px",
  },
}));

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };

  return (
    <SliderWrapper>
      <div className="container">
        <div className="desktop">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="columnStyle">
                <Grid container spacing={1}>
                  <Grid size={7} className="d-flex flex-column justify-content-center">
                    <h2 style={headingStyle}>{slide.title}</h2>
                  </Grid>
                  <Grid size={5}>
                    <div style={infoSection}>
                      <p style={descriptionStyle}>{slide.description}</p>
                      <button className="btn custom-btn btn-lg" style={buttonStyle}>{slide.cta}</button>
                    </div>
                  </Grid>
                  {/* <Grid size={1}></Grid> */}
                </Grid>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mobile">
          <div className="mb-slider-container" >
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <h3 className="mb_h3">{slide.title}</h3>
                  <p className="lead">{slide.description}</p>
                  <button className="btn custom-btn">{slide.cta}</button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
};

const headingStyle = {
  fontSize: "47px",
  padding: "10px 55px",
}

const infoSection = {
  margin: "0 30px 30px",
  padding: "40px",
  borderTop: "1px solid #ffffff54",
  borderBottom: "1px solid #ffffff54",
  borderLeft: "1px solid #ffffff54",
}

const descriptionStyle = {
  padding: "10px 20px",
  fontSize: "22px"
}

const buttonStyle = {
  marginTop: "1rem",
  cursor: "pointer",
};



export default CustomSlider;