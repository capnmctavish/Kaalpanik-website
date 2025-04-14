import React, { useEffect } from "react";
import Grid from '@mui/material/Grid2';
import AOS from "aos";
import "../../assets/css/index.css";
import { styled } from "@mui/material";
import PartnersSection from "../../components/Partners";
import Services from "../../components/Services";
import CaseStudyModal from "../../components/CaseStudyModal";
import { FaChartLine, FaShoppingCart, FaHeartbeat, FaUniversity, FaDollarSign } from "react-icons/fa";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const DataAnalytics = () => {
  const services = [
    {
      title: 'Data Visualization',
      description: 'Transform complex data into intuitive visual reports.',
      details: 'Our data visualization tools offer interactive dashboards, charts, and graphs that help you uncover patterns, trends, and insights with ease.'
    },
    {
      title: 'Predictive Analytics',
      description: 'Anticipate future trends using AI-powered predictive models.',
      details: 'We provide sophisticated predictive analytics solutions to help you make data-driven decisions, enhancing efficiency and profitability.'
    },
    {
      title: 'Data Mining',
      description: 'Extract valuable insights from vast datasets.',
      details: 'Our data mining algorithms are designed to discover hidden patterns, correlations, and anomalies in your data to unlock actionable intelligence.'
    },
    {
      title: 'Data Cleaning & Preparation',
      description: 'Ensure data quality with robust cleaning and preprocessing.',
      details: 'We offer end-to-end data cleaning services, including deduplication, normalization, and transformation, ensuring reliable analytics results.'
    }
  ];

  const caseStudies = [
    {
      title: "Customer Behavior Analysis for E-commerce",
      industry: "E-commerce",
      category: "Predictive Analytics",
      
      icon: <FaShoppingCart size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Increased sales by 25% using AI-driven customer behavior insights.",
      details: `
        An online retailer used predictive analytics to track customer behavior and optimize marketing.
  
        🔹 **Results:**
        - 25% increase in sales conversion.
        - 40% improvement in targeted marketing efficiency.
        - 30% boost in customer retention.
  
        🔹 **Tech Used:** AI Predictive Modeling, Customer Segmentation, Big Data Analytics.
      `,
    },
    {
      title: "AI-Powered Healthcare Data Analysis",
      industry: "Healthcare",
      category: "AI-Driven Diagnostics",
      icon: <FaHeartbeat size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced hospital readmission rates by 30% with AI-driven patient data analysis.",
      details: `
        A hospital network analyzed patient history to predict high-risk cases and improve care.
  
        🔹 **Results:**
        - 30% reduction in readmission rates.
        - 20% improvement in treatment effectiveness.
        - 95% accuracy in early disease detection.
  
        🔹 **Tech Used:** AI Patient Risk Prediction, Machine Learning in Healthcare, Predictive Analytics.
      `,
    },
    {
      title: "Financial Fraud Detection with Big Data",
      industry: "Banking & Finance",
      category: "Fraud Detection",
      icon: <FaDollarSign size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Detected and prevented 98% of fraudulent transactions using AI-powered analytics.",
      details: `
        A major bank integrated AI fraud detection algorithms to monitor real-time transactions.
  
        🔹 **Results:**
        - 98% fraud detection accuracy.
        - 70% reduction in financial losses.
        - Real-time alerts for suspicious activities.
  
        🔹 **Tech Used:** AI Fraud Detection, Behavioral Analytics, Deep Learning Risk Models.
      `,
    },
    {
      title: "Data-Driven Learning Analytics in Education",
      industry: "Education",
      category: "AI-Powered Student Performance Tracking",
      icon: <FaUniversity size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Improved student performance by 20% using AI-driven learning analytics.",
      details: `
        A university applied AI-driven analytics to assess student engagement and personalize learning.
  
        🔹 **Results:**
        - 20% increase in student performance.
        - 35% improvement in personalized learning recommendations.
        - 90% accuracy in predicting dropout risks.
  
        🔹 **Tech Used:** AI Learning Analytics, Student Performance Prediction, NLP-based Adaptive Learning.
      `,
    },
    {
      title: "Retail Demand Forecasting with AI",
      industry: "Retail",
      category: "AI Demand Forecasting",
      icon: <FaChartLine size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Optimized inventory and reduced stockouts by 40% using AI demand forecasting.",
      details: `
        A retail chain used AI to analyze historical sales data and predict future demand.
  
        🔹 **Results:**
        - 40% reduction in stockouts.
        - 25% lower inventory carrying costs.
        - 30% improvement in supplier coordination.
  
        🔹 **Tech Used:** AI Demand Forecasting, Predictive Inventory Management, Big Data Analysis.
      `,
    },
  ];
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="container-fluid bg-dark text-light container-fluid">
      <SectionWrapper className="text-center">
        <Grid container spacing={2} className="container containerStyle" data-aos="fade-up">
          <Grid size={{ sm: 1, md: 5 }} className="columnStyle">
            <img
              src="/images/data_analytics.avif"
              alt="Data Analytics"
              className="img-fluid rounded shadow-sm mt-4"
            />
          </Grid>
          <Grid size={{ sm: 1, md: 7 }} className="d-flex flex-column justify-content-center">
            <p></p>
            <h1 className="display-4 custom-heading fw-bold mb-3">Data Analytics: Unlock Actionable Insights</h1>
            <p className="lead">
              Drive business growth with AI-powered data analytics solutions.
            </p>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Key Metrics Section */}
      <SectionWrapper>
        <div className="container">
          <h2 className="h2 fw-bold border-bottom border-secondary pb-2 mb-4">Why choose Data Analytics</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold short_line">80% Better Decision-Making</h5>
              <p>Leverage data-driven insights to enhance decision accuracy and effectiveness.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">70% Operational Efficiency Improvement</h5>
              <p>Optimize processes and resource allocation through advanced analytics.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">60% Cost Reduction</h5>
              <p>Identify inefficiencies and reduce operational costs using predictive analytics.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <Services servicesData = {services} />

      <CaseStudyModal caseStudies={caseStudies} />

      <PartnersSection />

      {/* Call to Action */}
      {/* <section className="text-center py-5 text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Transform Your Data into Insights</h2>
          <p className="lead text-light mb-4">
            Leverage AI-powered analytics to make data-driven decisions.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section> */}
    </div>
  );
};

export default DataAnalytics;