"use client";
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgMenu } from 'react-icons/cg';

const MobileNav = () => {
  const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
  ];

  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CgMenu className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className="text-4xl font-semibold">
              Joy Dhar<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col gap-4 items-left'>
          {links.map((link, i) => (
            <Link key={i} href={link.path} className={`${link.path === pathName ? "text-accent" : ""} capitalize font-medium hover:text-accent transition-all`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;