import Link from 'next/link';

function BlockContentThree() {
  return (
    <section className="py-10 md:py-16" id="services">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-8 text-center sm:text-6xl max-w-[40rem] mx-auto">Affordable plans for every company</h2>
        <section>
          <div className="container pt-6 md:pt-12">
            <div className="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
              <div className="w-full xl:w-1/4 md:w-2/6">
                <div className="relative flex flex-col h-full p-8 bg-[#BFD7ED] rounded-xl hover:border-white">
                  <span className="mb-4 text-base font-medium tracking-widest text-gray-900 uppercase"> Basic </span>
                  <div className="flex items-end text-3xl font-black leading-none text-gray-900 lg:text-4xl mb-4">
                    <span>From £4.99</span>
                  </div>
                  <span className="flex items-center mb-8 text-base font-medium tracking-tight text-gray-900"> For the sole-trader </span>
                  <div className="mt-8">
                    <Link href="/pricing"
                     className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-gray-900 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#E9EFEC]">Compare Plans
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/4 md:w-2/6">
                <div className="relative flex flex-col h-full p-8 bg-[#60A3D9] rounded-xl hover:border-white">
                  <span className="mb-4 text-base font-medium tracking-widest text-gray-900 uppercase"> Pro </span>
                  <div className="flex items-end text-3xl font-black leading-none text-gray-900 lg:text-4xl mb-4">
                    <span>From £9.99</span>
                  </div>
                  <span className="flex items-center mb-16 text-base font-medium tracking-tight text-gray-900">For medium size business</span>
                  <div className="mt-16">
                    <Link href="/pricing"
                       className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-gray-900 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#E9EFEC]">Compare Plans
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/4 md:w-2/6">
                <div className="relative flex flex-col h-full p-8 bg-[#5885AF] rounded-xl hover:border-white">
                  <span className="mb-4 text-base font-medium tracking-widest text-gray-900 uppercase"> Enterprise </span>
                  <div className="flex items-end text-3xl font-black leading-none text-gray-900 lg:text-4xl mb-4">
                    <span>From £14.99</span>
                  </div>
                  <span className="flex items-center mb-24 text-base font-medium tracking-tight text-gray-900">For larger companies</span>
                  <div className="mt-24">
                    <Link href="/pricing"
                      className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-gray-900 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-[#E9EFEC]">Compare Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default BlockContentThree;