'use client';

import { Toaster } from 'react-hot-toast';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};

export { Providers };
