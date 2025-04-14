import React, { useState } from "react";
import Slider from "react-slick";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material";

const capabilityInfo = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  padding: '0 0 0 45px',
};

const SliderWrapper = styled("div")(({theme}) => ({
  "&": {
    [theme.breakpoints.up("sm")]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px'
    },
  },
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
  ".mb-capability p": {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  ".mb-capability span": {
    fontSize: "17px",
  },
}));

function OurCapabilities() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const capabilities = [
    {
      image: "images/tech_innovation.png",
      heading: "Technology & Digital Innovation",
      text: "We help businesses build future-ready solutions by leveraging the latest advancements in cloud computing, artificial intelligence, and emerging technologies. Our expertise enables companies to enhance efficiency, drive growth, and stay competitive in an ever-evolving digital landscape.",
      alt: "Technology & Digital Innovation"
    },
    {
      image: "images/strategy_&_consulting.png",
      heading: "Strategy & Consulting",
      text: "Our strategic consulting services are designed to help organizations navigate complex business challenges. We provide data-driven insights, market analysis, and tailored solutions that empower businesses to make informed decisions and achieve sustainable success.",
      alt: "Strategy & Consulting"
    },
    {
      image: "images/AI.png",
      heading: "AI & Intelligent Automation",
      text: "Harnessing the power of artificial intelligence and automation, we streamline operations, enhance decision-making, and unlock new possibilities for growth. Our AI-driven solutions are designed to optimize workflows and improve overall business performance.",
      alt: "AI & Intelligent Automation"
    },
    {
      image: "images/cloud_security1.jpeg",
      heading: "Cloud & Cybersecurity",
      text: "We provide robust cloud solutions and advanced cybersecurity strategies to protect businesses from evolving threats. Our services ensure seamless digital transformation while maintaining data security, compliance, and resilience against cyber risks.",
      alt: "Cloud & Cybersecurity"
    },
    {
      image: "images/industry_solutions.png",
      heading: "Industry-Specific Solutions",
      text: "Understanding that every industry has unique needs, we offer tailored solutions for sectors such as finance, healthcare, retail, and manufacturing. Our customized approach ensures businesses achieve optimal results with industry-specific innovations.",
      alt: "Industry-Specific Solutions"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };

  return (
    <SliderWrapper>
      
      <div className="container">
        <div className="desktop">
          <div className="capability_slider containerStyle" >
            <Slider {...settings}>
              {capabilities.map((capability, index) => (
                <div key={index} className="carousel-item columnStyle">
                  <Grid container spacing={1}>
                    <Grid size={5} className="">
                      <img src={capability.image} alt={capability.alt} className="d-block w-100" height="315px" />
                    </Grid>
                    <Grid size={7} className="capability" style={capabilityInfo}>
                      <p>{capability.heading}</p>
                      <span>{capability.text}</span>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mobile">
          <div className="mb-slider-container">
            <Slider {...settings}>
              {capabilities.map((capability, index) => (
                <div key={index}>
                  <img src={capability.image} alt={capability.alt} className="d-block w-100" />
                    
                  <div className="mb-capability">
                    <p>{capability.heading}</p>
                    <span>{capability.text}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
}

export default OurCapabilities;