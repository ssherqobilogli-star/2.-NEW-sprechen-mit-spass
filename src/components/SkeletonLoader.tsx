import { cn } from '../lib/utils';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'circle' | 'stat';
  count?: number;
  className?: string;
}

export default function SkeletonLoader({ type = 'card', count = 1, className }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return (
          <div className={cn('h-4 rounded-md skeleton-shimmer', className)} style={{ backgroundColor: 'var(--surface)' }} />
        );
      case 'circle':
        return (
          <div className={cn('w-10 h-10 rounded-full skeleton-shimmer', className)} style={{ backgroundColor: 'var(--surface)' }} />
        );
      case 'stat':
        return (
          <div className="card flex flex-col items-center p-4 gap-2">
            <div className="w-6 h-6 rounded-full skeleton-shimmer" style={{ backgroundColor: 'var(--surface)' }} />
            <div className="w-12 h-6 rounded-md skeleton-shimmer" style={{ backgroundColor: 'var(--surface)' }} />
            <div className="w-8 h-3 rounded-md skeleton-shimmer" style={{ backgroundColor: 'var(--surface)' }} />
          </div>
        );
      default:
        return (
          <div className={cn('card h-40 skeleton-shimmer', className)} style={{ backgroundColor: 'var(--surface)' }} />
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
}
