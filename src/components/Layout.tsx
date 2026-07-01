import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import BottomNav from './BottomNav';
import NavigationRail from './NavigationRail';
import BlobShape from './BlobShape';
import XPPopup from './XPPopup';
import ParrotFlyover from './ParrotFlyover';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
};

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Decorative Blobs */}
      <BlobShape type="1" />
      <BlobShape type="2" />

      {/* Desktop Navigation Rail */}
      <NavigationRail />

      {/* Content Area */}
      <div className="flex-1 flex flex-col relative z-10 w-full lg:ml-[var(--rail-width)]">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6" style={{ paddingBottom: 'calc(var(--bottom-nav-height) + 24px)' }}>
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={pageTransition.transition}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* XP Popup */}
      <XPPopup />

      {/* Sahifalar orasida uchib o'tuvchi to'tiqush */}
      <ParrotFlyover />
    </div>
  );
}
