import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DURATION_MS = 1800;

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 240);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg px-6"
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            Adarsh S
          </p>

          <p className="mb-12 font-display text-7xl tracking-tighter tabular-nums text-text-primary md:text-8xl">
            {String(count).padStart(3, '0')}
          </p>

          <div className="h-px w-full max-w-xs overflow-hidden bg-stroke">
            <motion.div
              className="h-full origin-left bg-text-primary"
              style={{ scaleX: count / 100 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
