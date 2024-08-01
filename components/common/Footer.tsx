import Link from 'next/link';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoGoogle } from 'react-icons/bi';
import { BiLogoPlayStore } from 'react-icons/bi';
const Footer = () => {
  return (
    <div className="sticky top-full flex flex-wrap border-t-[1px] border-solid bg-[#EBEFF5] px-4 py-[60px] text-[14px] md:px-12 lg:px-12">
      <div className="flex flex-col md:w-1/2 lg:w-1/4">
        <h3 className="font-heading mb-[20px] text-[15px] font-[500] leading-[1.2] text-[#2d465e]">
          About Us
        </h3>
        <p className="mb-6">
          We ignite the spark of innovation. Our platform brings together
          visionaries, creators, and industry leaders.
        </p>
        <a className="w-max rounded-[30px] border-[2px] border-solid bg-primary px-[30px] py-[8px] text-[14px] text-white">
          Learn More
        </a>
      </div>
      <div className="flex flex-col md:w-1/2 md:pl-12 lg:w-1/4">
        <h2 className="font-heading mb-[20px] mt-[20px] text-[15px] font-[500] leading-[1.2] text-[#2d465e] md:mt-0">
          Navigation
        </h2>
        <div className="flex md:flex-row">
          <ul className="float-left mb-4 mr-8">
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">Overview</Link>
            </li>
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">About Us</Link>
            </li>
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">Find Buyers</Link>
            </li>
          </ul>
          <ul className="float-start mb-4 mr-12">
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">Overview</Link>
            </li>
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">About Us</Link>
            </li>
            <li className="mb-[10px] leading-[1.5]">
              <Link href="/">Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:mt-5 md:w-1/2 lg:mt-0 lg:w-1/4">
        <h2 className="font-heading mb-[20px] text-[15px] text-[#2d465e]">
          Recent Events
        </h2>
        <h1>Event 1</h1>
        <h1>Event 2</h1>
      </div>
      <div className="flex flex-col md:w-1/2 md:pl-10 lg:w-1/4 lg:pl-0">
        <div>
          <h3 className="font-heading mb-[20px] text-[15px] text-[#2d465e]">
            Connect
          </h3>
          <div className="mb-4 flex gap-1">
            <a
              href="#"
              className="leding-[1.5] mb-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDDFDF] text-lg"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              href="#"
              className="leding-[1.5] mb-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDDFDF]"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="leding-[1.5] mb-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDDFDF] text-lg"
            >
              <BiLogoLinkedinSquare />
            </a>
            <a
              href="#"
              className="leding-[1.5] mb-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDDFDF] text-lg"
            >
              <BiLogoGoogle />
            </a>
            <a
              href="#"
              className="leding-[1.5] mb-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DDDFDF] text-lg"
            >
              <BiLogoPlayStore />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text[15px] font-heading mb-[20px] text-[#2d465e]">
            Subscribe
          </h3>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[42px] border-[2px] border-solid bg-[#F3F4F4] pl-2 pr-[40px] text-[14px]"
            />
          </form>
        </div>
      </div>
      <div className="relative mt-[50px] w-full border-t-[1px] border-solid border-black pt-[20px]">
        <p className="my-[2px]">© Copyright Active. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
