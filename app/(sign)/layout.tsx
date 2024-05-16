export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return <div className="min-h-screen grid place-items-center">{children}</div>;
}
