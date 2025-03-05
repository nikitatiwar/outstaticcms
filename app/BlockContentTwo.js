import Image from 'next/image';
import Link from 'next/link';
import tree from "./assets/images/plan.svg";
import SaveTime from "./assets/images/SaveTime.svg";
import User from "./assets/images/user.svg";

function BlockContentTwo() {
  return (
    <section className="py-10 md:py-16 bg-[#8da9c4]" id="services">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center sm:text-6xl">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-6">
            <Image
              src={tree}
              alt="Choose your plan"
              className="h-[8rem] w-[8rem]"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Choose your plan</h3>
              <p className="text-gray-700 text-base">
                Streamline your processes by selecting a plan tailored to fit your company size and certificate needs.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-6">
            <Image
              src={User}
              alt="Register your users"
              className="h-[8rem] w-[8rem]"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Register your users</h3>
              <p className="text-gray-700 text-base">
                As the admin of your company’s account, you’ll be able to create and manage user accounts for your employees.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-6">
            <Image
              src={SaveTime}
              alt="Save time & money"
              className="h-[8rem] w-[8rem]"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Save time & money</h3>
              <p className="text-gray-700 text-base">
                With quick-use certificate templates, easy export, and customizable features, Total Cert streamlines the on-site creation of reports for your employees.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact"
             className="inline-block rounded bg-[#2c3f7c] px-12 py-3 text-base font-medium text-gray-100 transition hover:bg-blue-500 focus:outline-none">
              Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlockContentTwo;