import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { PricingSection } from './components/PricingSection';
import { RevisionSection } from './components/RevisionSection';
import { BetaSection } from './components/BetaSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <RevisionSection />
        <BetaSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;