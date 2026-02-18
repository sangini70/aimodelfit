export interface PricingPlan {
  name: string;
  price: string;
  count: string;
  features: string[];
  isPopular?: boolean;
}

export interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
}

export enum SectionId {
  HERO = 'hero',
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  PRICING = 'pricing',
  REVISION = 'revision',
  BETA = 'beta',
  CONTACT = 'contact'
}