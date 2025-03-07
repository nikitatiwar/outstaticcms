import Link from "next/link";
import Image from 'next/image';
import faq from "./assets/images/faq.jpg";
import blogs from "./assets/images/blogs.jpg";
import Building from "./assets/images/creating.webp";

function BlockContentFour() {
    return (
        <section className="py-10 md:py-16 bg-[#8da9c4]" id="services">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-100 mb-0 md:mb-8 sm:text-6xl">Useful Tips and Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 md:pt-12">
            {/* Service 1 */}
          <Link href={"/faq"}>  
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={faq}
                alt="wheat flour grinding"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">FAQs </h3>
                <p className="text-gray-700 text-base mb-2">Find answers to our more frequently asked questions</p>
                <div className="flex items-center">   
                <span className="mr-1">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              </div>
              </div>
            </div>
            </Link>
            {/* Service 2 */}
            <Link href={"https://youtube.com/watch?v=9FfYOi9ApyU"}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={Building}
                alt="Coffee"
                className="w-full h-64 object-cover rounded-2xl"
              />  
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Creating your first certificate</h3>
                <p className="text-gray-700 text-base mb-2">
                Walk through creating your first certificate step-by-step
                </p>
              <div className="flex items-center">  
                <span href={"https://youtube.com/watch?v=9FfYOi9ApyU"} className="mr-1">Watch now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              </div>
              </div>
            </div>
            </Link>
            {/* Service 3 */}
            <Link href={"/blog"}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 hover:scale-105 transition-transform duration-300">
              <Image
                src={blogs}
                alt="Jowar Flour Grinding"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">TBD TITLE FOR BLOG ARTICLE </h3>
                <p className="text-gray-700 text-base mb-2">Filler Copy </p>
                <div className="flex items-center">  
                <span className="mr-1">Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  export default BlockContentFour;
  