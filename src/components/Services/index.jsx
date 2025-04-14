import React, { useState } from "react";
import { styled } from "@mui/material";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const Services = ({servicesData}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <SectionWrapper className="text-light">
      <div className="container">
        <h2 className="h2 fw-bold border-bottom border-light pb-2 mb-4">Services</h2>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card  text-light p-3" style={{ backgroundColor: "#3e3e3e" }}>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>

                {/* Show full description when expanded */}
                {expandedIndex === index && <p>{service.details}</p>}

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const cardStyle = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "1.5rem",
  margin: "1rem",
  borderRadius: "8px",
  width: "30%",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Services;