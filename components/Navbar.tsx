import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
          <span className="text-xl font-bold tracking-tight text-gray-900">AI ModelFit</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection(SectionId.PROBLEM)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">문제 인식</button>
          <button onClick={() => scrollToSection(SectionId.SOLUTION)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">솔루션</button>
          <button onClick={() => scrollToSection(SectionId.PRICING)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">가격 정책</button>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            무료 테스트 신청
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-lg">
          <button onClick={() => scrollToSection(SectionId.PROBLEM)} className="text-left text-sm font-medium text-gray-600">문제 인식</button>
          <button onClick={() => scrollToSection(SectionId.SOLUTION)} className="text-left text-sm font-medium text-gray-600">솔루션</button>
          <button onClick={() => scrollToSection(SectionId.PRICING)} className="text-left text-sm font-medium text-gray-600">가격 정책</button>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="w-full py-3 bg-black text-white text-sm font-medium rounded-lg text-center"
          >
            무료 테스트 신청
          </button>
        </div>
      )}
    </nav>
  );
};