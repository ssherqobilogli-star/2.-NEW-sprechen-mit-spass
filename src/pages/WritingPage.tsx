import PlaceholderPage from '../components/PlaceholderPage';
import { PenLine } from 'lucide-react';

export default function WritingPage() {
  return (
    <PlaceholderPage
      title="Yozish mashqlari"
      description="Nemis tilida yozish ko'nikmalaringizni rivojlantiring"
      icon={<PenLine size={48} strokeWidth={1.5} />}
    />
  );
}
