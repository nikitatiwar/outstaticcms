"use client";
import { useState, Suspense, useEffect, useRef } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import Faq from "../assets/images/faq.svg";
import Link from 'next/link';
import Image from "next/image";
const FAQ = () => {
  const [expanded, setExpanded] = useState("firstList-0");
  const faqRefs = useRef([]);
  const toggleFAQ = (list, index) => {
    const key = `${list}-${index}`;  // create a unique key for each item
    setExpanded(expanded === key ? null : key); // Toggle the FAQ item
  };
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const scrollToSection = (id) => {
    // Find the section element by id and scroll to it
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Scroll smoothly to the element
        block: 'start',     // Align the element to the top of the viewport
      });
    }
  };
  return (
  <div>
    <Header/>
    <div 
      className="items-center max-w-7xl grid-cols-2 mx-auto overflow-x-hidden md:grid lg:mt-3 xl:mt-5 sm:px-4 lg:px-0"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div className="px-3 sm:pr-2 pt-14 pb-6 md:py-0 md:pt-10">
        <h1 className="text-5xl font-semibold text-black xl:text-7xl">
          <span className="block w-full">Frequently <br/> Asked <br/>Questions</span>
        </h1>
      </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-6 px-3 sm:px-0">
        <Image 
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto lg:pb-0"
          src={Faq}
          alt="Awesome hero page image"
          width={500}
          height={488}
        />
      </div>
    </div>
  
    <div className="pt-4 pb-10 lg:py-24 max-w-7xl mx-auto md:grid grid-cols-[1fr,3fr] gap-12 sm:px-8 lg:px-0">
      <div className="flex flex-col text-left p-4 sm:p-0 sm:pb-8 md:pb-0">
      <ul className="border-l border-l-[#d2d5d9] text-base">
        <li className="py-2 pl-4">
        <Link href="#plansPricing"
        className="text-gray-700 hover:text-gray-900" onClick={() => scrollToSection("plansPricing")}>Plans & Pricing</Link>
        </li>
        <li className="py-2 pl-4">
        <Link href="#usersLicensing"
         className="text-gray-700 hover:text-gray-900" onClick={() => scrollToSection("usersLicensing")}>Users & Licensing</Link>
        </li>
        <li className="py-2 pl-4">
        <Link href="#certificates"
         className="text-gray-700 hover:text-gray-900" onClick={() => scrollToSection("certificates")}>Certificates</Link>
        </li>
        <li className="py-2 pl-4">
        <Link href="#devices"
         className="text-gray-700 hover:text-gray-900" onClick={() => scrollToSection("devices")}>Devices</Link>
        </li>
      </ul>
      </div>
   <div>   
    <div className="shadow-[0_0.375em_2.8125em_0_#d2d5d9] m-4 mb-6 sm:mb-4 sm:m-0 rounded-lg pb-6" id="plansPricing">  
     <div className="px-8 pt-6">
     <h2 className="text-2xl text-gray-700">Plans and Pricing</h2>
     </div>
     <div className="lg:grid grid-cols-2">
      <ul className="px-8 py-0 md:py-6"> 
        {[
          {
            question: "Do I have to pay per certificate?",
            answer:
              "Nope! You can create and export an unlimited number of certificates included in your membership.",
          },
          {
            question: "What is the cost?",
            answer:
              "There are various membership levels depending on how many certificate types you’d like to access and how many users you want on your plan. You can discover and compare membership plans here",
            btn: "View Plans",   
          },
          {
            question: "What are the membership types?",
            answer:
              "The Basic, Professional, and Enterprise memberships include varying numbers of users to suit your business needs. For the full membership comparison, visit our pricing grid here",
            btn: "View Plans"  
          },
          {
            question: "How can I switch between memberships?",
            answer:
              "We understand if your needs change! To change your membership, please visit the membership section of your account on a web browser. If you switch plans during your membership, you will be charged the price difference before being able to upgrade.",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `firstList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('firstList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `firstList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `firstList-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `firstList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `firstList-${index}` ? `${faqRefs.current[index]?.scrollHeight}px` : "0", 
                overflow: "hidden",
              }}
            >
              <div ref={(el) => faqRefs.current[index] = el} id={`faq-content-first-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600">{item.answer}</div>
              {item.btn ? (
            <Link href="/pricing"
              className="inline-block rounded bg-green-600 mt-2 px-6 py-2 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none">
             {item.btn}
            </Link> 
        ): null}              
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="px-8 py-0 md:py-6">
        {[
          {
            question: "How can I cancel my membership?",
            answer:
              "If you’d like to leave us, you can cancel your membership through the membership section of your account on a web browser.",
          },
          {
            question: "Why is the app different from the website?",
            answer:
              "We understand that most of our customers are small businesses with multiple employees. For this reason, we’ve structured our memberships so that a single admin from your business can oversee all users of your account.  The admin has the ability to oversee membership/payments, access invoices, and manage users. The admin user can only login on the website.",
          },
          {
            question: "Can I login to the app with my admin account?",
            answer:
              "No, only users can login to the app. You will need to login into the admin portal and create a user profile for yourself to access the app. If you are on our Basic plan, only one user total will be able to access the app.",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `secondList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('secondList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `secondList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `secondList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `secondList-${index}` ? `${document.getElementById(`faq-content-second-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-second-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600" id="usersLicensing">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div> 
      </div> 

      <div className="shadow-[0_0.375em_2.8125em_0_#d2d5d9] m-4 mb-6 sm:mb-4 sm:mt-10 sm:m-0 rounded-lg">  
     <div className="px-8 pt-6">
     <h2 className="text-2xl text-gray-700">Users and Licensing</h2>
     </div>
     <div className="lg:grid grid-cols-2">
      <ul className="px-8 py-0 md:py-6">
        
        {[
          {
            question: "What is the difference between an admin and a user?",
            answer:
              "An admin account is for a manager within your organisation. This account has controls over membership, app users, and certificate customisation. Users are individuals who use the app to create certificates.",
          },
          {
            question: "Can I purchase membership through the app?",
            answer:
              "To purchase a membership, please visit our website on any web browser. Signing up and purchasing a membership will make you the admin of your account with the ability to add users from your organisation.",
          },
          {
            question: "Lost password/login details",
            answer:
              "If you are an admin, you can reset your password on our website here. If you are a user, please contact your admin for your login details.",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `thirdList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('thirdList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `thirdList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `thirdList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `thirdList-${index}` ? `${document.getElementById(`faq-content-third-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-third-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="px-8 py-0 md:py-6">
        {[
           {
            question: "Where can I find my invoice?",
            answer:
              "In your admin account, access _____. From here, you can download invoices",
          },
          {
            question: "How to license a device",
            answer:
              "ANSWER TBD",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `fourthList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('fourthList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `fourthList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `fourthList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `fourthList-${index}` ? `${document.getElementById(`faq-content-fourth-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-fourth-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600" id="certificates">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div> 
      </div> 

      <div className="shadow-[0_0.375em_2.8125em_0_#d2d5d9] m-4 mb-6 sm:mb-4 sm:mt-10 sm:m-0 rounded-lg">  
     <div className="px-8 pt-6">
     <h2 className="text-2xl text-gray-700">Certificates</h2>
     </div>
     <div className="lg:grid grid-cols-2">
      <ul className="px-8 py-0 md:py-6">
        
        {[
          {
            question: "What certificates are included?",
            answer:
              "Our certificates include: Portable Appliance Testing (PAT), Electrical Installation Condition Report (EICR), Electrical Installation Certificate (EIC), Minor Works Certificates (MWC), Emergency Lighting Certificate , Fire Alarm Certificate, CP12 Gas Safety Certificate (GSC), & Legionella Risk Assessment (LRA)",
          },
          {
            question: "Are the certificates ___ certified?",
            answer:
             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga nihil aliquid error.",
          },
          {
            question: "Can I include my company logo/scheme logos?",
            answer:
              "Yes! Admin accounts can upload their company logo and affiliated scheme logos within the admin portal. These images will automatically load into the user accounts when each device is licensed. If a user needs to change these images, they can do so in the app.",
          },
          {
            question: "How can I change my name and signature on my certificates?",
            answer:
              "Users can change these details in the app under the “account” tab.",
          },
          {
            question: "How are my certificates stored?",
            answer:
              "All certificates will be stored locally on your device.",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `fifthList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('fifthList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `fifthList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `fifthList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `fifthList-${index}` ? `${document.getElementById(`faq-content-fifth-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-fifth-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="px-8 py-0 md:py-6">
        {[
           {
            question: "How do I export my files?",
            answer:
              "From the certificate library, click on the three dots (image). Select share, where you can airdrop, email, message, or whatsapp share your certificate.",
          },
          {
            question: "Can I batch export?",
            answer:
              "Yes! In the certificate library, find the “select” button in the top right corner. From here, you can select any number of certificates to batch export. You can also choose to export all files if you’d like to save a full backup.",
          },
          {
            question: "How to find old certificates?",
            answer:
              "From the app’s home page, select “Certificate Library”. From here, you can search all certificates by file name.",
          },
          {
            question: "How to backup files? What if it’s deleted?",
            answer:
              "If you delete the app off of your device, ALL CERTIFICATES WILL BE PERMANENTLY DELETED. Please ensure to regularly export your certificates to another device. We have a handy backup/export all function if you would like to routinely back up all of your files",
          },
          {
            question: "How do I name files?",
            answer:
              `The first page of all certificates includes the property address for the certificate. After entering this and continuing to the next page, your certificate will auto-save with the following file name format: “CERT TYPE - ADDRESS (first line) - TEST DATE.pdf” 
              To rename your file, select the certificate from the certificate library and click on the three dots (image), where you will find a selection for “rename”",
            answerOne: "Example: PAT-1 London Road-11/08/24.pdf" ` ,
            example : "Example: PAT-1 London Road-11/08/24.pdf ",
            answerOne : `To rename your file, select the certificate from the certificate library and click on the three dots (image), where you will find a selection for “rename”.`,
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `sixthList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('sixthList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `sixthList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `sixthList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `sixthList-${index}` ? `${document.getElementById(`faq-content-sixth-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-sixth-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600" id="devices">{item.answer}</div>
                {
              item.example ? (
                  <>
                 <div className="space-y-2 my-4 leading-relaxed text-gray-600" id="devices">
                   {item.example}
                 </div>
                <div className="space-y-2 leading-relaxed text-gray-600" id="devices">
                 {item.answerOne}
                 </div> </>) : null
}              
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div> 
      </div> 
      <div className="shadow-[0_0.375em_2.8125em_0_#d2d5d9] m-4 mb-6 sm:mb-4 sm:mt-10 sm:m-0 rounded-lg">  
     <div className="px-8 pt-6">
     <h2 className="text-2xl text-gray-700">Devices</h2>
     </div>
     <div className="lg:grid grid-cols-2">
      <ul className="px-8 py-0 md:py-6">
        
        {[
          {
            question: "Does Total Cert work without data?",
            answer:
              "Our app works completely offline, saving your certificates locally to your device.",
          },
          {
            question: "Can I use my account on multiple devices?",
            answer:
             "Your membership can include licenses for multiple users. Each user can only be licensed on one device.",
          },
          {
            question: "What if my device breaks or I get a new one?",
            answer:
              "Through the admin portal, you can un-license and re-license a new device for each user. Since your files are stored locally on your device, please backup all files regularly and be sure to export all certificates before switching devices.",
            license : "Licensing a new device for a user does Not transfer old certificates to the new device.",
          },
          {
            question: "Does Total Cert work on a phone?Does Total Cert work on a phone?",
            answer:
              "At this time we recommend using the app only on a tablet device",
          },
          {
            question: "Can I use android devices?",
            answer:
              "At this time we are only compatible with iOS devices.",
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `seventhList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('seventhList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `seventhList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `sixthList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `seventhList-${index}` ? `${document.getElementById(`faq-content-seventh-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-seventh-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600">{item.answer}</div>
                {item.license ? <span className="text-gray-700 font-medium">{item.license}</span> : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="px-8 py-0 md:py-6">
        {[
           {
            question: "What devices is it compatible with?",
            answer:
              "Total Cert is only compatible with iOS devices. We recommend using a tablet.",
          },
          {
            question: "Are there multiple apps for the different certificate types?",
            answer:
              "All of the certificate types are included in one app! We understand that not every business will need to use every certificate, so there are tiers in our membership model to help you pay less and use only the certificates you need. See our pricing grid here",
            btn : "View Plans" , 
          },
          {
            question: "Syncing between devices?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat quisquam veritatis ducimus."
          },
          {
            question: "Registering Users",
            answer:
              "Upon registering and selecting a membership type, the account admin will be given a set number of users to include in the account. The account admin will be able to create usernames for each user and administer a company password for all users.",
          },
          {
            question: "Licensing Devices",
            answer:
              `This entire process requires Wifi access Download the app from the Apple App Store on your iOS tablet. At the login page, enter your username and password. Since this is the first time using your device, you will be asked to confirm your device. Click confirm, and that’s it! After licensing the device, the user can create unlimited certificates on the app.` 
          },
        ].map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left border-base-content/10 text-gray-900"
              aria-expanded={expanded === `eigthList-${index}` ? "true" : "false"}
              onClick={() => toggleFAQ('eigthList', index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
          className={`flex-shrink-0 w-3 h-3 ml-auto fill-current transition duration-200 ease-out ${
            expanded === `eigthList-${index}` ? 'rotate-45' : ''
          }`} 
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Plus sign (Horizontal line) */}
         <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out rotate-90 ${
              expanded === `List-${index}` ? 'rotate-90' : ''
            }`} 
          />
          {/* Cross sign (Vertical line when expanded) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded === `sixthList-${index}` ? 'rotate-180' : ''
            }`} 
          />
        </svg>
            </button>

            {/* FAQ Content: Only visible if this FAQ is expanded */}
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: expanded === `eigthList-${index}` ? `${document.getElementById(`faq-content-eighth-${index}`).scrollHeight}px` : "0",
                overflow: "hidden",
              }}
            >
              <div id={`faq-content-eighth-${index}`} className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed text-gray-600">{item.answer}</div>
                {item.btn ? (
            <Link href="/pricing"
              className="inline-block mt-2 rounded bg-green-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none">
             {item.btn}
            </Link> 
           ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div> 
      </div> 
      <div className="bg-[#BFD7ED] mt-10 px-5 py-4 text-center">Can’t find the answer you’re looking for? Visit our <Link
              href={"/troubleshooting"}
              className="inline-block rounded ml-2 bg-[#2c3f7c] px-6 py-2 text-base font-medium text-white transition hover:bg-blue-500 focus:outline-none"
            >
             TroubleShooting Page
            </Link></div>
      </div>    
    </div>
    <Suspense fallback={<div>Loading...</div>}>
    <Footer/>
      </Suspense>
    </div>   
  );
};

export default FAQ;
