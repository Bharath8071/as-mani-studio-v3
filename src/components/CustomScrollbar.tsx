import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring} from 'framer-motion';

export function CustomScrollbar() {
  const scrollProgress = useMotionValue(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Transform scroll progress to thumb position
  const thumbY = useTransform(scrollProgress, (value) => {
    const maxTrackHeight = window.innerHeight - (thumbHeight || 0);
    return value * maxTrackHeight;
  });

  const smoothThumbY = useSpring(thumbY, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });

  // Calculate thumb height based on viewport to page height ratio
  const calculateThumbHeight = () => {
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const ratio = viewportHeight / totalHeight;
    return Math.max(ratio * viewportHeight * 0.6, 24);
  };

  // Handle scroll events
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
    scrollProgress.set(scrolled);
  };

  const handleThumbDrag = (event: MouseEvent) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const trackHeight = window.innerHeight - (thumbHeight|| 0);
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeY = event.clientY - rect.top - (thumbHeight || 0) / 2;
    const clamped = Math.max(0, Math.min(relativeY, trackHeight));
    const scrollTo = (clamped / trackHeight) * docHeight;
    window.scrollTo({ top: scrollTo });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const onMouseMove = (ev: MouseEvent) => handleThumbDrag(ev);
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Update opacity when hovering state changes
  // useEffect(() => {
  //   setThumbOpacity(isHovering ? 1 : 0.6);
  // }, [isHovering]);

  useEffect(() => {
    // Calculate initial thumb height
    setThumbHeight(calculateThumbHeight());
    setPageHeight(document.documentElement.scrollHeight);

    const handleResize = () => {
      setThumbHeight(calculateThumbHeight());
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Hide native scrollbar */}
      <style>{`
        html {
          scrollbar-width: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;
        }
      `}</style>

      {/* Custom Scrollbar - Hidden on mobile */}
      <div
        ref={trackRef}
        className="hidden md:block fixed right-3 top-0 z-50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Scrollbar Track - Ultra thin white line (aligned) */}
        <div className="absolute right-[-4px] top-0 h-screen w-[2px] bg-[#B8934A] opacity-50" />

        {/* Scrollbar Thumb - Luxury gold with hover glow */}
        <motion.div
          className="absolute right-0 rounded-full bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-400 pointer-events-auto cursor-grab active:cursor-grabbing shadow-lg"
          style={{
            width: '6px',
            height: thumbHeight,
            y: smoothThumbY,
            left: '0px',
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 0.3, ease: 'easeInOut' },
          }}
          whileHover={{
            width: '10px',
            left: '-2px',
            boxShadow:
              '0 0 12px rgba(217, 119, 6, 0.6), 0 0 24px rgba(217, 119, 6, 0.3)',
            transition: { duration: 0.2 },
          }}
          whileTap={{
            boxShadow:
              '0 0 20px rgba(217, 119, 6, 0.8), 0 0 32px rgba(217, 119, 6, 0.5)',
          }}
          onMouseDown={handleMouseDown}
        />

        {/* Subtle glow overlay on hover */}
        <motion.div
          className="absolute right-0 rounded-full blur-xl pointer-events-none"
          style={{
            width: '6px',
            height: thumbHeight,
            y: smoothThumbY,
            left: '6px',
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.3) 0%, transparent 70%)',
            opacity: isHovering ? 0.5 : 0,
          }}
          transition={{
            opacity: { duration: 0.3, ease: 'easeInOut' },
          }}
        />
      </div>
    </>
  );
}