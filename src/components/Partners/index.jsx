import React from "react";
import { styled } from "@mui/material";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
  ".logo":{
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      height: "70px"
    },
    [theme.breakpoints.down("sm")]: {
      // idth: "100px",
      height: "40px"
    },
  }
}));

export default function PartnersSection() {
  const partners = [
    { name: "AWS", logo: "/images/AWS-2.png" },
    { name: "Google", logo: "/images/google_logo.png" },
  ];

  return (
    <SectionWrapper className="bg-dark text-center">
      <div className="container">
        <h2 className="mb-5 fw-bold">Our Partners</h2>
        <div className="row">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid rounded mb-2 logo"
                // style={{ width: "200px", height: "70px" }}
              />
              {/* <p className="text-muted">{partner.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}