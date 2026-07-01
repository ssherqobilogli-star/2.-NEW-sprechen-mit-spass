import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * PaPa.De to'tiqushi — har bir sahifa almashinuvida ekran bo'ylab
 * parvoz qilib o'tadigan brend animatsiyasi. Faqat vizual, hech qanday
 * interaktivlikka to'sqinlik qilmaydi (pointer-events: none).
 */
export default function ParrotFlyover() {
  const location = useLocation();
  const [flying, setFlying] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    // Har safar manzil o'zgarganda, yo'nalishni almashtirib parvozni ishga tushiramiz
    setDir((prev) => (prev === 1 ? -1 : 1));
    setFlying(true);
    const t = setTimeout(() => setFlying(false), 900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {flying && (
        <motion.div
          key={location.pathname + '-parrot'}
          className="fixed inset-0 pointer-events-none z-[60] overflow-hidden"
          aria-hidden="true"
        >
          <motion.img
            src="/icon-192.png"
            alt=""
            className="absolute w-14 h-14 lg:w-20 lg:h-20 drop-shadow-xl"
            style={{ top: '18%' }}
            initial={{
              x: dir === 1 ? '-15vw' : '115vw',
              y: 0,
              rotate: dir === 1 ? -8 : 8,
              scaleX: dir === 1 ? 1 : -1,
              opacity: 0,
            }}
            animate={{
              x: dir === 1 ? '115vw' : '-15vw',
              y: [0, -24, 8, -14, 0],
              rotate: dir === 1 ? [-8, 6, -8] : [8, -6, 8],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 0.9,
              ease: 'easeInOut',
              y: { duration: 0.9, times: [0, 0.25, 0.5, 0.75, 1] },
              opacity: { duration: 0.9, times: [0, 0.15, 0.5, 0.85, 1] },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
