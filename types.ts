// Added React import to provide access to the React namespace for ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
}

export interface KPI {
  label: string;
  value: string;
  suffix?: string;
}