import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
      className="space-y-6"
    >
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold font-display text-[var(--text-primary)]">{title}</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">{description}</p>
      </div>
      <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
        {icon && <div className="mb-4 text-[var(--text-muted)]">{icon}</div>}
        <div className="w-16 h-16 rounded-2xl bg-[var(--primary-50)] flex items-center justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <h3 className="font-semibold text-[var(--text-primary)] mb-2">Tez orada</h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-xs">
          Bu bo'lim tez orada ishga tushiriladi. Hozircha boshqa bo'limlarni sinab ko'ring!
        </p>
      </GlassCard>
    </motion.div>
  );
}
