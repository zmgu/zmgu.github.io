import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import { navigation } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState(navigation[0].label);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navigation.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(label); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Header activeSection={activeSection} onScrollTo={handleScrollTo} />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
