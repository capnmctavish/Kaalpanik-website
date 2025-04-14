import React from "react";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material";
import PartnersSection from "../../components/Partners";
import Services from "../../components/Services";
import CaseStudyModal from "../../components/CaseStudyModal";
import { FaPenNib, FaRobot, FaCode, FaImage, FaFlask } from "react-icons/fa";

const SectionWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: "3rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0",
  },
}));

const GenAI = () => {
  const services = [
    {
      title: 'Text Generation',
      description: 'Create high-quality, contextually relevant content using AI.',
      details: 'Our text generation models can assist with blog writing, marketing copy, automated messaging, and creative storytelling, ensuring coherence and engagement.'
    },
    {
      title: 'Image Generation',
      description: 'Generate stunning visuals with AI-driven creativity.',
      details: 'From concept art to product designs, our generative AI tools produce high-resolution, unique images tailored to your specific needs.'
    },
    {
      title: 'Code Generation',
      description: 'Accelerate development with AI-powered code completion and generation.',
      details: 'Our models can generate code snippets, boilerplate structures, and even full modules, enhancing productivity for developers.'
    },
    {
      title: 'Audio Generation',
      description: 'Produce high-quality audio content through AI technologies.',
      details: 'Leverage AI to create voice-overs, music compositions, and sound effects, opening new possibilities for audio content creators.'
    }
  ];

  const caseStudies = [
    {
      title: "AI-Generated Marketing Content",
      industry: "Marketing & Advertising",
      category: "AI Content Generation",
      icon: <FaPenNib size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Increased engagement by 35% using AI-generated blog and ad content.",
      details: `
        A digital marketing agency implemented AI-powered content generation for blogs, ads, and email campaigns.
  
        🔹 **Results:**
        - 35% increase in user engagement.
        - 50% reduction in content creation costs.
        - 2x faster content turnaround time.
  
        🔹 **Tech Used:** GPT-based Content Writing, NLP for Ad Copy, AI-powered Email Marketing.
      `,
    },
    {
      title: "AI Chatbot for Customer Support",
      industry: "Customer Service",
      category: "AI-Powered Chatbots",
      icon: <FaRobot size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Automated 70% of customer queries with an AI-powered chatbot.",
      details: `
        An e-commerce company deployed a Gen AI chatbot to handle customer inquiries.
  
        🔹 **Results:**
        - 70% reduction in customer support workload.
        - 24/7 automated customer assistance.
        - 60% improvement in response time.
  
        🔹 **Tech Used:** AI NLP Chatbots, Sentiment Analysis, Automated Customer Support AI.
      `,
    },
    {
      title: "AI-Assisted Code Generation",
      industry: "Software Development",
      category: "AI for Developers",
      icon: <FaCode size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Accelerated software development by 40% using AI-assisted coding tools.",
      details: `
        A software company integrated AI-driven code suggestions into their development workflow.
  
        🔹 **Results:**
        - 40% faster coding and debugging.
        - 30% reduction in software defects.
        - 50% automation in repetitive coding tasks.
  
        🔹 **Tech Used:** AI Code Completion, GPT-Based Programming Assistance, AI Pair Programming.
      `,
    },
    {
      title: "AI-Generated Images & Videos",
      industry: "Media & Entertainment",
      category: "AI-Powered Image Synthesis",
      icon: <FaImage size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Reduced content production time by 60% using AI-generated images and videos.",
      details: `
        A media production company used Gen AI for generating images, video effects, and 3D assets.
  
        🔹 **Results:**
        - 60% faster media production.
        - 70% reduction in manual editing workload.
        - 90% improvement in creative variation speed.
  
        🔹 **Tech Used:** AI Image & Video Generation, Deep Learning for Media, GAN-Based Content Synthesis.
      `,
    },
    {
      title: "AI-Driven Drug Discovery",
      industry: "Healthcare & Pharmaceuticals",
      category: "AI for Drug Development",
      icon: <FaFlask size={24} />,
      image: "https://via.placeholder.com/600x300",
      description: "Accelerated drug discovery by 50% using AI-driven molecule synthesis.",
      details: `
        A biotech firm leveraged Generative AI to design and test new drug molecules.
  
        🔹 **Results:**
        - 50% reduction in drug development time.
        - 80% more efficient compound screening.
        - Identified 5 potential drug candidates in months instead of years.
  
        🔹 **Tech Used:** AI Drug Synthesis, Generative Molecular Design, AI in Biopharmaceutical Research.
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
              src="/images/generative_AI.avif"
              alt="Cloud computing visualization"
              className="img-fluid rounded shadow-sm mt-4"
            />
          </Grid>
          <Grid size={{ sm: 1, md: 7 }} className="columnStyle">
            <p></p>
            <h1 className="display-4 custom-heading fw-bold mb-3">
              Generative AI Services: Unlocking the Power of Creativity
            </h1>
            <p className="lead">
              Transform your business with Generative AI solutions that create, innovate, and elevate customer experiences. 
              From content generation to personalized interactions, the possibilities are endless.
            </p>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Why Choose Generative AI */}
      <SectionWrapper>
        <div className="container">
          <h2 className="h2 fw-bold border-bottom border-secondary pb-2 mb-4">
            Why Choose Generative AI?
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold short_line">90% Faster Content Creation</h5>
              <p>Generate high-quality content instantly, enhancing productivity and creativity.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">70% Cost Reduction</h5>
              <p>Automate creative tasks, reducing operational expenses significantly.</p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold short_line">80% Enhanced Creativity</h5>
              <p>Empower innovation with AI-driven ideation and design generation.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <Services servicesData = {services} />

      <CaseStudyModal caseStudies={caseStudies} />

      <PartnersSection />

      {/* Call to Action */}
      {/* <section className="text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Get Started with Generative AI</h2>
          <p className="lead mb-4">
            Experience the future of AI-powered creativity. Let us help you design solutions that inspire, innovate, 
            and drive results for your business.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default GenAI;