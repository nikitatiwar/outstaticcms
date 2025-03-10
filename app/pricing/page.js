// "use client";
// import Header from '../header/page';
// import Footer from '../footer/page';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// function BlockContentOne() {
//   const [anually, setIsAnually] = useState(true);
//   const [plansone, setPlansone] = useState([]);
//   let [planPrices, setPlanPrices] = useState({});
//   const [desc, setDesc] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [groupedPlans, setGroupedPlans] = useState({});
//   const [selectedCertificate, setSelectedCertificate] = useState({
//     planTitle: "",
//     certificateType: "1_cert",
//     id: "",
//   });

//   const router = useRouter();
//   const fetchData = async () => {
//     // Access the environment variable
//     const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
//     const GetPlansUrl = process.env.NEXT_PUBLIC_GET_PLANS_URL;
//     console.log("backend url", BackendUrl);
//     try {
      
//       const response = await fetch(BackendUrl + GetPlansUrl);  
//       if (response.ok) {
//         const result = await response.json();
//         setPlansone(result.data);
//         setLoading(false);
//        console.log(result.data)
//         // Group plans by tier
//         const groupPlansByTier = (plansdata) => {
//           return plansdata.reduce((groups, plandata) => {
//             if (!groups[plandata.plan_tier]) {
//               groups[plandata.plan_tier] = [];
//             }
//             groups[plandata.plan_tier].push(plandata);
//             return groups;
//           }, {});
//         };

//         const grouped = groupPlansByTier(result.data);
//         setGroupedPlans(grouped);  // Set the grouped plans
//         const initialPrices = {};
//         const intialDesc = {};
//         result.data.forEach(plan => {
//           // First, check if the plan has the correct billing cycle
//           if (plan.billing_cycle === 'annual' || plan.billing_cycle === 'monthly') {
            
//             // Check if the annual or monthly condition matches
//             if ((plan.billing_cycle === 'annual' && anually) || (plan.billing_cycle === 'monthly' && !anually)) {
        
//               // Check if we have already set the price for this plan_tier
//               if (!initialPrices[plan.plan_tier]) {
        
//                 // If it's not set, check for the cert type and set the price accordingly
//                 if (plan.cert_type === '1_cert') {
//                   initialPrices[plan.plan_tier] = plan.price_per_year; // For annual plans, use price_per_year
//                   intialDesc[plan.plan_tier] = plan.description;
//                 } else if (plan.cert_type === '3_certs' && !initialPrices[plan.plan_tier]) {
//                   initialPrices[plan.plan_tier] = plan.price_per_year; 
//                   intialDesc[plan.plan_tier] = plan.description;
//                 } else if (plan.cert_type === 'all_certs' && !initialPrices[plan.plan_tier]) {
//                   initialPrices[plan.plan_tier] = plan.price_per_year; 
//                   intialDesc[plan.plan_tier] = plan.description;
//                 }
//               }
//             }
//           }
//         });
//           setPlanPrices(initialPrices);
//                 setDesc(intialDesc);
    
//         if (result.data.length > 0) {
//           const firstPlan = result.data;  
//           if(anually){
//             let plantier, planId;
//             const filteredPlans = firstPlan.filter(plan => plan.plan_tier === 'starter' && plan.cert_type === '1_cert' && plan.billing_cycle === 'annual');
//             filteredPlans.forEach(plan => { 
//               plantier = plan.plan_tier;
//               planId = plan.id;
//               })
//             console.log("firstplan", firstPlan);
//               //  this is setting the default plan
//               setSelectedCertificate({
//                 planTitle: plantier,
//                 certificateType: '1_cert',
//                 id: planId,
//               });
//           }
//         }
        
//       } else {
//         console.error("Failed to fetch data, status:", response.status);
//       }
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//     }
//   };
  
