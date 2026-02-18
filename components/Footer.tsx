import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">AI ModelFit</h4>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              우리는 AI를 파는 것이 아니라 촬영을 대체하는 구조를 제공합니다.<br />
              비효율적인 촬영 프로세스를 혁신하여 패션 커머스의 성장을 돕습니다.
            </p>
          </div>
          <div className="text-sm">
            <h5 className="font-bold text-gray-900 mb-3">Service</h5>
            <ul className="space-y-2">
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>사업자정보확인</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">
            본 서비스는 촬영 대체용 이미지 제작 솔루션이며, 실제 촬영을 완전히 대체하지 않을 수 있습니다.
            결과물은 AI 기술을 기반으로 생성되며, 원본 상품의 디테일과 100% 일치하지 않을 수 있음을 사전에 고지합니다.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} AI ModelFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};