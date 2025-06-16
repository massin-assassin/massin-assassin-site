'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center sm:text-left">
          <Image src="/massin-assassin-logo.png" alt="Massin Assassin Logo" width={60} height={60} />
          <h1 className="text-3xl sm:text-4xl font-bold">🎣 Custom Fishing Lures</h1>
        </div>
        <p className="text-base sm:text-lg mb-6">
          Design your own perfect fishing lure! Choose colors, shapes, and features to match your fishing style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/customize" className="text-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Start Customizing
          </Link>
          <Link href="/checkout" className="text-center bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
            Checkout
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ['blue-silver-assassin.png', 'Blue and Silver Assassin'],
              ['green-silver-assassin.png', 'Green and Silver Assassin'],
              ['white-silver-assassin.png', 'White and Silver Assassin'],
              ['black-gold-assassin.png', 'Black and Gold Assassin'],
              ['autumn-gold-assassin.png', 'Autumn Gold Assassin'],
              ['perch-assassin.png', 'Perch Assassin'],
              ['candy-apple-assassin.png', 'Candy Apple Assassin'],
              ['mackerel-assassin.png', 'Mackerel Assassin']
            ].map(([img, name]) => (
              <div key={name} className="bg-white shadow-md rounded-xl p-4">
                <Image src={`/${img}`} alt={name} width={300} height={200} className="rounded-lg mb-2 w-full h-auto" />
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm">Top performing lure designed for all conditions.</p>
                <p className="text-md font-semibold mt-2">£15.00</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Customer Catches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...Array(100)].map((_, index) => {
              const num = index + 1;
              return (
                <div key={num} className="bg-white shadow-md rounded-xl overflow-hidden">
                  <Image
                    src={`/catch${num}.jpg`}
                    alt={`Catch ${num}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

