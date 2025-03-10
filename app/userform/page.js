// "use client";

// import Header from "../header/page"
// import Footer from "../footer/page"
// import Loader from "../loader"
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';


// export default function Contact() {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth',
//     });
//   }, []);

//   const router = useRouter();
//   const { selectedPlan } = router.query || {};
//   // const [agreed, setAgreed] = useState(false)
//   const [formData, setFormData] = useState({
//     organization: {
//       name: '',
//       address: '',
//       email: '',
//       phone: '',
//       active_plan_id: selectedPlan.id,
//     },
//     user: {
//       first_name: '',
//       last_name: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     organizationName: '',
//     email: '',
//     userEmail: '',
//     phone: '',
//     address: '',
//     password: '',
//   });
// const [submitting, setSubmitting] = useState(false);
// const [showModal,setShowModal]=useState(false);
// const [showErrorModal, setShowErrorModal] = useState(false);
// const handleChange = (e) => {
//   const { name, value } = e.target;
//    if (name.startsWith('organization')) {
//     setFormData({
//       ...formData,
//       organization: {
//         ...formData.organization,
//         [name.split('.')[1]]: value, // Extract the field name dynamically (e.g., 'name', 'address', etc.)
//       },
//     });
//   } else if (name.startsWith('user')) {
//     setFormData({
//       ...formData,
//       user: {
//         ...formData.user,
//         [name.split('.')[1]]: value, // Extract the field name dynamically (e.g., 'username', 'email', etc.)
//       },
//     });
//   }
// };
// console.log(selectedPlan.id)
// const closeModal = () => {
//   setShowModal(false);
// };
// const closeBackenErrorModal = () =>{
//   setShowErrorModal(false);
// }
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const phoneRegex = /^\d{10}$/;
//     const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const nameRegx = /^[A-Za-zÀ-ÿ ,.'-]+$/;
//     const orgRegx = /^[A-Za-zÀ-ÿ ,.'-]+$/;
//     const addressRegx = /^[A-Za-zÀ-ÿ ,.'-]+$/;

//     let newErrors = { ...errors }; // Copy the error state to update

//     const trimAndValidate = (fieldValue) => fieldValue.trim() !== '';

//     // Validate each field and set errors
//     newErrors.firstName = trimAndValidate(formData.user.first_name) && nameRegx.test(formData.user.first_name) ? '' : 'Please enter a valid first name';
//     newErrors.lastName = trimAndValidate(formData.user.last_name) && nameRegx.test(formData.user.last_name) ? '' : 'Please enter a valid last name';
//     newErrors.username = trimAndValidate(formData.user.username) && nameRegx.test(formData.user.username) ? '' : 'Please enter a valid username';
//     newErrors.organizationName = trimAndValidate(formData.organization.name) && orgRegx.test(formData.organization.name) ? '' : 'Please enter a valid organization name';
//     newErrors.email = trimAndValidate(formData.organization.email) && emailRegex.test(formData.organization.email) ? '' : 'Please enter a valid email!';
//     newErrors.userEmail = trimAndValidate(formData.user.email) && emailRegex.test(formData.user.email) ? '' : 'Please enter a valid email!';
//     newErrors.phone = trimAndValidate(formData.organization.phone) && phoneRegex.test(formData.organization.phone) ? '' : 'Please enter exactly 10 digits!';
//     newErrors.address = trimAndValidate(formData.organization.address) && addressRegx.test(formData.organization.address) ? '' : 'Please enter a valid address';
//     newErrors.password = trimAndValidate(formData.user.password) && passwordRegx.test(formData.user.password) ? '' : 'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character';

//     setErrors(newErrors);
//     if (Object.values(newErrors).some(error => error !== '')) {
//       return;
//     }

//   setSubmitting(true);
//   const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
//   const RegisterOrgUrl = process.env.NEXT_PUBLIC_REGISTER_ORG;
//     console.log("backend url",BackendUrl);
//   // Add your submission logic here
//   try {
//     const headers = {
//         "Content-Type":"application/json"
//      }
//       const payload = {
//       organization: {
//         ...formData.organization,
//         name: formData.organization.name.trim(), // Trim spaces for organization name
//         address: formData.organization.address.trim(), // Trim spaces for address
//         email: formData.organization.email.trim(), // Trim spaces for email
//         phone: formData.organization.phone.trim(), // Trim spaces for phone
//         active_plan_id: formData.organization.active_plan_id || 2 // Default value for active_plan_id if not set
//       },
//       user: {
//         ...formData.user,
//         first_name: formData.user.first_name.trim(), // Trim spaces for first name
//         last_name: formData.user.last_name.trim(), // Trim spaces for last name
//         username: formData.user.username.trim(), // Trim spaces for username
//         email: formData.user.email.trim(), // Trim spaces for user email
//         password: formData.user.password.trim(),
//       },
//     };
//     const response = await fetch(BackendUrl+ RegisterOrgUrl, {
//         method:"POST",
//         headers:headers,
//         body: JSON.stringify(payload) 
//       });
    
//    if (!response.ok) {
//      console.log(formData)
//      setShowErrorModal(true);
//        setSubmitting(false);
//         throw new Error('Network response was not ok'); 
//       }
    
//         const data = await response.json();
//         console.log('Data received from server:', data);

