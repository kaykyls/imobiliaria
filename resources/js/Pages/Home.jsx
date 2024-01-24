import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Banner from '@/Components/Banner';
import Card from '@/Components/Card';
import bannerImg from '/public/img/banner.jpg'
import Contact from '@/Components/Contact';
import About from '@/Components/About';
import Testimonials from '@/Components/Testimonials';

export default function Home(props) {
    return (
        <Layout>
            <Banner/>
            <div id="#properties" className="container mx-auto mb-20">
                <div className="my-8">
                    <h2 className="text-2xl">Imóveis</h2>
                    <span className="w-10 block h-1 bg-main-color"></span>
                </div>
                <div className="gap-6 grid grid-cols-4">
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                    <Card
                        img={bannerImg}
                        title="Lorem Ipsum"
                        value="50.000"
                        rooms="2"
                        bathrooms="1"
                    />
                </div>
                
            </div>
            <About/>
            <Testimonials/>
            <Contact/>
            
        </Layout>
    );
}
