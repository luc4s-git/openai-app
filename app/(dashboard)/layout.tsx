import { MetadataType } from '../@types/metadata';

import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import { FaBarsStaggered } from 'react-icons/fa6';

export const metadata: MetadataType = {
  title: 'GPTGenius',
  content:
    'GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation and more!',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