//     setTimeout(() => {
//         setFormData({
//           organization: { name: '', address: '', email: '', phone: '', active_plan_id: selectedPlan.id },
//           user: { first_name: '', last_name: '', username: '', email: '', password: '' },
//         });
//         setSubmitting(false);
//         setShowModal(true);
//         setTimeout(() => {
//             setShowModal(false);
//             if (data.url) {          
//               localStorage.setItem("Payment", "true");
//               window.location.href = data.url;
//        }   
//         }, 3000);
//     }, 2000);
// } catch (error) { 
//     console.error('Error submitting form:', error);}

// };

//   return (
//   <div> 
//    <Header/>
//     <div className="bg-white px-6 py-24 sm:py-16 lg:px-8">
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//         />
//       </div>
//       <div className="mx-auto max-w-2xl text-center">
//         <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Create your account to buy this plan</h1>
//       </div>
//       {submitting && <Loader />}
//       <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="first-name" className="block text-base font-semibold text-gray-900">
//               First name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name" value={formData.user.first_name}
//                 name="user.first_name" onChange={handleChange}
//                 type="text" required
//                 autoComplete="given-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//                <p className={`text-red-400 ${errors.firstName ? '' : 'hidden'}`}>{errors.firstName}</p>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="last-name" className="block text-base font-semibold text-gray-900">
//               Last name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="last-name" value={formData.user.last_name}
//                 name="user.last_name" onChange={handleChange}
//                 type="text"
//                 autoComplete="family-name"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//                <p className={`text-red-400 ${errors.lastName ? '' : 'hidden'}`}>{errors.lastName}</p>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="company" className="block text-base font-semibold text-gray-900">
//               Username
//             </label>
//             <div className="mt-2.5">
//             <input
//              id="username"
//              required value={formData.user.username}
//              name="user.username"
//              onChange={handleChange}
//              type="text"
//              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
// /> 
//            <p className={`text-red-400 ${errors.username ? '' : 'hidden'}`}>{errors.username}</p>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="company" className="block text-base font-semibold text-gray-900">
//               Organization
//             </label>
//             <div className="mt-2.5">
//             <input
//              id="company" value={formData.organization.name}
//              required 
//              name="organization.name"
//              onChange={handleChange}
//              type="text"  autoComplete="organization"
//              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
// />
//         <p className={`text-red-400 ${errors.organizationName ? '' : 'hidden'}`}>{errors.organizationName}</p>

//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-base font-semibold text-gray-900">
//             Organization Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email" value={formData.organization.email}
//                 name="organization.email" onChange={handleChange} required
//                 type="email"
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//               <p className={`text-red-400 ${errors.email ? '' : 'hidden'}`}>{errors.email}</p>
//             </div>
//           </div>
//             <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-base font-semibold text-gray-900">
//             User Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="user_email" value={formData.user.email}
//                 name="user.email" onChange={handleChange} required
//                 type="email"
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//                <p className={`text-red-400 ${errors.email ? '' : 'hidden'}`}>{errors.email}</p>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="address" className="block text-base font-semibold text-gray-900">
//               Address
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="address" value={formData.organization.address}
//                 name="organization.address" onChange={handleChange}
//                 type="text"
//                 autoComplete="address"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//                <p className={`text-red-400 ${errors.address ? '' : 'hidden'}`}>{errors.address}</p>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="phone-number" className="block text-base font-semibold text-gray-900">
//               Phone number
//             </label>
//             <div className="relative mt-2.5">
//               <div className="absolute inset-y-0 left-0 flex items-center">
//                 <label htmlFor="country" className="sr-only">
//                   Country
//                 </label>
//               </div>
//               <input
//                 id="phone-number" required  value={formData.organization.phone}
//                 name="organization.phone" onChange={handleChange}
//                 type="tel"
//                 autoComplete="tel"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
//                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//               <p className={`text-red-400 ${errors.phone ? '' : 'hidden'}`}>{errors.phone}</p>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-base font-semibold text-gray-900">
//               Password
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="password"
//                 name="user.password" onChange={handleChange} required
//                 type="password"  value={formData.user.password}
//                 autoComplete="password"
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2c3f7c] sm:text-sm/6"
//               />
//                <p className={`text-red-400 ${errors.password ? '' : 'hidden'}`}>{errors.password}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//         <button
//               type="submit"
//               className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 bg-[#2c3f7c] hover:bg-blue-500`}
//             >
//               Submit
//             </button>
//         </div>
//       </form>
//       {showModal && (<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="text-center flex flex flex-col items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-green-500">
//   <path 
//     fillRule="evenodd" 
//     d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" 
//     clipRule="evenodd" 
//   />
// </svg>


//               <h2 className="text-xl font-semibold text-gray-800 mt-4">Thank You!</h2>
//               <p className="text-gray-600 mt-2">An activation link is send to your email.</p>
//               <div className="mt-4">
//                 <button
//                   onClick={closeModal}
//                   className="px-6 py-2 bg-green-500 text-white rounded-md"
//                 >
//                   Ok
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>)}  
//         {showErrorModal && (<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="text-center flex flex flex-col items-center">
//             <svg className="fill-current text-red-500 size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//   <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
// </svg>
//               <p className="text-gray-600 mt-2">Network Response is not ok</p>
//               <div className="mt-4">
//                 <button
//                   onClick={closeBackenErrorModal}
//                   className="px-6 py-2 bg-red-500 text-white rounded-md"
//                 >
//                   Ok
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>)}
//     </div>
//    <Footer/> 
//     </div>   
//   )
// }
export default function Userform() {
  return (
    <div>
      <h1>Pricing</h1>
      <p>This is the userform page.</p>
    </div>
  );
}