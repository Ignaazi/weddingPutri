'use client';

import CoverDesktop from '@/components/desktop/CoverDesktop';
import DashboardDesktop from '@/components/desktop/DashboardDesktop';
import CoverMobile from '@/components/mobile/CoverMobile';
import DashboardMobile from '@/components/mobile/DashboardMobile';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#EAD8C8] overflow-x-hidden">
      {/* ==================== TAMPILAN DESKTOP ==================== */}
      <div className="hidden md:block">
        <CoverDesktop isOpen={isOpen} onOpen={handleOpen} />
        <DashboardDesktop isOpen={isOpen} />
      </div>

      {/* ==================== TAMPILAN MOBILE ==================== */}
      <div className="block md:hidden">
        <CoverMobile isOpen={isOpen} onOpen={handleOpen} />
        <DashboardMobile isOpen={isOpen} />
      </div>
    </main>
  );
}