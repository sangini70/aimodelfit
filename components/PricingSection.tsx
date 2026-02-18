import React from 'react';
import { SectionId, PricingPlan } from '../types';
import { Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "베이직",
      price: "89,000원",
      count: "10상품",
      features: [
        "건당 8,900원",
        "월 10개 상품 제작",
        "기본 모델 1명 지정",
        "수정 1회 포함"
      ]
    },
    {
      name: "스탠다드",
      price: "149,000원",
      count: "20상품",
      features: [
        "건당 7,450원",
        "월 20개 상품 제작",
        "다양한 모델 선택 가능",
        "수정 2회 포함",
        "우선 제작 지원"
      ],
      isPopular: true
    },
    {
      name: "프로",
      price: "249,000원",
      count: "40상품",
      features: [
        "건당 6,225원",
        "월 40개 상품 제작",
        "전속 모델 지정 가능",
        "수정 무제한 (단순 보정)",
        "긴급 제작 지원"
      ]
    }
  ];

  return (
    <section id={SectionId.PRICING} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">합리적인 가격 정책</h2>
          <p className="text-gray-600">
            기존 촬영 대비 약 80~90% 비용 절감 효과를 경험하세요.<br />
            <span className="text-xs text-gray-400">* 상황에 따라 절감율은 달라질 수 있습니다.</span>
          </p>
        </div>

        {/* Single Item Pricing */}
        <div className="max-w-md mx-auto mb-16 bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">건별 제작</h3>
          <div className="text-3xl font-bold text-gray-900">1상품 12,000원</div>
          <p className="text-sm text-gray-500 mt-2">소량 제작이 필요하신 분들을 위한 플랜</p>
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.isPopular 
                  ? 'border-black shadow-xl scale-105 z-10 bg-white' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  BEST CHOICE
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <div className="text-sm text-gray-500 font-medium">/ {plan.count}</div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={18} className="text-gray-900 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                  plan.isPopular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};