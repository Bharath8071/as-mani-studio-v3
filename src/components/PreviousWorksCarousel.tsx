import { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Wedding · Priya & Karthik' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', title: 'Engagement · Ananya & Ravi' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', title: 'Thottil · Baby Arjun' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', title: 'Wedding · Divya & Suresh' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', title: 'Manjal Neerattu · Kavitha' },
  // { src: 'https://images.unsplash.com/photo-1606395614352-e0490f1d7213?w=800&q=80', title: 'Birthday · Little Meera' },
  // { src: 'https://images.unsplash.com/photo-1606216836861-cffce6dd7d5c?w=800&q=80', title: 'Engagement · Nithya & Arun' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', title: 'Wedding · Lakshmi & Vikram' },
];

export function PreviousWorksCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  // Autoplay: scroll to next slide every 3.5s when not paused
  useEffect(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    if (isPaused) return;

    autoplayRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [emblaApi, isPaused]);

  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>PREVIOUS WORKS</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-600 text-stone-900 leading-tight mt-1">
            Moments We've Captured
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex items-center" style={{ height: '580px' }}>
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className="relative flex-none basis-[75%] md:basis-[38%] lg:basis-[30%] px-2 h-full flex items-center"
                  onClick={() => scrollTo(index)}
                  style={{ cursor: current === index ? 'default' : 'pointer' }}
                >
                  <motion.div
                    className="w-full overflow-hidden relative"
                    animate={{
                      clipPath:'inset(0% 0% 0% 0% round 1.5rem)',
                      scale: current === index ? 1.03 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    style={{ height: '500px' }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.22) 100%)',
                        borderRadius: '1.5rem',
                      }}
                    />

                  </motion.div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Left gradient overlay - fade effect only, no blur */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-10"
            style={{
              background: 'linear-gradient(90deg, rgba(250,246,241,1) 0%, rgba(250,246,241,0) 100%)',
            }}
          />

          {/* Right gradient overlay - fade effect only, no blur */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-10"
            style={{
              background: 'linear-gradient(270deg, rgba(250,246,241,1) 0%, rgba(250,246,241,0) 100%)',
            }}
          />

          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-[-30px] top-1/2 -translate-y-1/2 -translate-x-4 p-2 text-stone-600 hover:text-yellow-500 transition-colors duration-200"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-[-30px] top-1/2 -translate-y-1/2 translate-x-4 p-2 text-stone-600 hover:text-yellow-500 transition-colors duration-200"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-14">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? 'w-6 h-1.5 bg-stone-900'
                  : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
