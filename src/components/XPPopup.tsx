import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function XPPopup() {
  const { xpPopup, hideXpPopup } = useStore();

  useEffect(() => {
    if (xpPopup.visible) {
      const timer = setTimeout(() => {
        hideXpPopup();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [xpPopup.visible, xpPopup.amount, hideXpPopup]);

  return (
    <AnimatePresence>
      {xpPopup.visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed top-20 right-4 z-[500] flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm"
          style={{
            backgroundColor: 'var(--warning)',
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          <Zap size={16} fill="currentColor" />
          <span>+{xpPopup.amount} XP</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
