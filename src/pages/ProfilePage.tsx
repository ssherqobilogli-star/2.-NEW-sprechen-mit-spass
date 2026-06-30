import PlaceholderPage from '../components/PlaceholderPage';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <PlaceholderPage
      title="Profil"
      description="Shaxsiy ma'lumotlar va statistika"
      icon={<User size={48} strokeWidth={1.5} />}
    />
  );
}
