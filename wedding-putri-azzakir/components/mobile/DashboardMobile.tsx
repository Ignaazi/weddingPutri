'use client';

import Image from 'next/image';

interface DashboardProps {
  isOpen: boolean;
}

export default function DashboardMobile({ isOpen }: DashboardProps) {
  if (!isOpen) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#FDFBF7] text-[#2A160A] animate-fadeIn pb-20">
      {/* Header / Hero Section Mobile */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/bg-jawa-mobile.png" alt="Background Jawa Mobile" fill className="object-cover" />
        </div>

        <div className="relative z-10 space-y-3 w-full max-w-xs">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7A4B1B]">
            Walimatul 'Ursy
          </span>
          <h1 className="font-serif text-3xl font-extrabold uppercase tracking-wide leading-tight">
            Azzakir <br /> &amp; <br /> Putri
          </h1>
          <p className="font-serif text-xs text-[#5C3A21] font-bold tracking-widest uppercase">
            Minggu, 04 April 2027
          </p>
        </div>
      </section>

      {/* Tambahkan Section Lainnya Khusus Mobile di Sini */}
    </div>
  );
}