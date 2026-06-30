import { useState, useCallback } from 'react';
import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  lang?: string;
  size?: 'sm' | 'md';
}

export default function AudioButton({ text, lang = 'de-DE', size = 'md' }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [text, lang]);

  const sizeClasses = size === 'sm'
    ? 'w-8 h-8'
    : 'w-9 h-9';

  return (
    <button
      onClick={playAudio}
      className={`${sizeClasses} rounded-full flex items-center justify-center transition-all duration-150 ${
        isPlaying
          ? 'bg-[var(--primary-500)] text-white'
          : 'bg-[var(--primary-50)] text-[var(--primary-600)] hover:bg-[var(--primary-500)] hover:text-white'
      } active:scale-[0.92]`}
      style={{ boxShadow: isPlaying ? 'var(--shadow-inset)' : 'none' }}
      aria-label="Tinglash"
    >
      {isPlaying ? (
        <div className="flex items-center gap-[2px] h-3">
          <span className="w-[2px] h-full bg-current rounded-full audio-wave-1" />
          <span className="w-[2px] h-full bg-current rounded-full audio-wave-2" />
          <span className="w-[2px] h-full bg-current rounded-full audio-wave-3" />
        </div>
      ) : (
        <Volume2 size={size === 'sm' ? 14 : 18} />
      )}
    </button>
  );
}
