import { metadata } from '@/app/(dashboard)/layout';
import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

export default function SidebarHeader() {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-12 h-12 text-primary" />
      <h2 className="text-2xl font-bold text-primary">{metadata.title}</h2>
      <ThemeToggle />
    </div>
  );
}
