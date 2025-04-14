import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material";
import AOS from "aos";
import "../../assets/css/index.css";
import PartnersSection from "../../components/Partners";
import Services from "../../components/Services";
import CaseStudyModal from "../../components/CaseStudyModal/index.jsx";
import { FaServer, FaCloud, FaNetworkWired, FaTools, FaDatabase } from "react-icons/fa";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const AiOps = () => {
  const services = [
    {
      title: 'Anomaly Detection',
      description: 'Detect issues in real-time using AI-driven monitoring and pattern recognition.',
      details: 'Our anomaly detection system leverages machine learning models to continuously monitor metrics, detect deviations, and provide alerts before they escalate into critical failures. Customized thresholds and pattern analysis enhance detection accuracy.'
    },
    {
      title: 'Root Cause Analysis',
      description: 'Identify the root cause of incidents rapidly through AI-assisted diagnostics.',
      details: 'By correlating data from multiple sources, our root cause analysis tool quickly identifies the underlying issues, reducing resolution time and minimizing downtime.'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Anticipate and prevent system failures with predictive insights.',
      details: 'Using historical data and AI algorithms, our predictive maintenance tool provides actionable insights to help you proactively address potential failures before they impact your operations.'
    },
    {
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks and enhance operational efficiency.',
      details: 'Leverage AI-powered automation to streamline processes, reduce manual interventions, and improve overall productivity.'
    }
  ];
  
  const caseStudies = [
    {
      title: "AI-Driven IT Incident Management",
      industry: "IT Operations",
      category: "AI for IT Support",
      icon: <FaServer size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced IT downtime by 40% using AI-driven predictive analytics.",
      details: `
        A global IT services company implemented AI Ops to predict and prevent system failures.
  
        🔹 **Results:**
        - 40% reduction in IT downtime.
        - 50% faster issue resolution.
        - 99.9% uptime achieved.
  
        🔹 **Tech Used:** AI Incident Management, ML Log Analysis, Predictive Monitoring.
      `,
    },
    {
      title: "AI-Powered Cloud Monitoring",
      industry: "Cloud Computing",
      category: "AI for Cloud Optimization",
      icon: <FaCloud size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced cloud resource costs by 35% through AI-based optimization.",
      details: `
        A cloud services provider used AI Ops to optimize resource allocation.
  
        🔹 **Results:**
        - 35% reduction in cloud costs.
        - 25% improvement in response time.
        - Automated 70% of infrastructure scaling tasks.
  
        🔹 **Tech Used:** AI Workload Optimization, Dynamic Scaling, Cost Analysis AI.
      `,
    },
    {
      title: "AI-Driven Network Anomaly Detection",
      industry: "Networking & Security",
      category: "AI for Threat Detection",
      icon: <FaNetworkWired size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Detected and prevented 98% of network anomalies using AI Ops.",
      details: `
        A telecom company deployed AI Ops for real-time network monitoring and anomaly detection.
  
        🔹 **Results:**
        - 98% anomaly detection accuracy.
        - 60% reduction in network downtime.
        - 50% faster response to security threats.
  
        🔹 **Tech Used:** AI Network Analysis, Deep Learning Security, Automated Response Systems.
      `,
    },
    {
      title: "AI for DevOps Automation",
      industry: "Software Development",
      category: "AI-Driven DevOps",
      icon: <FaTools size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Accelerated software deployments by 30% with AI-driven DevOps automation.",
      details: `
        A SaaS company integrated AI Ops to automate DevOps pipelines.
  
        🔹 **Results:**
        - 30% faster software releases.
        - 50% reduction in deployment failures.
        - 95% accuracy in predicting build issues.
  
        🔹 **Tech Used:** AI CI/CD Pipelines, Intelligent Code Review, AI Deployment Optimization.
      `,
    },
    {
      title: "AI-Driven Database Performance Tuning",
      industry: "Data Management",
      category: "AI for Database Optimization",
      icon: <FaDatabase size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Improved query performance by 45% using AI-powered database tuning.",
      details: `
        A financial services firm leveraged AI Ops for automated database tuning.
  
        🔹 **Results:**
        - 45% faster query execution.
        - 30% reduction in storage costs.
        - 24/7 autonomous database optimization.
  
        🔹 **Tech Used:** AI Query Optimization, Autonomous Database Tuning, Machine Learning Performance Tuning.
      `,
    },
  ];

  useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);

  return (
    <div className="bg-dark text-white container-fluid">
      {/* Header Section */}
      <SectionWrapper className="text-center">
        <Grid container spacing={2} className="container containerStyle">
          <Grid size={{ sm: 1, md: 5 }} className="columnStyle">
            <img
              src="/images/Ai_Ops.avif"
              alt="AiOps"
              className="img-fluid rounded shadow-sm mt-4"
            />
          </Grid> 
          <Grid size={{ sm: 1, md: 7 }} className="d-flex flex-column justify-content-center">
            <p></p>
            <h1 className="display-4 custom-heading fw-bold mb-3">AI-Powered IT Operations (AiOps)</h1>
            <p className="lead">
              Automate, analyze, and optimize IT operations with AI-driven insights.
            </p>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Key Metrics Section */}
      <SectionWrapper>
        <div className="container">
          <h2 className="h2 fw-bold border-bottom border-secondary pb-2 mb-4">Why Choose AiOps?</h2>
          {/* <p className="text-muted">Leverage Artificial Intelligence to optimize IT operations, enhance efficiency, and reduce downtime.</p> */}
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold short_line">90% Faster Issue Resolution</h5>
              <p>Automate root-cause analysis and anomaly detection to resolve issues swiftly.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">80% Reduction in Alerts</h5>
              <p>Filter noise and focus on actionable insights using AI-driven correlation.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">50% Improved Operational Efficiency</h5>
              <p>Optimize resource utilization and enhance system reliability through predictive analytics.</p>
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
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Ready to Transform Your IT Operations?</h2>
          <p className="lead text-light mb-4">
            Leverage AI to automate and optimize your IT infrastructure today.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section> */}
    </div>
  );
};

export default AiOps;
