'use client'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import Banner from './components/Banner';
import CategoriesSection from './components/CategoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import HistorySection from './components/HistorySection';
import React, {useState, useContext} from 'react';
import { useRouter } from "next/navigation";
import {ThemeContext} from '@/app/contexts/ThemeContext'


export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
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