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
import type { Project, Post } from '@/lib/types';
import WelcomePopup from '@/components/welcome-popup';
import Feedback from '@/components/sections/feedback';
import Posts from '@/components/sections/posts';

export default async function Home() {
  const companyDescription = `Payvia is a software company specializing in custom software development, Android & iOS apps, and web applications using modern tools like PHP, Python, Django, React, Vite, DevOps, and advanced database solutions. Payvia excels at enterprise software and innovative tech projects.`;
  
  const staticProjects: Project[] = [
    {
      title: 'MBLogistics - Enterprise Logistics & CMS Platform',
      description: 'A comprehensive logistics management system and CMS for mblogistics.express, featuring real-time tracking, inventory management, and integrated chat for seamless communication.',
      image: 'https://picsum.photos/600/400?random=1',
      link: 'https://mblogistics.express',
      image_hint: 'logistics truck',
      category: 'Logistics & CMS',
      budget: '3,500,000 MMK'
    },
    {
      title: 'PUE - Point of Sale System',
      description: 'A modern Point of Sale (POS) solution for retail and service businesses, designed to streamline transactions, manage inventory, and track sales performance with an intuitive interface.',
      image: 'https://picsum.photos/600/400?random=5',
      image_hint: 'pos terminal',
      category: 'Business Solutions',
      budget: '2,800,000 MMK'
    },
    {
      title: 'EduPro - Student Management System',
      description: 'An all-in-one teaching software and student management system, complete with course management, grading, and a built-in chat app for enhanced collaboration.',
      image: 'https://picsum.photos/600/400?random=4',
      image_hint: 'education classroom',
      category: 'Business Solutions',
      budget: '4,000,000 MMK'
    },
  ];

  let generatedProjects: Project[] = [];
  try {
    const ideas = await generateProjectIdeas({
      companyDescription,
      numberOfProjects: 10,
    });
    generatedProjects = ideas.map((idea, index) => ({
      ...idea,
      image: `https://picsum.photos/600/400?random=${index + 12}`,
      image_hint: 'software code',
      category: index % 2 === 0 ? 'Business Solutions' : 'Platforms',
      budget: `${((Math.floor(Math.random() * 40) + 10) * 100000).toLocaleString()} MMK`
    }));
  } catch (error) {
    console.error('Failed to generate project ideas:', error);
    // Fallback or error handling
  }

  const allProjects = [...staticProjects, ...generatedProjects];

  const posts: Post[] = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/300/500?random=1',
      title: 'Company News: WhisperX Launch',
      description: 'Check out the launch of our new earn-to-learn platform, whisperx.site!',
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/300/500?random=2',
      title: 'Logix AI Learning Sneak Peek',
      description: 'A quick look at our new AI-powered logic and algorithmics learning platform.',
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/300/500?random=3',
      title: 'Meet the Team',
      description: 'A day in the life at Payvia.',
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/300/500?random=4',
      title: 'Our Latest Project',
      description: 'Behind the scenes of our latest enterprise solution.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <WelcomePopup />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects projects={allProjects} />
        <Posts posts={posts} />
        <BudgetCalculator />
        <Team />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
