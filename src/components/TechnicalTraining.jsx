import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChartBar, FaSearch, FaCogs, FaUsers, FaExchangeAlt, FaFileExcel, FaEye, FaProjectDiagram, FaCertificate, FaSync, FaCode, FaShieldAlt, FaRobot, FaDatabase, FaTasks, FaUserCheck, FaMaster, FaLightbulb, FaBrain, FaGears, FaCog } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #253457 0%, #1a2642 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #f0bc5e;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TrainingsSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #253457;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TrainingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
`;

const TrainingCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 4px solid #f0bc5e;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #f0bc5e;
  margin-bottom: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #253457;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  text-align: center;
  font-size: 0.95rem;
`;

const CategorySection = styled.section`
  padding: 60px 20px;
  background: ${props => props.bgColor || 'white'};
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #f0bc5e 0%, #e8a94a 100%);
  border-radius: 12px;
  padding: 30px;
  margin: 30px auto;
  max-width: 800px;
  text-align: center;
  color: #253457;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 40px 20px;
  background: white;

  h3 {
    font-size: 24px;
    color: #253457;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #333;
  }

  .contact-link {
    color: #f0bc5e;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-link:hover {
    text-decoration: underline;
  }
`;

const TechnicalTraining = () => {
  useEffect(() => {
    document.title = "Learnedge - Technical Training";
    window.scrollTo(0, 0);
  }, []);

  const businessAnalysisPrograms = [
    { icon: <FaChartBar />, title: "Business Analyst Core Concept Model", description: "Comprehensive foundation in business analysis principles and methodologies" },
    { icon: <FaSearch />, title: "Business Analysis", description: "Advanced techniques for analyzing business processes and requirements" },
    { icon: <FaCogs />, title: "P-O Constraint Analysis", description: "Identify and analyze business constraints and optimization opportunities" },
    { icon: <FaUsers />, title: "Stakeholders Solutions", description: "Develop stakeholder-focused solutions and engagement strategies" },
    { icon: <FaExchangeAlt />, title: "Change & Context Environment", description: "Navigate change management in business analysis contexts" },
    { icon: <FaFileExcel />, title: "Business Analytics Using Excel", description: "Leverage Excel for powerful business analytics and reporting" },
    { icon: <FaEye />, title: "Satisfying Context Needs", description: "Meet contextual requirements as a Business Analyst" },
    { icon: <FaProjectDiagram />, title: "Visual Modelling", description: "Create effective visual models for business analysis" }
  ];

  const certificationPrograms = [
    { icon: <FaCertificate />, title: "CCBA Certification Prep", description: "Comprehensive preparation for Certification of Capability in Business Analysis" },
    { icon: <FaSync />, title: "AGILE / SCRUM", description: "Master agile methodologies and scrum frameworks" },
    { icon: <FaCode />, title: "BA / AGILE / SCRUM", description: "Integrated approach to business analysis with agile practices" },
    { icon: <FaShieldAlt />, title: "SAFe", description: "Scaled Agile Framework for enterprise-level implementations" },
    { icon: <FaUserCheck />, title: "Product Ownership", description: "Product management and ownership best practices" },
    { icon: <FaTasks />, title: "Project Management", description: "Comprehensive project management methodologies and tools" }
  ];

  const emergingTechPrograms = [
    { icon: <FaRobot />, title: "GPT / Prompt Engineering", description: "Harness AI capabilities with advanced prompt engineering techniques" },
    { icon: <FaDatabase />, title: "Data Analysis with AI", description: "Excel-based data analysis enhanced with AI engineering" },
    { icon: <FaChartBar />, title: "Data Analytics for Excel", description: "Advanced Excel analytics for data-driven decision making" },
    { icon: <FaBrain />, title: "Prompt Engineering", description: "Master the art of AI prompt creation and optimization" }
  ];

  const advancedRoles = [
    { icon: <FaCog />, title: "AGILE Coach", description: "Lead agile transformations and coach teams effectively" },
    { icon: <FaUserCheck />, title: "Scrum Master", description: "Facilitate scrum processes and remove team impediments" }
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Technical Training Programs</HeroTitle>
        <HeroSubtitle>
          Advance your technical capabilities with cutting-edge training programs in business analysis, agile methodologies, data analytics, and emerging technologies including AI and prompt engineering.
        </HeroSubtitle>
      </HeroSection>

      <TrainingsSection>
        <SectionTitle>Business Analysis Programs</SectionTitle>
        <TrainingsGrid>
          {businessAnalysisPrograms.map((program, index) => (
            <TrainingCard key={index}>
              <CardIcon>{program.icon}</CardIcon>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </TrainingsSection>

      <CategorySection bgColor="#f9f9f9">
        <SectionTitle>Certification & Framework Programs</SectionTitle>
        <TrainingsGrid>
          {certificationPrograms.map((program, index) => (
            <TrainingCard key={index}>
              <CardIcon>{program.icon}</CardIcon>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </CategorySection>

      <CategorySection bgColor="white">
        <SectionTitle>Emerging Technologies</SectionTitle>
        <HighlightBox>
          <h3>🚀 AI-Powered Training Programs</h3>
          <p>Stay ahead of the curve with our cutting-edge AI and data analytics training programs, designed for the future of work.</p>
        </HighlightBox>
        <TrainingsGrid>
          {emergingTechPrograms.map((program, index) => (
            <TrainingCard key={index}>
              <CardIcon>{program.icon}</CardIcon>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </CategorySection>

      <CategorySection bgColor="#f9f9f9">
        <SectionTitle>Advanced Leadership Roles</SectionTitle>
        <TrainingsGrid>
          {advancedRoles.map((role, index) => (
            <TrainingCard key={index}>
              <CardIcon>{role.icon}</CardIcon>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </CategorySection>

      <HighlightBox style={{ margin: '60px auto' }}>
        <h3>💡 Customized Training Solutions</h3>
        <p>
          All programs can be tailored to your organization's specific needs. We offer both individual modules and comprehensive training packages designed for startups, businesses, and entrepreneurs.
        </p>
      </HighlightBox>

      <ContactSection>
        <h3>Ready to Upgrade Your Technical Skills?</h3>
        <p>
          Contact us for customized technical training solutions<br/>
          Email: <span className="contact-link">manoj@learnedges.com</span> | 
          Call: <span className="contact-link">+91 77383 33543</span>
        </p>
      </ContactSection>
    </div>
  );
};

export default TechnicalTraining;