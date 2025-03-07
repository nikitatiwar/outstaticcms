"use client";
import Footer from "../footer/page";
import Header from "../header/page";
import Blog1 from "../assets/images/blog1.avif";
import Blog2 from "../assets/images/blog2.avif";
import Blog3 from "../assets/images/blog3.avif";
import Blog4 from "../assets/images/blog4.avif";
import Blog6 from "../assets/images/blog6.avif";
import Blog7 from "../assets/images/blog7.avif";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
    return (
      <div>  
        <Header/>
        <section className="container max-w-screen-xl mx-auto p-10 md:py-18 px-0 md:p-10 md:px-0">
          <h2 className="text-6xl font-medium mb-9 px-10 md:p-0">Blog</h2>  
      <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
       <div> 
        <Image
          className="xl:max-w-5xl"
          src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1860"
          alt="Coffee from Heaven"
          width={1860}
          height={750}
        />
       </div> 
        <div className="content bg-white p-2 pt-8 md:p-12 sm:pb-12 lg:max-w-md w-full lg:absolute top-40 right-4">
          <div className="flex justify-between font-bold text-sm">
            <p>Product Review</p>
            <p className="text-gray-400">17th March, 2021</p>
          </div>
          <h2 className="text-3xl font-semibold mt-4 md:mt-10">Lorem, ipsum dolor.</h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis
            minus rem adipisci aliquid.
          </p>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-blue-500">
            Read More
          </button>
        </div>
      </section>
    </section>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-16 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {/* Blog Card 1 */}
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog1}
            className="w-full mb-3 h-[55%]"
            alt="Blog 1"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"
  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Can coffee make you a better developer?
                </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
            <Link href="#">
                    <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                      width={40}
                      height={40}
                    />
                </Link>
              <div className="text-sm">
                <Link  href="#"
                  className="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                >
                  Jonathan Reinink
                </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog2}
            className="w-full mb-3 h-[55%]"
            alt="Blog 2"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"
                   className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Can coffee make you a better developer?
                </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
            <Link href="#">
                    <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                      width={40}
                      height={40}
                    />
                </Link>
              <div className="text-sm">
              <Link href="#"
                     className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                      Jonathan Reinink
                  </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog3}
            className="w-full mb-3 h-[55%]"
            alt="Blog 3"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"
className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Can coffee make you a better developer?
                </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
            <Link href="#">
                    <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                      width={40}
                      height={40}
                    />

                </Link>
              <div className="text-sm">
              <Link href="#"
                     className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                      Jonathan Reinink
                  </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
         {/* Blog Card 1 */}
         <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog6}
            className="w-full mb-3 h-[55%]"
            alt="Blog 1"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"
                   className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Can coffee make you a better developer?
                </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
            <Link href="#">
                    <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                      width={40}
                      height={40}
                    />
                </Link>
              <div className="text-sm">
              <Link href="#"
  className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                      Jonathan Reinink

                  </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
          {/* Blog Card 2 */}
          <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog7}
            className="w-full mb-3 h-[55%]"
            alt="Blog 2"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Can coffee make you a better developer?             
                </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
            <Link href="#">
                    <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                      width={40}
                      height={40}
                    />
                </Link>
              <div className="text-sm">
              <Link href="#"
                    className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                      Jonathan Reinink
                  </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
         {/* Blog Card 3 */}
         <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <Image
            src={Blog4}
            className="w-full mb-3 h-[55%]"
            alt="Blog 3"
            width={500}
            height={300}
          />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
                Members only
              </p>
              <Link href="#"          
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                Can coffee make you a better developer?
              </Link>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <Link href="#">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://tailwindcss.com/img/jonathan.jpg"
                  alt="Avatar of Jonathan Reinink"
                  width={40}
                  height={40}
                />
              </Link>
              <div className="text-sm">
                <Link href="#"    
                 className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                  Jonathan Reinink
                </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <Footer/>
      </div>
    )
  }