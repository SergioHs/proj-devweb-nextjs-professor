import 'tailwindcss/tailwind.css'
import Appbar from '@/app/components/Appbar';
import Drawer from '@/app/components/Drawer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { createProduct } from '@/app/utils/api';

