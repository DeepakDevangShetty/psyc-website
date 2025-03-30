'use client';

import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md">
        <div className="flex items-center space-x-4">
          <Image src="/logo.jpg" alt="Company Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">PSYC Aerospace & Defence</h1>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link href="#about">About Us</Link>
          <Link href="#products">Products</Link>
          <Link href="#team">Our Team</Link>
          <Link href="#blogs">Blogs</Link>
        </div>
      </nav>

      {/* Spline Section */}
      <div className="flex-grow flex justify-center items-center p-4">
        <div className="w-full max-w-5xl h-[600px] rounded-xl overflow-hidden shadow-lg">
          <Spline scene="https://prod.spline.design/vmq3XhJwK1rj-Vwn/scene.splinecode" />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 bg-gray-800 text-gray-300">
        <p>&copy; {new Date().getFullYear()} PSYC Aerospace & Defence. All rights reserved.</p>
      </footer>

    </main>
  );
}
