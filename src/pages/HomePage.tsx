import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { BookOpen, Swords, Trophy, Zap, Brain, ChevronRight, Star, Target, Flame } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getLevelProgress, formatNumber } from '../lib/utils';
import { getRandomWords } from '../data/words';
import { getTopicsByLevel } from '../data/topics';
import FlipCard from '../components/FlipCard';
import ProgressBar from '../components/ProgressBar';
import LevelSelector from '../components/LevelSelector';
import GlassCard from '../components/GlassCard';

const easeEntrance: [number, number, number, number] = [0, 0, 0.2, 1];
const easeBounce: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

const quickActions = [
  { icon: Brain, label: 'AI Mentor', desc: 'Suhbatlashish', path: '/mentor', color: 'from-blue-500 to-cyan-500' },
  { icon: BookOpen, label: "Lug'at", desc: "So'z o'rganish", path: '/dictionary', color: 'from-green-500 to-emerald-500' },
  { icon: Swords, label: 'Jang', desc: 'Bellashuv', path: '/battle', color: 'from-orange-500 to-red-500' },
  { icon: Trophy, label: 'Mock', desc: 'Imtihon', path: '/mock', color: 'from-purple-500 to-pink-500' },
];

const stats = [
  { icon: Zap, label: 'XP', color: '#F59E0B' },
  { icon: BookOpen, label: "So'zlar", color: '#3B9ED9' },
  { icon: Target, label: 'Daraja', color: '#22C55E' },
  { icon: Flame, label: 'Seriya', color: '#F59E0B' },
];

export default function HomePage() {
  const { user, selectedLevel, setSelectedLevel, addXp } = useStore();
  const [dailyWord] = useState(() => getRandomWords(1)[0]);
  const [showDaily, setShowDaily] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);
  const progress = getLevelProgress(user?.xp || 0);
  const topics = getTopicsByLevel(selectedLevel).slice(0, 5);
  const countRef = useRef<HTMLSpanElement>(null);

  // Animate progress number
  useEffect(() => {
    const target = Math.round(progress.progress);
    const startTime = performance.now();
    const duration = 800;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(target * progress);
      if (countRef.current) {
        countRef.current.textContent = `${value}%`;
      }
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
      setProgressPercent(target);
    }, 300);

    return () => clearTimeout(timer);
  }, [progress.progress]);

  const handleLearnDaily = () => {
    addXp(5);
    setShowDaily(false);
  };

  return (
    <div className="space-y-8">
      {/* ========== HERO WELCOME ========== */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeEntrance }}
        className="text-center pt-8 pb-4"
      >
        <h1
          className="text-4xl lg:text-5xl font-black font-display leading-tight"
          style={{ color: 'var(--primary-900)' }}
        >
          Sprechen mit Spaß{' '}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: easeBounce }}
            className="inline-block"
          >
            🇩🇪
          </motion.span>
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Nemis tilini o'ynab o'rganing!
        </p>
      </motion.div>

      {/* ========== LEVEL SELECTOR & PROGRESS ========== */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLevel}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: easeEntrance }}
          >
            <GlassCard>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-base">{progress.title}</h3>
                  <p className="text-xs text-[var(--text-muted)]">Daraja {progress.level}</p>
                </div>
                <span
                  ref={countRef}
                  className="text-2xl font-black font-display"
                  style={{ color: 'var(--primary-500)' }}
                >
                  0%
                </span>
              </div>
              <ProgressBar progress={progressPercent} height="h-3" showLabel={false} />
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-[var(--text-muted)]">
                  Keyingi daraja:{' '}
                  <span className="font-semibold" style={{ color: 'var(--primary-600)' }}>
                    {progress.nextLevel} XP
                  </span>
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========== STATS GRID ========== */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeBounce } },
            }}
          >
            <GlassCard className="flex flex-col items-center p-4">
              <stat.icon size={24} style={{ color: stat.color }} />
              <span className="text-2xl font-black font-display mt-1" style={{ color: stat.color }}>
                {stat.label === 'XP' && formatNumber(user?.xp || 0)}
                {stat.label === "So'zlar" && formatNumber(user?.wordsLearned || 0)}
                {stat.label === 'Daraja' && (user?.level || 'A1')}
                {stat.label === 'Seriya' && `${user?.streak || 0} kun`}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium">{stat.label}</span>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* ========== DAILY WORD ========== */}
      <AnimatePresence>
        {showDaily && dailyWord && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0, overflow: 'hidden' }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeEntrance }}
          >
            <GlassCard
              className="border-2"
              style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold flex items-center gap-2 text-base" style={{ color: 'var(--warning)' }}>
                  <Star size={20} fill="currentColor" /> Kunlik so'z
                </h3>
                <button
                  onClick={handleLearnDaily}
                  className="btn-primary btn-sm"
                >
                  +5 XP
                </button>
              </div>
              <FlipCard
                german={dailyWord.german}
                article={dailyWord.article}
                uzbek={dailyWord.uzbek}
                example={dailyWord.example}
                exampleUz={dailyWord.exampleUz}
                pronunciation={dailyWord.pronunciation}
              />
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== QUICK ACTIONS GRID ========== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        }}
      >
        {quickActions.map((action) => (
          <motion.div
            key={action.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeEntrance } },
            }}
          >
            <Link to={action.path}>
              <GlassCard className="cursor-pointer group h-full">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white mb-3 transition-transform duration-300 group-hover:scale-110`}
                >
                  <action.icon size={24} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">{action.label}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{action.desc}</p>
                <div className="flex items-center gap-1 mt-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--primary-500)' }}>
                  Boshlash <ChevronRight size={16} />
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ========== TOPICS PREVIEW ========== */}
      <div>
        <h3 className="font-bold text-lg text-[var(--text-primary)] font-display mb-3">
          Mavzular ({selectedLevel})
        </h3>
        <motion.div
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeEntrance } },
              }}
              className={`card flex items-center gap-4 p-3 cursor-pointer transition-all duration-150 hover:translate-x-1 ${
                topic.isLocked ? 'opacity-60' : ''
              }`}
              style={{ padding: '12px 16px' }}
            >
              <span className="text-2xl select-none">{topic.icon}</span>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate">{topic.titleDe}</h4>
                <p className="text-xs text-[var(--text-secondary)] truncate">{topic.titleUz}</p>
              </div>
              {topic.isLocked ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)] flex-shrink-0">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ) : (
                <ChevronRight size={16} className="text-[var(--text-muted)] flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
