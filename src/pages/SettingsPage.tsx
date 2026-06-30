import { motion } from 'framer-motion';
import { Settings as SettingsIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ThemeToggle from '../components/ThemeToggle';

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
      className="space-y-6"
    >
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold font-display text-[var(--text-primary)]">Sozlamalar</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Platformani o'zingizga moslang</p>
      </div>

      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-50)] flex items-center justify-center">
            <SettingsIcon size={20} style={{ color: 'var(--primary-500)' }} />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">Mavzu va rang</h3>
            <p className="text-xs text-[var(--text-secondary)]">Platforma ko'rinishini o'zgartiring</p>
          </div>
        </div>
        <ThemeToggle />
      </GlassCard>
    </motion.div>
  );
}
