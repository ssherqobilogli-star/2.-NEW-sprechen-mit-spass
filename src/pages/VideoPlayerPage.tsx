import PlaceholderPage from '../components/PlaceholderPage';
import { Play } from 'lucide-react';

export default function VideoPlayerPage() {
  return (
    <PlaceholderPage
      title="Video Player"
      description="Video darslikni tomosha qilish"
      icon={<Play size={48} strokeWidth={1.5} />}
    />
  );
}
