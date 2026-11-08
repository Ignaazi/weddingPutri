'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CoverMobileProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export default function CoverMobile({ isOpen, onOpen, guestName }: CoverMobileProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between px-4 py-6 bg-[#EAD8C8] text-center overflow-hidden"
        >
          {/* BACKGROUND POSTER JAWA KHUSUS MOBILE */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-jawa-mobile.png"
              alt="Background Jawa Mobile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* KONTEN ATAS: MASUK RAPI DI DALAM BINGKAI BATIK */}
          <div className="relative z-10 pt-10 sm:pt-12 space-y-1 w-full max-w-xs mx-auto">
            {/* Sub-Header (Letter-spacing di-adjust agar tidak menabrak batik) */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.18em] text-[#5C3A21] font-extrabold block drop-shadow-xs mb-1"
            >
              The Wedding Invitation
            </motion.span>

            {/* Nama Mempelai */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-0.5"
            >
              <h1 className="font-serif text-lg sm:text-xl font-extrabold text-[#2A160A] tracking-wide leading-tight drop-shadow-xs uppercase">
                Azzakir Fathul Arrafi
              </h1>
              
              <span className="block font-serif text-sm font-bold text-[#7A4B1B] my-0.5">
                &amp;
              </span>

              <h1 className="font-serif text-lg sm:text-xl font-extrabold text-[#2A160A] tracking-wide leading-tight drop-shadow-xs uppercase">
                Putri Andini Wonte
              </h1>
            </motion.div>
          </div>

          {/* KONTEN TENGAH: BINGKAI FOTO KOTAK MINIMALIS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative p-1.5 rounded-2xl bg-gradient-to-b from-[#C59B27] via-[#8B5A2B] to-[#4A2C11] shadow-[0_12px_28px_rgba(61,35,20,0.35)] my-auto group"
          >
            <div className="relative w-48 h-64 sm:w-52 sm:h-72 rounded-xl overflow-hidden bg-[#2D1B0F] border border-amber-200/40">
              <Image
                src="/photo.jpg"
                alt="Azzakir & Putri"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

          {/* KONTEN BAWAH: TANGGAL, TAMU & TOMBOL BUKA */}
          <div className="relative z-10 pb-4 w-full max-w-xs mx-auto space-y-2">
            {/* Tanggal Acara */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-serif text-xs text-[#3D2314] font-extrabold tracking-[0.2em] uppercase drop-shadow-xs"
            >
              Minggu, 04 April 2027
            </motion.p>

            {/* Tamu Undangan (Jika Ada) */}
            {guestName && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-[#3D2314]/10 border border-[#8B5A2B]/30 py-1 px-4 rounded-xl text-center backdrop-blur-xs"
              >
                <p className="text-[9px] text-[#5C3A21] uppercase tracking-wider font-medium">Kepada Yth.</p>
                <p className="text-xs font-bold text-[#2A160A] mt-0.5">{guestName}</p>
              </motion.div>
            )}

            {/* Tombol Buka Undangan Keraton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button
                onClick={onOpen}
                className="w-full relative group cursor-pointer py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A2610] via-[#361A0B] to-[#4A2610] text-[#FFF6E5] border-2 border-[#C59B27] shadow-[0_8px_20px_rgba(42,22,10,0.4)] transition-all duration-300 active:scale-95"
                style={{
                  borderRadius: '20px 6px 20px 6px',
                }}
              >
                <span className="font-serif text-xs font-bold tracking-[0.25em] uppercase drop-shadow-xs">
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