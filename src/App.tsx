import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
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

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add('is-visible'), delay);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Header activeSection={activeSection} onScrollTo={handleScrollTo} />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
