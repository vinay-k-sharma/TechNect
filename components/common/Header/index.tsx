import React from 'react';
import Navitems from './Navitems';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <>
      <header className="w-full border-b bg-[#181B1F]">
        <div className="flex w-full items-center justify-between p-5 md:px-10 lg:mx-auto xl:px-0">
          <Link href="/" className="flex w-36 gap-2">
            <Image
              src="/assets/icon.png"
              alt="bac-image"
              width={38}
              height={38}
            />
            <span className="text-white">Tech-Nect</span>
          </Link>
          <nav className="">
            <Navitems />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
