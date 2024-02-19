import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/Banner';
import Card from '@/Components/Card';
import bannerImg from '/public/img/banner.jpg'
import Contact from '@/Components/Contact';
import About from '@/Components/About';
import Testimonials from '@/Components/Testimonials';

export default function Home({properties, properties_pagination}) {
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
                            isForRent={property.isForRent}
                        />
                    ))}
                </div>
                <div>
                    <div className="flex items-center justify-between bg-white mt-8">
                        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    {properties_pagination.prev_page_url ?
                                    <Link href={properties_pagination.prev_page_url + "#properties"} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    :
                                    <div className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                        </svg>
                                    </div>}  
                                    <div aria-current="page" className="relative z-10 inline-flex items-center bg-slate-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{properties_pagination.current_page}</div>
                                    {properties_pagination.next_page_url ? 
                                    <Link href={properties_pagination.next_page_url + "#properties"} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    :
                                    <div className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    }
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
