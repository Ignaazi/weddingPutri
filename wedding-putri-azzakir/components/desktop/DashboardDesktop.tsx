'use client';

import Image from 'next/image';

interface DashboardProps {
  isOpen: boolean;
}

export default function DashboardDesktop({ isOpen }: DashboardProps) {
  if (!isOpen) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#FDFBF7] text-[#2A160A] animate-fadeIn">
      {/* Header / Hero Section Desktop */}
      <section className="relative h-screen flex flex-col items-center justify-center p-10 text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/bg-jawa.png" alt="Background Jawa" fill className="object-cover" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-[#7A4B1B]">
            Walimatul 'Ursy
          </span>
          <h1 className="font-serif text-5xl font-extrabold uppercase tracking-wide">
            Azzakir &amp; Putri
          </h1>
          <p className="font-serif text-lg text-[#5C3A21]">
            Minggu, 04 April 2027
          </p>
        </div>
      </section>

      {/* Tambahkan Section Lainnya Khusus Desktop di Sini (Acara, Galeri, RSVP, dll) */}
    </div>
  );
}