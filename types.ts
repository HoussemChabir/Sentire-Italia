import React from 'react';

export interface Destination {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Package {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}