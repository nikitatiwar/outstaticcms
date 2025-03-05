"use client";
import Link from "next/link"; 
import Image from 'next/image';
import logo from "../assets/images/logo.svg"; 

function Footer() {
  const handleScrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
    return (
<footer className="bg-[#F8F8F8]">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-0 lg:pt-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr_2fr]">
      <div>
        <div className="flex justify-center text-green-300 sm:justify-start">
        <Link href="/">
              <Image
                alt="Your Company" title="logo"
                src={logo}
                className="h-16 sm:h-auto"
              />
            </Link>
         
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left lg:mx-auto">
          <p className="text-lg font-medium text-[#2c3f7c]">COMPANY</p>

          <ul className="mt-4 sm:mt-8 space-y-4 text-sm">
            <li>
              <Link href="/about"
                className="transition text-[#2c3f7c] hover:text-blue-500"
             onClick={handleScrollToTop}
              >
               ABOUT
              </Link>
            </li>

            <li>
              <Link href="/contact"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                onClick={handleScrollToTop}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left lg:mx-auto">
          <p className="text-lg font-medium text-[#2c3f7c]">PRODUCT</p>

          <ul className="mt-4 sm:mt-8 space-y-4 text-sm">
            <li>
              <Link href="/pricing"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Plans & Pricing
              </Link>
            </li>

            <li>
              <Link href="/PAT"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
                Portable Appliance Testing (PAT)
              </Link>
            </li>

            <li>
              <Link href="/EICR"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Electrical Installation Condition Report (EICR)
              </Link>
            </li>
            <li>
              <Link href="/EIC"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Electrical Installation Certificate (EIC)
              </Link>
            </li>
            <li>
              <Link href="/MWC"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Minor Works Certificates (MWC)
              </Link>
            </li>
            <li>
              <Link href="/ELC"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Emergency Lighting Certificate 
              </Link>
            </li>
            <li>
              <Link href="/FAC"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Fire Alarm Certificate
              </Link>
            </li>
            <li>
              <Link href="/GSC"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               CP12 Gas Safety Certificate (GSC)
              </Link>
            </li>
            <li>
              <Link href="/LRA"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Legionella Risk Assessment (LRA)
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left lg:mx-auto">
          <p className="text-lg font-medium text-[#2c3f7c]">RESOURCES</p>

          <ul className="mt-4 sm:mt-8 space-y-4 text-sm">
            <li>
              <Link href="/faq"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
              FAQs
              </Link>
            </li>

            <li>
              <Link href="/troubleshooting"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
                Troubleshooting
              </Link>
            </li>

            <li>
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                
              >
                Community
              </Link>
            </li>
            <li>
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                
              >
                Video Tutorials
              </Link>
            </li>
            <li>
              <Link href="/blog"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                 onClick={handleScrollToTop}
              >
               Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left lg:mx-auto">
          <p className="text-lg font-medium text-[#2c3f7c]">FOLLOW US</p>

          <ul className="mt-4 sm:mt-8 space-y-4 text-sm">
            <li className="flex justify-center lg:justify-start transition text-[#2c3f7c] hover:text-blue-500">
              <span className="mr-2">
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              </span>
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                
              >
              Instagram 
              </Link>
            </li>

            <li className="flex justify-center sm:justify-center lg:justify-start transition text-[#2c3f7c] hover:text-blue-500">
            <span className="mr-2">
                 <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg> 
              </span>
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                
              >
               Facebook
              </Link>
            </li>

            <li className="flex justify-center sm:justify-center lg:justify-start transition text-[#2c3f7c] hover:text-blue-500">
            <span className="mr-2">
            <svg className="size-6 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  fill="currentColor">
  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
</svg>
              </span>
            
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
               
              >
               Linkedin
              </Link>
            </li>
            <li className="flex justify-center sm:justify-center lg:justify-start transition text-[#2c3f7c] hover:text-blue-500">
            <span className="mr-2">
            <svg className="size-6 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
  <path fillRule="evenodd" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
</svg>
             </span>
              <Link href="#"
                className="transition text-[#2c3f7c] hover:text-blue-500"
                
              >
                YouTube
              </Link>
             
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <div className="mt-12 border-t pt-6 border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block underline transition text-[#2c3f7c] hover:text-blue-500"
            href="#"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            className="inline-block underline transition text-[#2c3f7c] hover:text-blue-500"
            href="#"
          >
            Privacy Policy
          </a>
        </p>

        <p className="mt-4 text-sm sm:order-first sm:mt-0 text-gray-400">
          &copy; 2022 Company Name
        </p>
      </div>
    </div> */}
  </div>
</footer>
    );
  }
  export default Footer;