'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CoverDesktopProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export default function CoverDesktop({ isOpen, onOpen, guestName }: CoverDesktopProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#EAD8C8]"
        >
          {/* Background Poster Jawa Utuh */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-jawa.png"
              alt="Background Jawa Desktop"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Konten Utama */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-4 flex flex-col items-center justify-center min-h-screen">
            
            {/* 1. SUB-HEADER (GEDE & TEGAS) */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base uppercase tracking-[0.35em] text-[#5C3A21] font-extrabold block drop-shadow-xs mb-3"
            >
              The Wedding Invitation
            </motion.span>

            {/* 2. NAMA MEMPELAI (SEDANG & RAPI) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-1 mb-2"
            >
              {/* Nama Pria */}
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A160A] tracking-wide leading-tight drop-shadow-xs uppercase">
                Azzakir Fathul Arrafi
              </h1>
              
              {/* Simbol & */}
              <span className="block font-serif text-xl lg:text-2xl font-bold text-[#7A4B1B] my-1">
                &amp;
              </span>

              {/* Nama Wanita */}
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2A160A] tracking-wide leading-tight drop-shadow-xs uppercase">
                Putri Andini Wonte
              </h1>
            </motion.div>

            {/* 3. FRAME FOTO KOTAK MINIMALIS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative p-1.5 rounded-2xl bg-gradient-to-b from-[#C59B27] via-[#8B5A2B] to-[#4A2C11] shadow-[0_15px_35px_rgba(61,35,20,0.35)] my-3 group"
            >
              <div className="relative w-64 h-88 rounded-xl overflow-hidden bg-[#2D1B0F] border border-amber-200/40">
                <Image
                  src="/photo.jpg"
                  alt="Azzakir & Putri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

            {/* 4. TANGGAL ACARA (GEDE & TEKS MURNI) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-serif text-sm md:text-base text-[#3D2314] font-extrabold tracking-[0.3em] uppercase my-3 drop-shadow-xs"
            >
              Minggu, 04 April 2027
            </motion.p>

            {/* 5. TAMU UNDANGAN (JIKA ADA) */}
            {guestName && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-3 bg-[#3D2314]/10 border border-[#8B5A2B]/30 py-1.5 px-6 rounded-xl inline-block backdrop-blur-xs"
              >
                <p className="text-[10px] text-[#5C3A21] uppercase tracking-wider font-medium">Kepada Yth. Bapak/Ibu/Saudara/i</p>
                <p className="text-sm font-bold text-[#2A160A] mt-0.5">{guestName}</p>
              </motion.div>
            )}

            {/* 6. TOMBOL BUKA UNDANGAN KERATON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-1"
            >
              <button
                onClick={onOpen}
                className="relative group cursor-pointer px-10 py-3.5 flex items-center justify-center gap-3 bg-gradient-to-r from-[#4A2610] via-[#361A0B] to-[#4A2610] text-[#FFF6E5] border-2 border-[#C59B27] shadow-[0_8px_20px_rgba(42,22,10,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  borderRadius: '24px 8px 24px 8px',
                }}
              >
                <span className="font-serif text-xs font-bold tracking-[0.3em] uppercase drop-shadow-xs">
                  Buka Undangan
                </span>
                <ChevronRight className="w-4 h-4 text-[#F3E5AB] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}