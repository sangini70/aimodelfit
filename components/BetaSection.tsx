import React from 'react';
import { SectionId } from '../types';
import { Gift } from 'lucide-react';

export const BetaSection: React.FC = () => {
  return (
    <section id={SectionId.BETA} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300 mb-6">
          <Gift size={14} />
          <span>선착순 5곳 한정</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">무료 베타 테스트 진행 중</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          AI ModelFit의 혁신적인 프로세스를 가장 먼저 경험해보세요.<br />
          비용 부담 없이 품질을 검증할 수 있는 기회입니다.
        </p>
        
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold mb-6">베타 참여 조건 및 혜택</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-black rounded-lg">
              <span className="block text-2xl font-bold text-white mb-1">월 5상품</span>
              <span className="text-sm text-gray-400">무료 제작 지원</span>
            </div>
            <div className="p-4 bg-black rounded-lg">
              <span className="block text-2xl font-bold text-white mb-1">동일 모델</span>
              <span className="text-sm text-gray-400">일관된 브랜드 무드 유지</span>
            </div>
            <div className="p-4 bg-black rounded-lg">
              <span className="block text-2xl font-bold text-white mb-1">사례 동의</span>
              <span className="text-sm text-gray-400">포트폴리오 활용 동의 필수</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          지금 신청하기
        </button>
      </div>
    </section>
  );
};