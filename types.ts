import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureCardProps {
  title: string;
  image: string;
  className?: string;
  delay?: number;
}

export interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}
