"use client"
import React from 'react';
import Button from "./Button";
import { useRouter } from 'next/navigation'

const Header = ({ showBackButton = false, onBackClick = () => {} }) => {
  const router = useRouter()
  return (
    <header className='flex w-full justify-between py-5 relative max-w-2xl mx-auto'>
        <div>
          { showBackButton && (
            <Button variant="icon" onClick={onBackClick || (() => router.back())}><img src="/arrow-left.svg" /></Button>
          )}
        </div>
        <img src="/logo.svg" onClick={() => router.push('/')} alt="Juice Box" className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer' />
        <div>
            <Button variant="icon" onClick={() => router.refresh()}><img src="/refresh.svg" /></Button>
        </div>
        
    </header>
  );
};

export default Header;