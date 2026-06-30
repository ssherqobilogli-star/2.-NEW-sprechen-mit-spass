interface BlobShapeProps {
  type: '1' | '2';
}

export default function BlobShape({ type }: BlobShapeProps) {
  const isBlob1 = type === '1';

  return (
    <div
      className="blob"
      style={{
        width: isBlob1 ? '400px' : '350px',
        height: isBlob1 ? '400px' : '350px',
        top: isBlob1 ? '-100px' : 'auto',
        right: isBlob1 ? '-100px' : 'auto',
        bottom: isBlob1 ? 'auto' : '-80px',
        left: isBlob1 ? 'auto' : '-80px',
        backgroundColor: 'var(--primary-500)',
        opacity: isBlob1 ? 0.06 : 0.04,
        animationDelay: isBlob1 ? '0s' : '4s',
      }}
    />
  );
}
