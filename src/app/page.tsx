import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Team from '@/components/sections/team';
import Contact from '@/components/sections/contact';
import BudgetCalculator from '@/components/sections/budget-calculator';
import { generateProjectIdeas } from '@/ai/flows/generate-project-ideas';
import type { Project } from '@/lib/types';

export default async function Home() {
  const companyDescription = `Payvia Solutions is a software company specializing in custom software development, Android & iOS apps, and web applications using modern tools like PHP, Python, Django, React, Vite, DevOps, and advanced database solutions. Payvia excels at enterprise software and innovative tech projects.`;
  
  const staticProjects: Project[] = [
    {
      title: 'MBLogistics - Enterprise Logistics Platform',
      description: 'A comprehensive logistics management system for mblogistics.express, featuring real-time tracking, inventory management, and integrated chat for seamless communication.',
      image: 'https://picsum.photos/600/400?random=1',
      link: 'https://mblogistics.express',
      image_hint: 'logistics truck',
    },
    {
      title: 'MBLogistics - Customer Portal',
      description: 'A user-friendly portal for customers of mblogistics.express to track shipments, manage orders, and communicate with support.',
      image: 'https://picsum.photos/600/400?random=2',
      link: 'https://customer.mblogistics.express',
      image_hint: 'customer service',
    },
    {
      title: 'MBLogistics - Point of Sale (POS)',
      description: 'A custom POS solution designed for the logistics industry, streamlining transactions and integrating with the main logistics platform.',
      image: 'https://picsum.photos/600/400?random=3',
      image_hint: 'pos terminal',
    },
    {
      title: 'EduPro - Student Management System',
      description: 'An all-in-one teaching software and student management system, complete with course management, grading, and a built-in chat app for enhanced collaboration.',
      image: 'https://picsum.photos/600/400?random=4',
      image_hint: 'education classroom',
    },
    {
      title: 'ConnectSphere - Real-time Chat App',
      description: 'A standalone, scalable real-time communication solution for businesses and communities, featuring end-to-end encryption and rich media support.',
      image: 'https://picsum.photos/600/400?random=5',
      image_hint: 'chat bubbles',
    },
    {
      title: 'WhisperX - Earn to Learn Platform',
      description: 'A gamified learning platform where users can earn rewards by completing quizzes and challenges. Features a unique prompt marketplace. Deployed at whisperx.site.',
      image: 'https://picsum.photos/600/400?random=6',
      link: 'https://whisperx.site',
      image_hint: 'learning online',
    },
  ];

  let generatedProjects: Project[] = [];
  try {
    const ideas = await generateProjectIdeas({
      companyDescription,
      numberOfProjects: 20,
    });
    generatedProjects = ideas.map((idea, index) => ({
      ...idea,
      image: `https://picsum.photos/600/400?random=${index + 7}`,
      image_hint: 'software code',
    }));
  } catch (error) {
    console.error('Failed to generate project ideas:', error);
    // Fallback or error handling
  }

  const allProjects = [...staticProjects, ...generatedProjects];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects projects={allProjects} />
        <BudgetCalculator />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
