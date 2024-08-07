'use client';
import React from 'react';
import { Links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navitems = () => {
  const { data: session } = useSession();
  const pathName = usePathname();

  return (
    <ul className="sticky top-0 z-50 flex flex-wrap items-center gap-4 px-4 py-4 lg:px-24">
      {Links.map((link) => {
        if (link.slug === '/login' || link.slug === '/register') {
          if (session) return null;
        }
        if (link.slug === '/signout') {
          if (!session) return null;
        }
        const isActive = pathName === link.slug;
        return (
          <li
            key={link.slug}
            className={`${isActive ? 'text-primary' : 'text-white'} `}
          >
            {link.slug === '/signout' ? (
              <button onClick={() => signOut()}>SignOut</button>
            ) : (
              <Link href={link.slug}>{link.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default Navitems;
