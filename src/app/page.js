'use client'
import 'tailwindcss/tailwind.css'
import Appbar from './components/Appbar';
import Bottom from './components/Bottom';
import Drawer from './components/Drawer';
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import { searchProducts } from '@/app/utils/api';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    const search = async () => {
      const results = await searchProducts(searchTerm);
      setSearchResults(results);
    };

    search();
  }, [searchTerm]);

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div className="w-full flex justify-center py-8">
        <input 
          type='text'
          placeholder='Buscar produtos'
          className='bg-gray-200 border border-gray-300 rounded-full p-2 w-80'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex justify-center'>
        <ul>
            {searchResults.map((product) => (
              <li key={product.id}>
                <div className='bg-white p-4 shadow-md'>
                    <img src={product.image} className='w-16 h-16 rounded-full'></img>
                    <p className='mt-2'>{product.title}</p>
                </div>

              </li>
            ))}
        </ul>
      </div>
    </main>
  )
}