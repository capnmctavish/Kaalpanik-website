import react, { useState } from 'react';
import { styled } from "@mui/material";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const CaseStudyModal = ({ caseStudies }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <SectionWrapper>
      <div className="container">
        <h2 className="h2 fw-bold border-bottom pb-2 mb-4">Case Studies</h2>
        <div className="row g-4">
          <div className="container my-5">
            {/* <h2 className="text-center fw-bold mb-4 bg-black" style={{ padding: "1rem" }}>☁️ Cloud Capability Case Studies</h2> */}
            <div className="row">
              {caseStudies.map((caseStudy, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card text-light p-3" style={{ backgroundColor: "#292929" }}>
                    <div className="d-flex align-items-center">
                      {caseStudy.icon}
                      <h5 className="card-title ms-2">{caseStudy.title}</h5>
                    </div>
                    <h6 className="text-warning">{caseStudy.industry} | {caseStudy.category}</h6>
                    {/* <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="img-fluid mb-3 rounded"
                    /> */}
                    <p className="card-text">{caseStudy.description}</p>

                    {/* Show full description when expanded */}
                    {expandedIndex === index && <pre className="text-light">{caseStudy.details}</pre>}

                    <button
                      className="btn btn-primary mt-2"
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                    >
                      {expandedIndex === index ? "🔼 Read Less" : "🔽 Read More"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudyModal;