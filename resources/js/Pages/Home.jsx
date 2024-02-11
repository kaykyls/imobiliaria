import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/Banner';
import Card from '@/Components/Card';
import bannerImg from '/public/img/banner.jpg'
import Contact from '@/Components/Contact';
import About from '@/Components/About';
import Testimonials from '@/Components/Testimonials';

export default function Home({properties, properties_pagination}) {
    console.log(properties, properties_pagination)

    return (
        <Layout>
            <Banner/>
            
            <div id="properties" className="container mx-auto mb-20">
                <div className="my-8">
                    <h2 className="text-2xl">Imóveis</h2>
                    <span className="w-10 block h-1 bg-main-color"></span>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
                    {properties.map((property, index) => (
                        <Card
                            key={index}
                            href={`/properties/${property.id}`}
                            img={property.images[0]}
                            title={property.title}
                            value={property.price}
                            rooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                        />
                    ))}
                </div>
                <div>
                    <div class="flex items-center justify-between bg-white mt-8">
                        <div class="flex flex-1 justify-between sm:hidden">
                            <Link href={properties_pagination.prev_page_url + "#properties"} class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</Link>
                            <Link href={properties_pagination.next_page_url + "#properties"} class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</Link>
                        </div>
                        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                            <div>
                                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <Link href={properties_pagination.prev_page_url + "#properties"} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Previous</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                    {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
                                    <div aria-current="page" class="relative z-10 inline-flex items-center bg-slate-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{properties_pagination.current_page}</div>
                                    {/* <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                    <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a> */}
                                    <Link href={properties_pagination.next_page_url + "#properties"} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Next</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Testimonials/>
            <Contact/>
            
        </Layout>
    );
}
