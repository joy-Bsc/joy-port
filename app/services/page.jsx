"use client";
import { BsArrowDownRight } from 'react-icons/bs';
//import Link from 'next/link';

const services = [
    {
        title: 'Web Development',
        description: 'I build websites and web applications that are fast, secure, and responsive.',
        icon: <BsArrowDownRight />,
    },
    {
        title: 'Mobile Development',
        description: 'I create mobile applications for both iOS and Android platforms.',
        icon: <BsArrowDownRight />,
    },
    {
        title: 'UI/UX Design',
        description: 'I design user interfaces that are intuitive and visually appealing.',
        icon: <BsArrowDownRight />,
    },
    {
        title: 'E-commerce Solutions',
        description: 'I develop e-commerce platforms that are easy to use and secure.',
        icon: <BsArrowDownRight />,
    },
    {
        title: 'Web Hosting',
        description: 'I provide web hosting services that are reliable and secure.',
        icon: <BsArrowDownRight />,
    },
    {
        title: 'Maintenance & Support',
        description: 'I offer maintenance and support services to keep your website up and running.',
        icon: <BsArrowDownRight />,
    }
];

const Services = () => {
    return (
        <div>
            <section className='container mx-auto py-20'>
                <h2 className='text-4xl font-semibold text-center mb-16 text-outline font-customFamily'>My Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {services.map((service, index) => (
                        <div key={index} className='bg-primary shadow-lg p-8 rounded-lg'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-gray p-2 rounded-full text-white'>
                                    {service.icon}
                                </div>
                                <h3 className='text-xl font-semibold'>{service.title}</h3>
                            </div>
                            <p className='mt-4'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;