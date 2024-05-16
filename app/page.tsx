import Link from 'next/link';

import { metadata } from './(dashboard)/layout';

export default function HomePage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">{metadata.title}</h1>
          <p className="py-6 text-lg leading-loose">{metadata.content}</p>
          <Link href="/chat" className="btn btn-primary uppercase">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
