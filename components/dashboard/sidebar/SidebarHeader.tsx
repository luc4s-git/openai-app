import { metadata } from '@/app/(dashboard)/layout';
import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

export default function SidebarHeader() {
  return (
    <div className="flex items-center mb-4 gap-2 px-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="text-2xl font-bold text-primary mr-auto">
        {metadata.title}
      </h2>
      <ThemeToggle />
    </div>
  );
}
