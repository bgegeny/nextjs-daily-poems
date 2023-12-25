import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav
        className="relative flex flex-wrap items-center justify-between mx-auto p-8"
      >
      <Link href="/" className="font-bond text-3xl">Default Page</Link>
      <div
        className="space-x-4 text-xl"
      >
        <Link href="/scale">Scale Page</Link>
        <Link href="/reliability">Reliability Page</Link>
        <Link href="/performance">Performance Page</Link>
      </div>
      </nav>

    </div>
  );
};
  
export default Header;
