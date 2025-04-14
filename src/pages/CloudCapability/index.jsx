import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material";
import AOS from "aos";
import "../../assets/css/index.css";
import PartnersSection from "../../components/Partners";
import Services from "../../components/Services";
import { FaCloud, FaLock, FaCogs, FaSync, FaChartLine } from "react-icons/fa";
import CaseStudyModal from "../../components/CaseStudyModal";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const CloudCapability = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const servicesData = [
    {
      title: "AI-Powered Cloud Computing",
      description: "Leverage AI-driven cloud automation for faster and smarter computing.",
      details:
        "Our AI-powered cloud solutions optimize resource allocation, reduce costs by up to 50%, and ensure high availability through predictive analytics.",
    },
    {
      title: "Hybrid Cloud Integration",
      description: "Seamless connectivity between public and private clouds.",
      details:
        "Combine the best of public and private clouds to enhance security, flexibility, and performance, reducing latency by 40%.",
    },
    {
      title: "Serverless Architecture",
      description: "Scale applications without managing servers.",
      details:
        "Our serverless solutions let you run applications efficiently, cutting infrastructure costs and auto-scaling resources based on demand.",
    },
    {
      title: "Cloud Security & Compliance",
      description: "Enterprise-grade cloud security solutions.",
      details:
        "Ensure compliance with industry standards (ISO 27001, GDPR) and secure your cloud environment with advanced threat detection.",
    },
  ];

  
  const caseStudies = [
    {
      title: "AI-Optimized Cloud Resource Management",
      industry: "Finance",
      category: "Cloud Optimization",
      icon: <FaCloud size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Reduced cloud costs by 45% using AI-driven workload automation.",
      details: `
        A leading financial institution struggled with unpredictable cloud expenses.
        Our AI-driven cloud resource management system optimized workload scheduling,
        reducing operational costs significantly.

        🔹 **Results:**
        - 45% reduction in cloud costs.
        - 30% faster processing time.
        - 99.99% uptime achieved.

        🔹 **Tech Used:** AWS Auto Scaling, Kubernetes, AI Workload Analytics.
      `,
    },
    {
      title: "Cloud-Based Healthcare Data Security",
      industry: "Healthcare",
      category: "Cloud Security",
      icon: <FaLock size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Ensured HIPAA compliance with AI-based cloud security monitoring.",
      details: `
        A healthcare provider needed to secure patient records while maintaining compliance with regulations.
        Our cloud security solution ensured real-time threat detection and GDPR compliance.

        🔹 **Results:**
        - 99.9% reduction in security breaches.
        - 50% faster compliance audits.
        - Zero data leaks in 24 months.

        🔹 **Tech Used:** AWS GuardDuty, Azure Sentinel, AI Anomaly Detection.
      `,
    },
    {
      title: "Serverless Architecture for E-commerce",
      industry: "E-commerce",
      category: "Serverless Computing",
      icon: <FaCogs size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Enabled high-speed order processing with a serverless cloud setup.",
      details: `
        A large e-commerce platform faced challenges with handling peak traffic.
        Our serverless architecture enabled elastic scaling, improving order processing speed.

        🔹 **Results:**
        - 99.99% uptime during peak sales.
        - 70% reduction in infrastructure costs.
        - 5x faster order processing.

        🔹 **Tech Used:** AWS Lambda, DynamoDB, API Gateway.
      `,
    },
    {
      title: "Cloud Disaster Recovery for Financial Services",
      industry: "Banking",
      category: "Cloud Resilience",
      icon: <FaSync size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Achieved 99.999% uptime with cloud-based disaster recovery solutions.",
      details: `
        A banking institution needed a robust disaster recovery plan.
        Our cloud resilience solution ensured real-time data replication and auto-failover mechanisms.

        🔹 **Results:**
        - 99.999% uptime achieved.
        - Zero data loss in failover tests.
        - 50% faster disaster recovery execution.

        🔹 **Tech Used:** Google Cloud DRaaS, AWS S3 Cross-Region Replication.
      `,
    },
    {
      title: "Hybrid Cloud Migration for a Retail Giant",
      industry: "Retail",
      category: "Hybrid Cloud",
      icon: <FaChartLine size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Seamlessly migrated on-premises workloads to a hybrid cloud model.",
      details: `
        A global retailer needed a scalable hybrid cloud strategy.
        Our solution enabled seamless integration between public and private clouds, optimizing costs.

        🔹 **Results:**
        - 40% reduction in IT costs.
        - 60% faster application deployment.
        - Improved scalability by 3x.

        🔹 **Tech Used:** Microsoft Azure Arc, AWS Hybrid Cloud, Kubernetes.
      `,
    },
  ];

  const projectCaseStudies = [
    {
      title: "Optimizer IoT for Manufacturing Machines",
      industry: "Retail",
      category: "IoT",
      icon: <FaCloud size={24} />,
      image: "https://via.placeholder.com/400x250",
      description: "Reduced cloud costs by 45% using AI-driven workload automation.",
      details: ``,
    },
  ];

  const mergedCaseStudies = [...caseStudies, ...projectCaseStudies];
  return (
    <div className="bg-dark text-white container-fluid">
      {/* Header Section */}
      <SectionWrapper className="text-center">
        <Grid container spacing={2} className="container containerStyle" data-aos="fade-up">
          <Grid size={{ sm: 1, md: 5 }} className="columnStyle">
          <img
            src="/images/cloud_compatability.jpg"
            alt="Cloud computing visualization"
            className="img-fluid rounded shadow-sm mt-4"
          />
          </Grid>
          <Grid size={{ sm: 1, md: 7 }} className="d-flex flex-column justify-content-center">
            <p></p>
            <h1 className="display-4 custom-heading fw-bold mb-3">Cloud Capability: Accelerate Innovation</h1>
            <p className="lead">
              Harness the power of the cloud to drive agility, scalability, and cost efficiency. Empower your business for the future with our tailored cloud solutions.
            </p>
         </Grid>
        </Grid>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <div className="container">
          <h2 className="h2 fw-bold border-bottom border-secondary pb-2 mb-4">Why Choose Cloud Capability?</h2>
          <div className="row g-4">
            {[
              {
                title: "90% Faster Deployment",
                description: "Deploy applications and services up to 90% faster with cloud-native solutions.",
                image: "/assets/images/agility.jpg",
              },
              {
                title: "40% Lower IT Costs",
                description: "Optimize infrastructure and reduce operational costs by up to 40%.",
                image: "/assets/images/cost.jpg",
              },
              {
                title: "99.99% Data Security",
                description: "Benefit from enterprise-grade security and compliance standards.",
                image: "/assets/images/security.jpg",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                {/* <img src={item.image} alt={item.title} className="img-fluid rounded mb-3" /> */}
                <p className=""></p>
                <h5 className="fw-bold short_line">{item.title}</h5>
                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <Services servicesData = {servicesData} />

      <CaseStudyModal caseStudies={mergedCaseStudies} />

      <PartnersSection />
      {/* Call to Action */}
      {/* <section className="text-center py-5 text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Start Your Cloud Journey Today</h2>
          <p className="lead text-light mb-4">
            Join the ranks of innovative businesses that have transformed their operations with our cloud solutions.
            Contact us to build a strategy that works for you.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default CloudCapability;
