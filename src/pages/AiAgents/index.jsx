import React from "react";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material";
import "../../assets/css/index.css";
import PartnersSection from "../../components/Partners";
import Services from "../../components/Services";
import CaseStudyModal from "../../components/CaseStudyModal";import { FaRobot, FaHeadset, FaUserMd, FaUniversity, FaMoneyBillWave } from "react-icons/fa";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));
const AiAgents = () => {
  const services = [
    {
      title: 'Conversational Agents',
      description: 'Empower your business with AI-driven conversational agents for seamless communication.',
      details: 'Our conversational agents are equipped with Natural Language Processing (NLP) to provide intuitive and human-like interactions. From customer support to sales assistance, enhance engagement and satisfaction.'
    },
    {
      title: 'Task Automation Agents',
      description: 'Automate repetitive tasks with intelligent task automation agents.',
      details: 'These agents are designed to handle workflow automation, data processing, and routine operations with efficiency, reducing the workload on your team and minimizing errors.'
    },
    {
      title: 'Data Analysis Agents',
      description: 'Leverage AI agents for real-time data analysis and insights.',
      details: 'With powerful data-crunching capabilities, our agents analyze large datasets, extract valuable insights, and generate detailed reports to drive informed decision-making.'
    },
    {
      title: 'Recommendation Agents',
      description: 'Provide personalized recommendations with AI-powered suggestion systems.',
      details: 'From product recommendations to content suggestions, our agents enhance user experience by learning from user preferences and delivering accurate suggestions.'
    }
  ];

  const caseStudies = [
    {
      title: "AI Chatbot for Customer Support",
      industry: "E-commerce",
      category: "AI Virtual Assistants",
      icon: <FaHeadset size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced customer service costs by 50% with AI-powered chatbots.",
      details: `
        An e-commerce company implemented AI chatbots for instant customer query resolution.
  
        🔹 **Results:**
        - 50% reduction in customer support costs.
        - 60% faster response times.
        - 85% customer satisfaction score.
  
        🔹 **Tech Used:** NLP Chatbots, AI Sentiment Analysis, Cloud AI Processing.
      `,
    },
    {
      title: "AI Agent for Healthcare Diagnostics",
      industry: "Healthcare",
      category: "AI-Powered Diagnosis",
      icon: <FaUserMd size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Improved early disease detection rates by 70% using AI-assisted diagnosis.",
      details: `
        A hospital network used AI agents to analyze patient symptoms and suggest treatments.
  
        🔹 **Results:**
        - 70% increase in early disease detection.
        - 40% reduction in diagnostic errors.
        - 30% faster treatment recommendations.
  
        🔹 **Tech Used:** AI Medical Imaging, Deep Learning Models, NLP in Healthcare.
      `,
    },
    {
      title: "AI Virtual Assistant for Financial Advisory",
      industry: "Banking & Finance",
      category: "AI-Powered Financial Agents",
      icon: <FaMoneyBillWave size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Increased investment portfolio returns by 20% using AI-driven advisors.",
      details: `
        A financial institution implemented AI virtual agents to provide real-time financial insights.
  
        🔹 **Results:**
        - 20% increase in investment returns.
        - 30% faster loan approvals.
        - 95% accuracy in fraud detection.
  
        🔹 **Tech Used:** AI Risk Analysis, Machine Learning in Finance, AI Portfolio Optimization.
      `,
    },
    {
      title: "AI Teaching Assistant for Universities",
      industry: "Education",
      category: "AI in Learning",
      icon: <FaUniversity size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Automated grading and personalized tutoring increased student performance by 25%.",
      details: `
        A university deployed AI teaching assistants to automate grading and tutor students.
  
        🔹 **Results:**
        - 25% increase in student performance.
        - 40% reduction in grading time.
        - 98% accuracy in automated assessments.
  
        🔹 **Tech Used:** AI Grading Systems, NLP Tutoring, Adaptive Learning AI.
      `,
    },
    {
      title: "AI-Powered HR Recruitment Bot",
      industry: "Human Resources",
      category: "AI for Talent Acquisition",
      icon: <FaRobot size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced hiring time by 35% with AI-driven resume screening.",
      details: `
        A multinational company integrated AI recruitment agents to shortlist top candidates.
  
        🔹 **Results:**
        - 35% faster hiring process.
        - 50% increase in quality hires.
        - 60% automation in candidate screening.
  
        🔹 **Tech Used:** AI Resume Parsing, Predictive Hiring Analytics, NLP Chatbots for HR.
      `,
    },
  ];
  
  return (
    <div className="bg-dark text-white container-fluid">
      {/* Header Section */}
      <SectionWrapper className="text-center">
        <Grid container spacing={2} className="container containerStyle">
          <Grid size={{ sm: 1, md: 5 }} className="columnStyle">
          <img
            src="/images/Ai_Agents.jpg"
            alt="Ai Agents"
            className="img-fluid rounded shadow-sm mt-4"
          />
          </Grid>
          <Grid size={{ sm: 1, md: 7 }} className="d-flex flex-column justify-content-center">
            <p></p>
            <h1 className="display-4 custom-heading fw-bold mb-3">AI Agents: Intelligent Automation</h1>
            <p className="lead">
              Unlock business efficiency with autonomous AI agents.
            </p>
         </Grid>
        </Grid>
      </SectionWrapper>

      {/* Key Metrics Section */}
      <SectionWrapper>
        <div className="container">
          <h2 className="h2 fw-bold border-bottom border-secondary pb-2 mb-4">Why Choose Ai Agents?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold short_line">70% Improved Task Automation</h5>
              <p>Deploy AI agents to streamline workflows, reducing manual effort significantly.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">60% Enhanced Decision-Making</h5>
              <p>AI agents provide insights and recommendations, improving decision accuracy.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">50% Boost in Customer Engagement</h5>
              <p>Deliver personalized experiences and support through conversational AI agents.</p>
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
          <h2 className="h2 fw-bold mb-3">Enhance Your Business with AI Agents</h2>
          <p className="lead text-light mb-4">
            Automate operations, reduce costs, and improve efficiency.
          </p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </section> */}
    </div>
  );
};

export default AiAgents;