import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import ScrollToTop from '../components/ScrollToTop';
import LoadingScreen from '../components/LoadingScreen';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Helmet>
        <title>Kalaipriya R | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Kalaipriya R, a Full Stack Developer passionate about building modern web applications and solving real-world problems." />
        <meta name="theme-color" content="#020617" />
      </Helmet>
      <LoadingScreen isLoading={loading} />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
