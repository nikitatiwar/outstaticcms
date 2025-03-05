'use client';

import Aboutimage from "../assets/images/About.avif";
import Aboutimageone from "../assets/images/Aboutimageone.jpeg";
import Image from "next/image";
import Header from '../header/page';
import Footer from "../footer/page";
import Link from "next/link";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-40">
        <Image
          alt="about-us"
          src={Aboutimage}
          title="about_us"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-5xl font-semibold tracking-tight text-center text-white sm:text-9xl">About Us</h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8 text-center">
              We're ready to share our advice and experience
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white">
        {/* Callout */}
        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem sunt eius perferendis inventore.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="testimonial-heading"
          className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Lorem ipsum dolor sit?
            </h2>

            <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">
                    My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer
                    over here!
                  </p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">Shehab , England</cite>
                </div>
              </blockquote>
              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">
                    I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two
                    new items!
                  </p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">Najib, Malaysia</cite>
                </div>
              </blockquote>
              <blockquote className="sm:flex lg:block">
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">
                    Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient,
                    and I know the quality will always be there.
                  </p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">Yousef, New York</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      <section className="overflow-hidden bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-500">Produce faster</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem ipsum dolor</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perspiciatis.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-green-500">
                        <path
                          d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z">
                        </path>
                        <path
                          d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z">
                        </path>
                        <path
                          d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z">
                        </path>
                      </svg>
                      Template driven
                    </dt>
                    <dd className="inline">Inspired by Sendgrid, Mailchimp, and Postmark, we allow you to create and apply
                      templated content to your media.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-green-600">
                        <path fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clipRule="evenodd"></path>
                      </svg>
                      Simple, REST
                    </dt>
                    <dd className="inline">A simple REST API that allows you to create, generate, and manage your content.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-green-500">
                        <path fillRule="evenodd"
                          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                          clipRule="evenodd"></path>
                        <path
                          d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z">
                        </path>
                      </svg>
                      Developer friendly
                    </dt>
                    <dd className="inline">Documented and easy to use, we make it easy to integrate with your existing workflow.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">     
                </Link>
                <Link href="#"
                  className="text-sm font-semibold leading-6 text-gray-700">
                    Schedule a demo
                    <span aria-hidden="true">→</span>
                </Link>
         </div>
       </div>
       <Image src={Aboutimageone} alt="aboutimage" title="about-image"
         className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
     </div>
   </div>
 </section>
      <Footer/>
    </div>
);
}
export default About;

// const Login=()=>{
//   return(
//       <div>
//           <h1>My about page in naxt js</h1>
//       </div>
//   )
// }
// export default Login;