'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import Banner from './components/Banner';
import CategoriesSection from './components/CategoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import HistorySection from './components/HistorySection';
import React, {useState} from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <Banner />
      <CategoriesSection />
      <TestimonialsSection />
      <HistorySection />
      <Bottom></Bottom>
    </main>
  )
}