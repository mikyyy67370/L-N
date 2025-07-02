import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface AnimatedBeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
}

export default function AnimatedBeforeAfterSlider({ before, after, altBefore, altAfter }: AnimatedBeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0.5); // 0 = full before, 1 = full after
  const [dragging, setDragging] = useState(false);

  // Animation d'entrée (petit mouvement de la barre)
  useEffect(() => {
    let anim = true;
    setPosition(0.5);
    setTimeout(() => {
      if (anim) setPosition(0.6);
    }, 600);
    setTimeout(() => {
      if (anim) setPosition(0.5);
    }, 1200);
    return () => { anim = false; };
  }, []);

  // Gestion du drag
  const onDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = (clientX - rect.left) / rect.width;
    x = Math.max(0, Math.min(1, x));
    setPosition(x);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    onDrag(e.clientX);
    window.addEventListener('pointermove', pointerMove);
    window.addEventListener('pointerup', pointerUp);
  };
  const pointerMove = (e: PointerEvent) => onDrag(e.clientX);
  const pointerUp = () => {
    setDragging(false);
    window.removeEventListener('pointermove', pointerMove);
    window.removeEventListener('pointerup', pointerUp);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    onDrag(e.touches[0].clientX);
    window.addEventListener('touchmove', touchMove);
    window.addEventListener('touchend', touchEnd);
  };
  const touchMove = (e: TouchEvent) => onDrag(e.touches[0].clientX);
  const touchEnd = () => {
    setDragging(false);
    window.removeEventListener('touchmove', touchMove);
    window.removeEventListener('touchend', touchEnd);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-white group cursor-ew-resize select-none"
      style={{ touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
    >
      {/* Image après (fond) */}
      <Image
        src={after}
        alt={altAfter || 'après'}
        fill
        className="object-cover object-center"
        draggable={false}
        priority
      />
      {/* Image avant (masquée à droite) */}
      <div
        className="absolute inset-0 z-10"
        style={{ width: `${position * 100}%`, overflow: 'hidden', pointerEvents: 'none' }}
      >
        <Image
          src={before}
          alt={altBefore || 'avant'}
          fill
          className="object-cover object-center"
          draggable={false}
          priority
        />
      </div>
      {/* Barre centrale marron + poignée */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `calc(${position * 100}% - 24px)`, width: '48px' }}
      >
        <div className="relative h-full flex flex-col items-center">
          {/* Barre noire */}
          <div className="w-1.5 h-full bg-black rounded-full shadow-lg" />
          {/* Poignée noire */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-white shadow-xl flex items-center justify-center transition-transform duration-200 ${dragging ? 'scale-110' : 'group-hover:scale-105'}`}
            style={{ cursor: 'grab' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="12" x2="16" y2="12" /><polyline points="12 8 16 12 12 16" /></svg>
          </div>
        </div>
      </div>
      {/* Effet visuel au hover */}
      <div className="absolute inset-0 z-30 pointer-events-none transition-all duration-300 group-hover:ring-4 group-hover:ring-brand-dark-brown/30" />
    </div>
  );
} 