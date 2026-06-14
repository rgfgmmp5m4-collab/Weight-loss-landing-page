export type LoanType = 'personal' | 'business' | 'mortgage';

export interface FunnelData {
  loanType: LoanType | null;
  [key: string]: any;
}

export interface Step {
  id: string;
  question: string;
  type: 'select' | 'input' | 'slider' | 'contact';
  options?: string[];
  placeholder?: string;
  inputType?: string;
  min?: number;
  max?: number;
  step?: number;
}
