"use client";
import { useRef } from 'react';
import HomePage from './(components)/Pages/HomePage';
import AboutPage from './(components)/Pages/AboutPage';
import SkillsPage from './(components)/Pages/SkillsPage';
import ProjectsPage from './(components)/Pages/ProjectsPage';
import DynamicIsland from './(components)/DynamicIsland';
import Footer from './(components)/Footer';
import QuotePage from './(components)/Pages/QuotePage';

export default function MainHomePage() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <DynamicIsland
        scrollTo={scrollTo}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef }}
      />
      <div ref={homeRef}><HomePage /></div>
      <div ref={aboutRef}>
        <AboutPage scrollTo={scrollTo}
          refs={{ skillsRef }} />
      </div>
      <div ref={skillsRef}><SkillsPage /></div>
      <div ref={projectsRef}><ProjectsPage /></div>
      <div><QuotePage/></div>
      <Footer />
    </>
  );
}