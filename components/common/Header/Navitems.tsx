'use client';
import React from 'react';
import { Links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navitems = () => {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {Links.map((link) => {
        const isActive = pathName == link.slug;
        return (
          <li
            key={link.slug}
            className={`${isActive ? 'text-primary' : 'text-white'} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.slug}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
