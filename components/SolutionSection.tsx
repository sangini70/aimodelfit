import React from 'react';
import { SectionId } from '../types';
import { Layers, User, Image, DollarSign } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <User className="text-gray-900" size={32} />,
      title: "1모델 = 1착용",
      description: "상품마다 가장 잘 어울리는 모델을 매칭하여 실제 착용한 듯한 자연스러운 핏을 구현합니다."
    },
    {
      icon: <Image className="text-gray-900" size={32} />,
      title: "정면 전신 1컷",
      description: "가장 활용도가 높은 정면 전신 컷을 최적화된 퀄리티로 제공합니다."
    },
    {
      icon: <Layers className="text-gray-900" size={32} />,
      title: "재촬영 없음",
      description: "결과물이 마음에 들지 않아도 다시 스튜디오를 잡을 필요가 없습니다. 클릭 한 번이면 충분합니다."
    },
    {
      icon: <DollarSign className="text-gray-900" size={32} />,
      title: "비용 예측 가능",
      description: "추가 비용이나 숨겨진 비용 없이, 정해진 단가로 예산을 완벽하게 통제할 수 있습니다."
    }
  ];

  return (
    <section id={SectionId.SOLUTION} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">필요한 한 컷만 제작합니다</h2>
          <p className="text-gray-600">복잡한 과정 없이 결과물에만 집중하세요.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="mb-6 p-3 bg-gray-50 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};