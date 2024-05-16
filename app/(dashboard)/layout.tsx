import { MetadataType } from '../@types/metadata';

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
  return <div>{children}</div>;
}
