import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChartBar, FaSearch, FaCogs, FaUsers, FaExchangeAlt, FaFileExcel, FaEye, FaProjectDiagram, FaCertificate, FaSync, FaCode, FaShieldAlt, FaRobot, FaDatabase, FaTasks, FaUserCheck, FaLightbulb, FaBrain, FaCog, FaHandshake, FaComments, FaChartLine, FaHeart, FaRocket, FaBolt, FaGraduationCap, FaBalanceScale, FaHandsHelping, FaPlay, FaMicrophone, FaBuilding, FaChild, FaChalkboardTeacher, FaCrown, FaTools, FaTrophy, FaDollarSign, FaPuzzlePiece, FaBookOpen, FaGamepad, FaRibbon } from 'react-icons/fa';

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const SpecialSection = styled.section`
  background: linear-gradient(135deg, #f0bc5e 0%, #e8a94a 100%);
  padding: 60px 20px;
  text-align: center;
`;

const SpecialTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #253457;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpecialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SpecialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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

const BehavioralTraining = () => {
  useEffect(() => {
    document.title = "Learnedge - Behavioral Training";
    window.scrollTo(0, 0);
  }, []);

  const coreTrainings = [
    { icon: <FaUsers />, title: "Team Building", description: "Foster collaboration and strengthen team dynamics for enhanced productivity" },
    { icon: <FaChartLine />, title: "Sales Training", description: "Develop effective sales strategies and techniques to boost revenue" },
    { icon: <FaRocket />, title: "Confidence Building", description: "Build self-assurance and overcome barriers to personal and professional growth" },
    { icon: <FaComments />, title: "Interpersonal Skill Development", description: "Enhance communication and relationship-building capabilities" },
    { icon: <FaDollarSign />, title: "Personal Economy Maintenance", description: "Financial literacy and personal wealth management strategies" },
    { icon: <FaHeart />, title: "Harmony Creation", description: "Create peaceful and productive work environments" },
    { icon: <FaLightbulb />, title: "Triggering Creativity", description: "Unlock creative potential and innovative thinking" },
    { icon: <FaTrophy />, title: "Performance Enhancement", description: "Optimize individual and team performance metrics" },
    { icon: <FaBolt />, title: "Energy Building", description: "Break monotony and revitalize workplace enthusiasm" },
    { icon: <FaBrain />, title: "Secret Of Speed Learning", description: "Master any skill at the fastest pace using technology" },
    { icon: <FaGraduationCap />, title: "Employability Skill", description: "Develop skills essential for career success and growth" },
    { icon: <FaBalanceScale />, title: "Mindset Matters", description: "Goal setting and conquering limiting beliefs" },
    { icon: <FaHandsHelping />, title: "Relationship Enhancement", description: "Improve relationships at work and in life" },
    { icon: <FaTools />, title: "Habit Formation", description: "Build positive habits for sustained success" },
    { icon: <FaPlay />, title: "Presentation Skills", description: "Master the art of impactful presentations" },
    { icon: <FaEye />, title: "Emotional Intelligence", description: "Develop emotional awareness and management skills" }
  ];

  const advancedSkills = [
    { icon: <FaRibbon />, title: "New Age Skills", description: "Future-ready skills for the modern workplace" },
    { icon: <FaShieldAlt />, title: "Ownership & Accountability", description: "Take responsibility and drive results" },
    { icon: <FaComments />, title: "Communication", description: "Master effective communication across all levels" },
    { icon: <FaHandshake />, title: "Collaboration", description: "Work effectively in diverse team environments" },
    { icon: <FaPuzzlePiece />, title: "Change Management", description: "Navigate and lead organizational transformations" },
    { icon: <FaHeart />, title: "Customer Focus", description: "Build customer-centric mindset and approaches" },
    { icon: <FaBrain />, title: "Digital Mindset Risk Discipline", description: "Manage digital transformation challenges" }
  ];

  const specialPrograms = [
    { icon: <FaTrophy />, title: "24 Hours To Abundance", description: "Two days intensive program with guaranteed results" },
    { icon: <FaBuilding />, title: "Business Launchpad", description: "For Directors & Project Managers" },
    { icon: <FaChartLine />, title: "Business Scaleup Coaching", description: "Strategic growth and scaling methodologies" },
    { icon: <FaDollarSign />, title: "Profit Management System", description: "Optimize business profitability" },
    { icon: <FaChild />, title: "Child Raising System", description: "Comprehensive parenting and child development" },
    { icon: <FaChalkboardTeacher />, title: "Train The Trainers", description: "Develop training and facilitation skills" },
    { icon: <FaCrown />, title: "Leadership", description: "Advanced leadership development programs" },
    { icon: <FaMicrophone />, title: "Public Speaking", description: "Master the art of public speaking" },
    { icon: <FaGamepad />, title: "Game-Based Learning", description: "Interactive and engaging learning experiences" }
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Behavioral Training Programs</HeroTitle>
        <HeroSubtitle>
          Transform your workforce with comprehensive behavioral training programs designed to enhance personal and professional effectiveness, leadership capabilities, and organizational culture.
        </HeroSubtitle>
      </HeroSection>

      <TrainingsSection>
        <SectionTitle>Core Behavioral Programs</SectionTitle>
        <TrainingsGrid>
          {coreTrainings.map((training, index) => (
            <TrainingCard key={index}>
              <CardIcon>{training.icon}</CardIcon>
              <CardTitle>{training.title}</CardTitle>
              <CardDescription>{training.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </TrainingsSection>

      <TrainingsSection style={{ backgroundColor: 'white' }}>
        <SectionTitle>Advanced Skills Development</SectionTitle>
        <TrainingsGrid>
          {advancedSkills.map((skill, index) => (
            <TrainingCard key={index}>
              <CardIcon>{skill.icon}</CardIcon>
              <CardTitle>{skill.title}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </TrainingCard>
          ))}
        </TrainingsGrid>
      </TrainingsSection>

      <SpecialSection>
        <SpecialTitle>Specialized Programs</SpecialTitle>
        <SpecialGrid>
          {specialPrograms.map((program, index) => (
            <SpecialCard key={index}>
              <CardIcon>{program.icon}</CardIcon>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </SpecialCard>
          ))}
        </SpecialGrid>
      </SpecialSection>

      <ContactSection>
        <h3>Ready to Transform Your Team?</h3>
        <p>
          Contact us for customized behavioral training solutions<br/>
          Email: <span className="contact-link">manoj@learnedges.com</span> | 
          Call: <span className="contact-link">+91 77383 33543</span>
        </p>
      </ContactSection>
    </div>
  );
};

export default BehavioralTraining;