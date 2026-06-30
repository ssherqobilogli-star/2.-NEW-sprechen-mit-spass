import PlaceholderPage from '../components/PlaceholderPage';
import { Play } from 'lucide-react';

export default function VideoPage() {
  return (
    <PlaceholderPage
      title="Video Darslar"
      description="YouTube videolari orqali nemis tilini o'rganing"
      icon={<Play size={48} strokeWidth={1.5} />}
    />
  );
}
