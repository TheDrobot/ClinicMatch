import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum UserRole {
  CLINIC_MANAGER = 'CLINIC_MANAGER',
  DENTAL_PRACTICE = 'DENTAL_PRACTICE'
}