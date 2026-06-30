import PlaceholderPage from '../components/PlaceholderPage';
import { CheckCircle } from 'lucide-react';

export default function CustomTestPage() {
  return (
    <PlaceholderPage
      title="Test"
      description="Bilimingizni sinab ko'ring"
      icon={<CheckCircle size={48} strokeWidth={1.5} />}
    />
  );
}
