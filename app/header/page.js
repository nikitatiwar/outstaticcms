"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assets/images/logo.svg";
import Dropdown from '../Dropdown';

const certificate = [
  {
    head: "Certificates",
    items: [
      { name: "Portable Appliance Testing (PAT)", href: "/PAT" },
      { name: "Electrical Installation Condition Report (EICR)", href: "/EICR" },
      { name: "Electrical Installation Certificate (EIC)", href: "/EIC" },
      { name: "Minor Works Certificates (MWC)", href: "/MWC" },
      { name: "Emergency Lighting Certificate", href: "/ELC" },
      { name: "Fire Alarm Certificate", href: "/FAC" },
      { name: "Legionella Risk Assessment (LRA)", href: "/LRA" }
    ]
  },
  {
    head: "Resources",
    items: [
      { name: "FAQs", href: "/faq" },
      { name: "Troubleshooting", href: "/troubleshooting" },
      { name: "Community", href: "#" },
      { name: "Video Tutorials", href: "#" },
      { name: "Blog", href: "/blog" }
    ]
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const AdminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  return (
    <Disclosure as="nav" className="bg-[#F8F8F8] sticky top-0 z-50 fixed w-full">
      <div className="mx-auto max-w-[90%] px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 sm:h-28 items-center justify-between">
          {/* Logo on the left side (Visible on both mobile and desktop) */}
          <div className="flex shrink-0 items-center lg:hidden">
            <Link href="/">
              <Image
                alt="Your Company" title="logo"
                src={Logo}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Menu button (Only visible on mobile screens) */}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#2c3f7c] hover:bg-[#2c3f7c] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Desktop Navigation Links (Visible on large screens) */}
          <div className="hidden lg:flex sm:ml-6 sm:items-center w-full">
            <div className="flex space-x-4 w-full justify-between items-center">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <Image
                    alt="Your Company" title="logo"
                    src={Logo}
                    className="h-16 w-auto mr-6"
                  />
                </Link>

                <div className="flex">
                  <Dropdown certificates={certificate} />
                  <Link href="/pricing" className="rounded-md px-3 py-2 text-base lg:text-lg font-medium text-blue-900 hover:text-blue-500">
                    Plans & Pricing
                  </Link>
                </div>
              </div>

              <div className="flex h-12">
                <Link href={AdminUrl}
                className="block rounded-md px-5 py-2.5 text-lg font-medium text-blue-900 hover:text-blue-500 transition">
                  Log In
                </Link>
                <Link href="/contact"
                 className="block rounded-md bg-[#2c3f7c] px-5 py-2.5 text-lg font-medium text-white transition hover:bg-blue-500">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <DisclosurePanel className="lg:hidden h-[95vh]">
          <div className="space-y-1 pt-2 pb-3">
            {/* Mobile menu items */}
            <Dropdown certificates={certificate} />
            <Link href="/pricing" className="block rounded-md px-0 py-2 text-base sm:text-xl lg:text-base font-medium text-[#2c3f7c] hover:text-blue-500">
              Plans & Pricing
            </Link>

            {/* Log In and Get Started buttons inside mobile menu */}
            <div className="space-y-2">
              <Link href={AdminUrl}
              className="block rounded-md text-center text-base sm:text-xl lg:text-base font-medium text-[#2c3f7c] transition">
                Log In
              </Link>
              <Link href="/contact"
              className="block rounded-md bg-[#2c3f7c] text-center px-5 py-2.5 text-base sm:text-xl lg:text-base font-medium text-white transition hover:bg-green-700">
                Get Started
              </Link>
            </div>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}
