import React, { useState } from 'react';
import { LoanType, FunnelData, Step } from './types';

const personalSteps: Step[] = [
  { id: 'loanPurpose', question: 'What do you need the funds for?', type: 'select', options: ['Debt Consolidation', 'Home Improvement', 'Major Purchase', 'Emergency Expense', 'Other'] },
  { id: 'loanAmount', question: 'How much would you like to borrow?', type: 'input', inputType: 'number', placeholder: '$1,000 - $50,000' },
  { id: 'creditScore', question: 'Estimate your credit score:', type: 'select', options: ['Excellent (720+)', 'Good (660-719)', 'Fair (600-659)', 'Poor (<600)'] },
  { id: 'employmentStatus', question: 'What is your current employment status?', type: 'select', options: ['Full-time', 'Part-time', 'Self-employed', 'Unemployed', 'Retired'] },
  { id: 'annualIncome', question: 'What is your gross annual income?', type: 'input', inputType: 'number', placeholder: '$' },
  { id: 'contact', question: 'Where should we send your matches?', type: 'contact' },
];

const businessSteps: Step[] = [
  { id: 'timeInBusiness', question: 'How long has your business been operating?', type: 'select', options: ['< 6 months', '6-12 months', '1-2 years', '2+ years'] },
  { id: 'monthlyRevenue', question: 'What is your average monthly revenue?', type: 'select', options: ['<$5k', '$5k-$15k', '$15k-$50k', '$50k+'] },
  { id: 'loanAmount', question: 'How much capital do you need?', type: 'input', inputType: 'number', placeholder: '$5,000 - $500,000+' },
  { id: 'industry', question: 'What industry is your business in?', type: 'select', options: ['Retail', 'Construction', 'Tech', 'Healthcare', 'Other'] },
  { id: 'ownerCreditScore', question: "Estimate the owner's personal credit score:", type: 'select', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { id: 'contact', question: 'Where should we send your matches?', type: 'contact' },
];

const mortgageSteps: Step[] = [
  { id: 'mortgagePurpose', question: 'Are you looking to Buy or Refinance?', type: 'select', options: ['Buy a Home', 'Refinance'] },
  { id: 'propertyType', question: 'Property Type', type: 'select', options: ['Single Family', 'Condo', 'Townhome', 'Multi-family'] },
  { id: 'purchasePrice', question: 'Purchase Price', type: 'input', inputType: 'number', placeholder: '$' },
  { id: 'downPayment', question: 'Down Payment', type: 'input', inputType: 'number', placeholder: '$ or %' },
  { id: 'creditScore', question: 'Estimate your credit score:', type: 'select', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  { id: 'contact', question: 'Where should we send your matches?', type: 'contact' },
];

export const Funnel: React.FC = () => {
  const [loanType, setLoanType] = useState<LoanType | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<FunnelData>({ loanType: null });

  const steps = loanType === 'personal' ? personalSteps : loanType === 'business' ? businessSteps : loanType === 'mortgage' ? mortgageSteps : [];

  const handleLoanTypeSelect = (type: LoanType) => {
    setLoanType(type);
    setData({ ...data, loanType: type });
    setCurrentStep(0);
  };

  const handleNext = (val: any) => {
    const currentStepId = steps[currentStep].id;
    setData({ ...data, [currentStepId]: val });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Final Data:', { ...data, [currentStepId]: val });
      alert('Lead Submitted! (See console for data)');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setLoanType(null);
    }
  };

  if (!loanType) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">How can we help you today?</h2>
        <div className="grid grid-cols-1 gap-4">
          <button onClick={() => handleLoanTypeSelect('personal')} className="border-2 border-gray-200 rounded-lg p-6 text-left hover:border-primary hover:bg-blue-50 transition-all">
            <span className="text-xl font-semibold">Personal Loan</span>
            <p className="text-gray-500 mt-1">Debt consolidation, home improvement, and more.</p>
          </button>
          <button onClick={() => handleLoanTypeSelect('business')} className="border-2 border-gray-200 rounded-lg p-6 text-left hover:border-primary hover:bg-blue-50 transition-all">
            <span className="text-xl font-semibold">Business Loan</span>
            <p className="text-gray-500 mt-1">Working capital, equipment, and expansion.</p>
          </button>
          <button onClick={() => handleLoanTypeSelect('mortgage')} className="border-2 border-gray-200 rounded-lg p-6 text-left hover:border-primary hover:bg-blue-50 transition-all">
            <span className="text-xl font-semibold">Mortgage</span>
            <p className="text-gray-500 mt-1">Purchase or refinance your home.</p>
          </button>
        </div>
      </div>
    );
  }

  const step = steps[currentStep];
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="mb-8">
        <div className="flex justify-between mb-2 text-xs font-medium text-gray-600">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{progress}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-secondary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">{step.question}</h2>
        
        {step.type === 'select' && (
          <div className="grid grid-cols-1 gap-4">
            {step.options?.map(opt => (
              <button 
                key={opt}
                onClick={() => handleNext(opt)}
                className="border-2 border-gray-200 rounded-lg p-4 text-left hover:border-primary hover:bg-blue-50 transition-all font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step.type === 'input' && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const val = (e.currentTarget.elements.namedItem('input') as HTMLInputElement).value;
            if (val) handleNext(val);
          }}>
            <input 
              name="input"
              type={step.inputType || 'text'} 
              placeholder={step.placeholder}
              className="w-full p-4 border-2 border-gray-200 rounded-lg mb-6 focus:border-primary focus:outline-none"
              autoFocus
              required
            />
            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md">
              Continue
            </button>
          </form>
        )}

        {step.type === 'contact' && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const contactData = Object.fromEntries(formData.entries());
            handleNext(contactData);
          }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input name="firstName" placeholder="First Name" className="p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none" required />
              <input name="lastName" placeholder="Last Name" className="p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none" required />
            </div>
            <input name="email" type="email" placeholder="Email Address" className="w-full p-4 border-2 border-gray-200 rounded-lg mb-4 focus:border-primary focus:outline-none" required />
            <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 border-2 border-gray-200 rounded-lg mb-4 focus:border-primary focus:outline-none" required />
            <input name="zip" placeholder="Zip Code" className="w-full p-4 border-2 border-gray-200 rounded-lg mb-6 focus:border-primary focus:outline-none" required />
            
            <p className="text-xs text-gray-500 mb-6">
              By clicking "See My Matches", I agree to the Privacy Policy and authorize CrediMatch to share my info with partners.
            </p>
            
            <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-md text-xl">
              See My Matches
            </button>
          </form>
        )}

        {currentStep > -1 && (
          <div className="mt-8">
            <button onClick={handleBack} className="text-gray-500 font-medium hover:text-gray-700 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
