import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HERO} className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-gray-500 uppercase bg-white border border-gray-200 rounded-full">
            비효율적인 촬영 프로세스의 종결
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            촬영 없이<br />
            모델 착용샷 제작
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            모델 섭외, 스튜디오 예약, 재촬영의 번거로움 없이<br className="hidden md:block" />
            상품 사진만으로 필요한 한 컷을 완벽하게 제작합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              무료 테스트 신청하기
            </button>
          </div>
          
          <div className="mt-16 flex justify-center opacity-40 animate-bounce">
            <ArrowDown size={24} />
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};