export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return <div className="m-auto max-w-4xl mt-7">{children}</div>;
}
