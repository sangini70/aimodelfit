import React from 'react';
import { SectionId } from '../types';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id={SectionId.PROBLEM} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 매번 촬영을 하시나요?</h2>
          <p className="text-gray-600 text-lg">
            한 번의 촬영을 위해 소요되는 막대한 비용과 리소스,<br />
            이제는 바뀔 때가 되었습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Traditional Method */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-500" size={28} />
              <h3 className="text-xl font-bold text-gray-900">기존 촬영 방식</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">모델 하루 대여 비용 (평균 50~100만원)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">스튜디오 렌탈 및 장비 비용</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">전문 포토그래퍼 섭외 비용</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">수백 컷 촬영 후 실제 사용은 단 5컷</span>
              </li>
            </ul>
          </div>

          {/* AI ModelFit Method */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <CheckCircle2 className="text-green-400" size={28} />
              <h3 className="text-xl font-bold">AI ModelFit 구조</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-300">모델 섭외 불필요 (비용 0원)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-300">스튜디오 방문 없음</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" />
                <span className="text-gray-300">촬영 기사 및 장비 불필요</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 flex-shrink-0" />
                <span className="text-white font-bold">필요한 컷만 제작하여 비용 90% 절감</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-800 rounded-lg text-sm font-medium">
            <AlertCircle size={16} />
            <span>재촬영 스트레스에서 완전히 해방되세요</span>
          </div>
        </div>
      </div>
    </section>
  );
};