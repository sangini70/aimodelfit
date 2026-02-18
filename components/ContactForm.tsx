import React, { useState } from 'react';
import { SectionId, FormData } from '../types';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">무료 테스트 신청</h2>
            <p className="text-gray-600">
              담당자가 확인 후 24시간 이내에 연락드립니다.<br />
              <span className="text-sm text-gray-400">개인정보는 상담 목적으로만 사용됩니다.</span>
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h3>
              <p className="text-gray-600">
                빠른 시일 내에 기재해주신 연락처로 안내 드리겠습니다.<br />
                AI ModelFit에 관심을 가져주셔서 감사합니다.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-gray-500 underline hover:text-gray-800"
              >
                다시 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" action="#">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">업체명</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="쇼핑몰 또는 브랜드명"
                />
              </div>
              
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">담당자명</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="010-0000-0000"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">사이트 주소 (선택)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="https://myshop.com"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
                >
                  무료 테스트 신청하기
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};