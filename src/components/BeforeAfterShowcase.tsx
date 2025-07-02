import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterCase {
  before: string;
  after: string;
  title: string;
  service: string;
  altBefore: string;
  altAfter: string;
}

interface BeforeAfterShowcaseProps {
  cases: BeforeAfterCase[];
}

export default function BeforeAfterShowcase({ cases }: BeforeAfterShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const total = cases.length;

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  const currentCase = cases[current];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      <div className="w-full aspect-video rounded-xl shadow-2xl overflow-hidden bg-white mb-6 relative">
        <ReactCompareImage
          leftImage={currentCase.before}
          rightImage={currentCase.after}
          leftImageLabel={currentCase.altBefore}
          rightImageLabel={currentCase.altAfter}
          sliderLineWidth={4}
          sliderLineColor="#FFD700"
          handleSize={48}
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={prev} className="p-3 rounded-full bg-brand-cream hover:bg-brand-gold transition-all border border-brand-gold/30">
          <ChevronLeft className="w-6 h-6 text-brand-dark-brown" />
        </button>
        <div className="text-lg font-bold font-playfair text-brand-dark-brown">
          {currentCase.title} <span className="text-brand-gold font-normal">({currentCase.service})</span>
        </div>
        <button onClick={next} className="p-3 rounded-full bg-brand-cream hover:bg-brand-gold transition-all border border-brand-gold/30">
          <ChevronRight className="w-6 h-6 text-brand-dark-brown" />
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        {cases.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-brand-gold border-brand-gold' : 'bg-brand-cream border-brand-gold/30'}`}
            aria-label={`Voir le cas ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 