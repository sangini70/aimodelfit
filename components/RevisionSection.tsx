import React from 'react';
import { SectionId } from '../types';
import { RefreshCcw, Clock, FileWarning } from 'lucide-react';

export const RevisionSection: React.FC = () => {
  return (
    <section id={SectionId.REVISION} className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">수정 및 정책 안내</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <RefreshCcw className="mb-4 text-gray-700" size={24} />
            <h3 className="font-bold text-lg mb-2">월 총 수정 횟수 제한</h3>
            <p className="text-gray-600 text-sm">
              플랜별로 월 제공되는 무료 수정 횟수가 제한되어 있습니다. 신중한 요청 부탁드립니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <FileWarning className="mb-4 text-gray-700" size={24} />
            <h3 className="font-bold text-lg mb-2">포즈 변경은 신규 제작</h3>
            <p className="text-gray-600 text-sm">
              이미 생성된 이미지의 포즈를 완전히 바꾸는 경우, 수정이 아닌 신규 제작 1건으로 차감됩니다.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <Clock className="mb-4 text-gray-700" size={24} />
            <h3 className="font-bold text-lg mb-2">납품 후 5일 이내</h3>
            <p className="text-gray-600 text-sm">
              이미지 납품일로부터 5일 이내에 수정 요청을 주셔야 하며, 이후에는 접수가 불가합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};