import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Dropdown({ certificates }) {
  return (
    <div className='flex flex-col sm:flex-col lg:flex-row items-start'>
      {certificates.map((certificate, index) => (
        <Menu as="div" className="relative inline-block text-left w-full lg:w-auto" key={index}>
          <div>
            <MenuButton
              className={({ isActive }) =>
                `inline-flex w-full gap-x-1.5 flex items-center rounded-md sm:px-0 lg:px-6 py-2 text-blue-900 hover:text-blue-500 ${
                  isActive ? 'bg-gray-900 text-blue' : 'text-blue-300 hover:bg-gray-700',
                  'rounded-md sm:px-0 lg:px-6 py-2 text-base sm:text-xl lg:text-lg font-medium'
                }`
              }
            >
              {certificate.head}
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="lg:absolute right-0 z-10 mt-2 w-full lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              {certificate.items.map((item, idx) => (
                <MenuItem key={idx}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      ))}
    </div>
  );
}
// "use client";

// import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid'; 
// import Link from 'next/link';

// export default function Dropdown({ certificates }) {
//   return (
//     <div className='flex flex-col sm:flex-col lg:flex-row items-start'>
//       {certificates.map((certificate, index) => (
//         <Menu as="div" className="relative inline-block text-left w-full lg:w-auto" key={index}>
//           <div>
//             <MenuButton
//               className={({ isActive }) =>
//                 `inline-flex w-full gap-x-1.5 flex items-center rounded-md sm:px-0 lg:px-6 py-2 text-blue-900 hover:text-blue-500 ${
//                   isActive ? 'bg-gray-900 text-blue' : 'text-blue-300 hover:bg-gray-700'
//                 } rounded-md sm:px-0 lg:px-6 py-2 text-base sm:text-xl lg:text-lg font-medium`
//               }
//             >
//               {certificate.head}
//               <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
//             </MenuButton>
//           </div>
//           <MenuItems
//             transition
//             className="lg:absolute right-0 z-10 mt-2 w-full lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//           >
//             <div className="py-1">
//               {certificate.items.map((item, idx) => (
//                 <MenuItem key={idx}>
//                   <Link href={item.href} passHref>
//                     <a className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
//                       {item.name}
//                     </a>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </div>
//           </MenuItems>
//         </Menu>
//       ))}
//     </div>
//   );
// }


