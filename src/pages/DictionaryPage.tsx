import PlaceholderPage from '../components/PlaceholderPage';
import { BookA } from 'lucide-react';

export default function DictionaryPage() {
  return (
    <PlaceholderPage
      title="Lug'at"
      description="A1-B2 darajalari bo'yicha so'zlar"
      icon={<BookA size={48} strokeWidth={1.5} />}
    />
  );
}
