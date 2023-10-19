import { api } from '@/common/api';
import { IContact } from '@/common/model/products';
import ContactForm from '@/components/contactForm';
import { InstagramIcon, LinkedinIcon } from '@/svg';
import Link from 'next/link';
import React from 'react';

interface Props {

}

const Contact: React.FC<Props> = async ({ }) => {
    const data = await getData()

    return (
        <main className=' bg-mobile_nav '>


            <div className='md:h-[500px] h-[145px]  bg-[url("/image/contact.jpg")] bg-[center]  bg-no-repeat bg-cover flex items-center' >
                <div className='container mx-auto   flex-col items-center md:block hidden'>
                    <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>
                        GET IN TOUCH
                    </h1>

                </div>
            </div>
            <div className="container mx-auto md:my-[100px] mt-4 px-5 md:px-0  py-5 md:py-0">
                <div className='md:flex'>
                    <div className='flex-1'>
                        <h1 className='md:text-[36px] text-[20px] font-bold md:text-left text-center '>{/* OUR CONTACTS  */}</h1>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'>Ünvan</p>
                            <p className='text-[16px] text-gray-pale'> {data?.data.address}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> Bizimlə əlaqə </p>
                            <p className='text-[16px] text-gray-pale'> Nömrə : {data?.data.phone_1}</p>
                            <p className='text-[16px] text-gray-pale'>elefon: {data?.data.phone_2}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> E-Poçt adresi</p>
                            <p className='text-[16px] text-gray-pale'> {data?.data.email}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> İş vaxtları</p>
                            <p className='text-[16px] text-gray-pale'> Həftəiçi : {data?.data.weekdays} </p>
                            <p className='text-[16px] text-gray-pale'>Həftəsonu : {data?.data.weekend}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'>Sosial mediayada biz:</p>
                            <div className="flex gap-x-1 mt-2">
                                <span><Link href={data?.data.linkedin || "#"}><LinkedinIcon color='#363636' /></Link></span>
                                <span><Link href={data?.data.instagram || "#"}><InstagramIcon color='#363636' /></Link></span>
                            </div>
                        </div>

                        <div className=' mt-9'>
{/*                             <button type='submit' className=' hidden md:block px-20 py-3 border-[1.5px] border-black border-solid uppercase '>OUR Branches</button>
 */}                        </div>
                    </div>
                    <div className='flex-1 '>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;


async function getData() {

    const res = await api.get<{ data: IContact }>("/elaqe",{ cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.




    return res
}