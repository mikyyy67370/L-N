import React from 'react';
import ReactCompareImage from 'react-compare-image';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  aspectRatio?: string; // ex: 'aspect-video' ou 'aspect-square'
}

export default function BeforeAfterSlider({ before, after, altBefore, altAfter, aspectRatio = 'aspect-video' }: BeforeAfterSliderProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto rounded-xl shadow-lg overflow-hidden ${aspectRatio}`}>
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageLabel={altBefore}
        rightImageLabel={altAfter}
        sliderLineWidth={3}
        sliderLineColor="#FFD700"
        handleSize={40}
      />
    </div>
  );
} 