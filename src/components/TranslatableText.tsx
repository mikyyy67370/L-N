'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TranslatableTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function TranslatableText({ 
  text, 
  as: Component = 'span', 
  className = '',
  children 
}: TranslatableTextProps) {
  // On ne fait plus de traduction automatique
  // On affiche simplement le texte original
  return (
    <Component className={className}>
      {text}
      {children}
    </Component>
  );
} 