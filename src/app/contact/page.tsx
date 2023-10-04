import ContactForm from '@/components/contactForm';
import { InstagramIcon, LinkedinIcon } from '@/svg';
import React from 'react';

interface Props {

}

const Contact: React.FC<Props> = ({ }) => {

    return (
        <main>


            <div className='h-[500px]  bg-[url("/image/contact.jpg")] bg-[center]  bg-no-repeat bg-cover flex items-center' >
                <div className='container mx-auto flex  flex-col items-center md:block'>
                    <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>
                        GET IN TOUCH
                    </h1>

                </div>
            </div>
            <div className="container mx-auto my-[100px]">
                <div className='flex'>
                    <div className='flex-1'>
                        <h1 className='text-[36px] font-semibold'>OUR CONTACTS </h1>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'>Ünvan</p>
                            <p className='text-[16px] text-gray-pale'> Aşıq Molla Cümə 44, Bakı, Azerbaycan</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> Bizimlə əlaqə </p>
                            <p className='text-[16px] text-gray-pale'> Nömrə : +99412 310 52 04 / 05</p>
                            <p className='text-[16px] text-gray-pale'>elefon: +99455 310 52 04 / 05</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> E-Poçt adresi</p>
                            <p className='text-[16px] text-gray-pale'> info@ramana.az</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'> İş vaxtları</p>
                            <p className='text-[16px] text-gray-pale'> Həftəiçi : 09:00 - 18:00 </p>
                            <p className='text-[16px] text-gray-pale'>Həftəsonu : 10:00 - 21:00</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[16px] text-gray-pale'>Sosial mediayada biz:</p>
                            <div className="flex gap-x-1 mt-2">
                                <span><LinkedinIcon color='#363636' /></span>
                                <span><InstagramIcon color='#363636' /></span>
                            </div>
                        </div>

                        <div className=' mt-9'>
                            <button type='submit' className=' px-20 py-3 border-[1.5px] border-black border-solid uppercase '>OUR Branches</button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;