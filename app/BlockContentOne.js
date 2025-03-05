import Image from 'next/image';
import Link from 'next/link';
import Contentthreeimagethree from "./assets/images/Blockcontentthreeimagethree.jpeg";
import Contentthreeimagefour from "./assets/images/Blockcontentthreefour.jpeg";
import Contentthreeimagefive from "./assets/images/Blockcontentthreeimagefive.jpeg";

function BlockContentOne() {
    return (
        <section className="bg-white text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold sm:text-6xl">Why Choose Total Cert?</h2>
                    <p className="mt-4 text-gray-900">
                        Total Cert offers a wide range of certificates to fit your trade company’s needs. Unlimited certificates for Portable Appliance Testing, Legionella Risk Assessments, Electrical Installation Condition Reports, Fire Alarm Certificates, and more…all in one flexible subscription.
                    </p>
                    <div className="mt-12 text-center">
                        <Link href="/contact"
                            className="inline-block rounded bg-[#2c3f7c] hover:bg-blue-500 px-12 py-3 text-base font-medium text-white transition focus:outline-none">
                                Start now!                       
                        </Link>
                    </div>
                </div>

                <section id="projects" className="my-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="grid md:grid-cols-[2fr_3fr] gap-8">
                        <div className="bg-[#f5ebe0] p-10 rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Unlimited Certificates</h3>
                                <p className="mb-4">You can create and export unlimited certificates within Total Cert. Our certificate templates were created with efficiency in mind, so your employees can easily and quickly complete certificates on site.</p>
                            </div>
                            <div>
                                <Image className="rounded-2xl" src={Contentthreeimagethree} alt="Unlimited Certificates" />
                            </div>
                        </div>
                        <div className="bg-[#D9E4EC] p-10 rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Easy Export and File Organisation</h3>
                                <p className="mb-4">All certificates are stored locally on your device. With easy export from the certificate library, you can collect the day’s certificates with a few clicks of a button. Certificates auto-save and are easily searchable.</p>
                            </div>
                            <div className="flex justify-center">
                                <Image className="rounded-2xl w-[80%]" src={Contentthreeimagefour} alt="Easy Export and File Organisation" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="my-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="grid md:grid-cols-[3fr_2fr] gap-8">
                        <div className="bg-[#E3E7F1] p-10 rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">One Account for your company</h3>
                                <p className="mb-4">Your subscription includes an online admin portal and a set number of users. From your admin account, you can manage your subscription, users, company details, and more!</p>
                            </div>
                            <div className="flex justify-center">
                                <Image className="rounded-2xl w-[80%]" src={Contentthreeimagefive} alt="One Account for your company" />
                            </div>
                        </div>
                        <div className="bg-[#E1E5EA] p-10 rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">Affordable Plans for every business</h3>
                                <p className="mb-4">With our flexible plans, you can create the perfect subscription to suit your company’s needs.</p>
                            </div>
                            <div>
                                <Image className="rounded-2xl" src={Contentthreeimagethree} alt="Affordable Plans for every business" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default BlockContentOne;