//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth',
//     });
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleCertificateChange = (planTitle, certificateType, plansInTier, id) => {


//   let price = 0;
//   let desc ;
//   const updatedPrices = {};
//   // const updatedDesc = {};
//   plansInTier.forEach(plan => {
//     if (plan.cert_type === certificateType) {
//       if (plan.billing_cycle === "annual" && anually) {
//         price = plan.price_per_year;
//         desc = plan.description;
//         console.log("hey prices herer---",price)
//       } else if (plan.billing_cycle === "monthly" && !anually) {
//         price = plan.price_per_month;
//         desc = plan.description;
//         console.log("hey prices herer-----", price)
//       }
//     }    
//   });
//   console.log("pricesssss: ",price);
//   setPlanPrices(prevState => ({
//     ...prevState,
//     [planTitle]: price,  // Set price for this specific plan
//   }));
//   setDesc(prevState => ({
//     ...prevState,
//     [planTitle]: desc,
//   }));
//   setSelectedCertificate({ planTitle, certificateType, id });
//   };

//   // Toggle between monthly and annual views
//   function handleClick(isAnnual) {
   
//   console.log("selected certificate====",selectedCertificate)
    
//     if (isAnnual === "annual") {
//       setIsAnually(true);
//     }else{
//       setIsAnually(false);
      
//     }
    
//     const updatedPrices = {};
//     const updatedDesc = {};
    
//     plansone.forEach(plan => {
       
//         if (plan.billing_cycle === "annual" && isAnnual === "annual") {
//           if (!updatedPrices[plan.plan_tier]) { 
//           if(plan.cert_type === "1_cert"){
//             updatedPrices[plan.plan_tier] = plan.price_per_year;
//             updatedDesc[plan.plan_tier] = plan.description;
//           } else if(plan.cert_type === "3_certs" && !updatedPrices[plan.plan_tier]){
//             updatedPrices[plan.plan_tier] = plan.price_per_year;
//             updatedDesc[plan.plan_tier] = plan.description;  
//           } else if(plan.cert_type === "all_certs" && !updatedPrices[plan.plan_tier]){
//             updatedPrices[plan.plan_tier] = plan.price_per_year;
//             updatedDesc[plan.plan_tier] = plan.description;
//           }
//         }
//           setPlanPrices(updatedPrices);
//           setDesc(updatedDesc);
    
//           } else if (plan.billing_cycle === "monthly" && isAnnual != "annual") {
//             if(plan.cert_type === "1_cert"){
//               updatedPrices[plan.plan_tier] = plan.price_per_month;
//               updatedDesc[plan.plan_tier] = plan.description;
//               setPlanPrices(updatedPrices);
//               setDesc(updatedDesc);
//             } 
//         }
//     });
   
//     console.log("___", plansone)
//      if(plansone.length > 0){
//        if(isAnnual === "annual"){
//         let planTier, planId;
//         let filteredPlans = plansone.filter(plan => plan.plan_tier === 'starter' && plan.cert_type === "1_cert" && plan.billing_cycle === "annual");
//         filteredPlans.forEach(plan => {
//           planTier = plan.plan_tier;
//           planId = plan.id;
//         })
//         console.log(planId)
//         console.log("*******",filteredPlans);
//         setSelectedCertificate({
//           planTitle: planTier,
//           certificateType: '1_cert',
//           id: planId,
//         });
        
//        }
//        else if(isAnnual === "monthly"){
//         let planTier, planId;
//         let filteredPlans = plansone.filter(plan => plan.plan_tier === 'starter' && plan.cert_type === "1_cert" && plan.billing_cycle === "monthly");
//         filteredPlans.forEach(plan => {
//           planTier = plan.plan_tier;
//           planId = plan.id;
//         })
//         setSelectedCertificate({
//           planTitle: planTier,
//           certificateType: '1_cert',
//           id: planId,
//         });
//        }
//      }
//   }
//   const tierOrder = ['starter', 'professional', 'enterprise'];

//   const handlePurchase = () => {
//     // Send the selected plan data to the user form or another page
//     router.push({
//       pathname: "/userform",
//       query: { selectedPlan: JSON.stringify(selectedCertificate) } // Pass the selected plan using query
//     });
//   };
//   console.log("selected plan---",selectedCertificate)

//   return (
//     <section className="bg-white">
//       <Header />
//       <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-20 lg:px-6">
//         <div className="max-w-screen-md mx-auto mb-2 text-center lg:mb-0">
//           <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
//             Lorem ipsum dolor sit amet consectetur
//           </h1>
//           <p className="mb-0 font-light text-gray-500 sm:text-xl">
//             Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
//           </p>
//         </div>
//         <div className="relative font-inter antialiased">
//           <main className="relative flex flex-col justify-center overflow-hidden">
//             <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
//               {/* Pricing table component */}
//               <div>
//                 {/* Pricing toggle */}
//                 <div className="flex justify-center max-w-[20rem] m-auto mb-8 lg:mb-8">
//                   <div className="relative flex w-full p-1 bg-white rounded-full">
//                     <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
//                       <span
//                         className={`absolute inset-0 w-1/2 bg-[#2c3f7c] rounded-full shadow-sm shadow-green-950/10 transform transition-transform duration-150 ease-in-out ${
//                           anually ? "translate-x-0" : "translate-x-full"
//                         }`}
//                       ></span>
//                     </span>
//                     <button
//                       className={`relative flex-1 text-base font-medium h-12 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-green-300 transition-colors duration-150 ease-in-out ${
//                         anually ? "text-white" : "text-slate-500"
//                       }`}
//                       onClick={() =>  handleClick("annual")} //setIsAnually(true)}
//                       aria-pressed={anually}
//                     >
//                       Yearly
//                     </button>
//                     <button
//                       className={`relative flex-1 text-base font-medium h-12 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-green-300 transition-colors duration-150 ease-in-out ${
//                         anually ? "text-slate-500" : "text-white"
//                       }`}
//                       onClick={() => handleClick("monthly")}//setIsAnually(false)}
//                       aria-pressed={!anually}
//                     >
//                       Monthly
//                     </button>
//                   </div>
//                 </div>
//                 {loading ? (
//            <div className="mx-auto w-12 h-12 rounded-full animate-spin
//            border-2 border-solid border-blue-500 border-t-transparent"></div>

//           ) : (  
//             <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">     
//    {Object.keys(groupedPlans).length === 0 || !Object.values(groupedPlans).some(plans => 
//     plans.some(plan => (anually ? plan.price_per_year : plan.price_per_month))) ? (
//     <div className="text-xl font-semibold text-gray-500">
//       No available plans
//     </div>
//   ) : (
//     Object.keys(groupedPlans)
//       .sort((a, b) => tierOrder.indexOf(a) - tierOrder.indexOf(b)) // Sort tiers by custom order
//       .map((tier) => {
//         const plansInTier = groupedPlans[tier];
//         const examplePlan = plansInTier[0]; // Take the first plan as an example

//         return (
//           <div key={tier} className="h-full">
//             <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
//               <div className="mb-5">
//                 <div className="text-slate-900 text-xl font-semibold mb-2">{tier}</div>
//                 <div className="inline-flex items-baseline mb-2">
//                   <span className="text-slate-900 font-bold text-3xl">$</span>
//                   <span className="text-slate-900 font-bold text-4xl">{planPrices[tier]}</span>
//                   <span className="text-slate-900 font-medium">{anually ? "/year" : "/month"}</span>
//                 </div>
//                 <div className="text-base text-slate-800">{desc[tier]}</div>
//               </div>
//               <div className="text-slate-900 font-bold mb-3">Includes:</div>
//               <ul className="text-slate-800 text-base space-y-3 grow">
//                 <li className="flex items-center">
//                   <svg
//                     className="w-3 h-3 fill-[#2c3f7c] mr-3 shrink-0"
//                     viewBox="0 0 12 12"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                   </svg>
//                   <span>Upto {examplePlan.max_users} users </span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg
//                     className="w-3 h-3 fill-[#2c3f7c] mr-3 shrink-0"
//                     viewBox="0 0 12 12"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                   </svg>
//                   <span className="text-slate-800 font-medium">Certificates: </span>
//                 </li>
//                 <div className="ml-8 !mt-1">
//                   <ul>
//                     {plansInTier && plansInTier.length > 0
//                       ? plansInTier
//                           .sort((a, b) => {
//                             const order = ['1_cert', '3_certs', 'all_certs'];
//                             return order.indexOf(a.cert_type) - order.indexOf(b.cert_type);
//                           })
//                           .map((plan, index) => {
//                             let price = null;
//                             // Check cert_type and set price based on it
//                             if (plan.cert_type === '1_cert') {
//                               price = anually ? plan.price_per_year : plan.price_per_month;
//                             } else if (plan.cert_type === '3_certs') {
//                               price = anually ? plan.price_per_year : plan.price_per_month;
//                             } else if (plan.cert_type === 'all_certs') {
//                               price = anually ? plan.price_per_year : plan.price_per_month;
//                             }
//                             const isChecked =
//                               selectedCertificate.planTitle === examplePlan.plan_tier &&
//                               selectedCertificate.certificateType === plan.cert_type;
//                             if(isChecked && price){
//                               // setPlanPrices(prevState => ({
//                               //   ...prevState,
//                               //   [plan.plan_tier]: price,  
//                               // }));
//                             }
//                               // console.log("*********************",isChecked ? 0: price)
//                             // Only render the price if it exists
//                             return price ? (
//                               <li key={index} className='mb-1'>
//                                 <input
//                                   type="radio"
//                                   name={`group-${examplePlan.plan_tier}`}
//                                   className="mr-2 checked:bg-[#2c3f7c] text-[#2c3f7c] h-3 w-3 focus:ring-[#2c3f7c]"
//                                   checked={isChecked} // Check if this is the selected certificate
//                                   onChange={() =>{                                    
//                                     handleCertificateChange(examplePlan.plan_tier, plan.cert_type, plansInTier, plan.id)
//                                   }
//                                   } 
//                                 />
//                                 {plan.cert_type === '1_cert'
//                                   ? '1 certificate billed '
//                                   : plan.cert_type === '3_certs'
//                                   ? '3 certificates billed '
//                                   : plan.cert_type === 'all_certs'
//                                   ? 'All certificates billed '
//                                   : null}
//                                 {price}
//                               </li>
//                             ) : null;
//                           })
//                       : null}
//                   </ul>
//                 </div>
//               </ul>
//               <div className="mt-5">
//                 <button
//                   className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-base font-medium text-white shadow-sm ${
//                     selectedCertificate?.planTitle === examplePlan.plan_tier
//                       ? 'bg-[#2c3f7c] hover:bg-blue-500'
//                       : 'bg-gray-400 cursor-not-allowed'
//                   } transition-colors duration-150`}
//                   disabled={selectedCertificate?.planTitle !== examplePlan.plan_tier}
//                   onClick={handlePurchase}
//                 >
//                   {selectedCertificate?.planTitle === examplePlan.plan_tier
//                     ? 'Purchase Plan'
//                     : 'Select Certificate'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })
//   )}
// </div>)}

//      {/* custom card */}

//      <div className="bg-white">
//       <div className="relative pt-6">
//         <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-0">
//           <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex border border-slate-200 rounded-2xl">
//             <div className="flex-1 bg-white px-6 py-8 lg:p-8">
//               <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Custom</h3>
//               <p className="mt-4 text-base text-gray-500">
//               Our team is ready to provide you with a personalized quote and assist you with any inquiries you may have.
//               </p>
//               <div className="mt-6">
//       <div className="flex items-center">
//         <h4 className="flex-shrink-0 pr-4 bg-white text-base tracking-wider font-semibold text-rose-600">
//          Includes
//         </h4>
//         <div className="flex-1 border-t-2 border-gray-200"></div>
//       </div>
//       <ul role="list" className="mt-7 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2">
//         <li className="flex items-start lg:col-span-1">
//           <div className="flex-shrink-0">
//             <svg className="h-5 w-5 text-[#2c3f7c]" xmlns="http://www.w3.org/2000/svg"
//                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"></path>
//             </svg>
//           </div>
//           <p className="ml-3 text-base text-gray-700">10+ Certificates</p>
//         </li>
//         <li className="flex items-start lg:col-span-1">
//           <div className="flex-shrink-0">
//             <svg className="h-5 w-5 text-[#2c3f7c]" xmlns="http://www.w3.org/2000/svg"
//                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"></path>
//             </svg>
//           </div>
//           <p className="ml-3 text-base text-gray-700">Reach out to us directly for bulk orders or special requests.</p>
//         </li>
//         <li className="flex items-start lg:col-span-1">
//           <div className="flex-shrink-0">
//             <svg className="h-5 w-5 text-[#2c3f7c]" xmlns="http://www.w3.org/2000/svg"
//                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"></path>
//             </svg>
//           </div>
//           <p className="ml-3 text-base text-gray-700">Lifetime access with no additional costs</p>
//         </li>
//       </ul>
//     </div>
//             </div>
//             <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
      
//               <div className="mt-6">
//                 <div className="rounded-md shadow">
//                   <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2c3f7c] hover:bg-blue-500">
//                    CONTACT SALES
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//               </div>
//               {/* End: Pricing table component */}
//             </div>
//           </main>
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// }

// export default BlockContentOne;
export default function PricingPage() {
  return (
    <div>
      <h1>Pricing</h1>
      <p>This is the pricing page.</p>
    </div>
  );
}