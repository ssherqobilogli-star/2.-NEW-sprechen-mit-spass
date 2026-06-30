import PlaceholderPage from '../components/PlaceholderPage';
import { FileText } from 'lucide-react';

export default function MockExamPage() {
  return (
    <PlaceholderPage
      title="Mock Imtihon"
      description="TELC/Goethe formatida imtihonlarga tayyorgarlik"
      icon={<FileText size={48} strokeWidth={1.5} />}
    />
  );
}
