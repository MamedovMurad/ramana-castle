import { InstagramIcon, LinkedinIcon, MainLogo } from '@/svg';
import React from 'react';
import Subscription from '../general/subscription';

interface Props {

}

const Footer: React.FC<Props> = ({ }) => {
    return (
        <footer className=' bg-black md:h-[262px] '>
            <div className=' container mx-auto flex flex-col justify-center md:flex-row md:justify-between items-center text-white border-b-[1.5px]  border-gray-pale py-[41px]'>
                <div><MainLogo /></div>
                <ul className='md:flex md:gap-x-[35px] font-normal text-[16px] items-center md:mt-0 mt-[41px]'>
                    <li className='mt-[10px] md:mt-0'>PRODUCTS</li>
                    <li className='mt-[10px] md:mt-0'>ABOUT US</li>
                    <li className='mt-[10px] md:mt-0'>CONTACT</li>
                    {/*  <li>branches</li>
                    <li>faq</li> */}
                </ul>
                <div className=' flex gap-x-2 md:mt-0 mt-[48px]'><InstagramIcon /> <LinkedinIcon /></div>
            </div>
            <div className='md:flex  justify-between items-center md:mt-[47px] container mx-auto  text-center md:text-left py-[17px] md:py-0'>

                <p className=' text-gray-pale text-[16px]'>website by Dreamart</p>
                {/* <Subscription className='w-[509px]'  text={<p className='text-white uppercase'>subscribe now : <span className=' text-gray-pale'>enter your email</span></p>}/> */}
                <p className=' text-gray-pale text-[16px]'>© 2022 RAmana caste</p>

            </div>
        </footer>
    );
};

export default Footer;