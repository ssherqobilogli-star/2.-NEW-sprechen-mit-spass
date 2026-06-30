import PlaceholderPage from '../components/PlaceholderPage';
import { FileText } from 'lucide-react';

export default function MockExamActivePage() {
  return (
    <PlaceholderPage
      title="Imtihon"
      description="Mock imtihon o'tkazish"
      icon={<FileText size={48} strokeWidth={1.5} />}
    />
  );
}
