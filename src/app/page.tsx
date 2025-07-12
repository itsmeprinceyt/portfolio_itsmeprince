"use client";
import { useRef, useEffect, useState } from 'react';
import HomePage from './(components)/Pages/HomePage';
import AboutPage from './(components)/Pages/AboutPage';
import SkillsPage from './(components)/Pages/SkillsPage';
import ProjectsPage from './(components)/Pages/ProjectsPage';
import DynamicIsland from './(components)/DynamicIsland';
import type Section from '../types/Pages.type.ts';
import Footer from './(components)/Footer';

export default function MainHomePage() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<Section>('home');

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionMap: Record<Section, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection: Section | null = null;

        entries.forEach((entry) => {
          for (const key in sectionMap) {
            if (
              entry.target === sectionMap[key as Section].current &&
              entry.intersectionRatio > maxRatio
            ) {
              maxRatio = entry.intersectionRatio;
              mostVisibleSection = key as Section;
            }
          }
        });

        if (mostVisibleSection && mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    Object.values(sectionMap).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionMap).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [activeSection]);

  return (
    <>
      <DynamicIsland
        scrollTo={scrollTo}
        refs={{ homeRef, aboutRef, skillsRef, projectsRef }}
        activeSection={activeSection}
      />
      <div ref={homeRef}><HomePage /></div>
      <div ref={aboutRef}>
        <AboutPage scrollTo={scrollTo}
          refs={{ skillsRef }} />
      </div>
      <div ref={skillsRef}><SkillsPage /></div>
      <div ref={projectsRef}><ProjectsPage /></div>
      <Footer/>
    </>
  );
}