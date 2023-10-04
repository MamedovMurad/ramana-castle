import { MainLogo } from '@/svg';
import React from 'react';
import Subscription from '../general/subscription';

interface Props {

}

const Footer: React.FC<Props> = ({ }) => {
    return (
        <footer className=' bg-black h-[262px] '>
            <div className=' container mx-auto flex flex-col justify-center md:flex-row md:justify-between items-center text-white border-b-[1.5px]  border-gray-pale py-[32px]'>
                <div><MainLogo /></div>
                <ul className='md:flex md:gap-x-[35px] font-normal text-[16px] items-center'>
                    <li>PRODUCTS</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                   {/*  <li>branches</li>
                    <li>faq</li> */}
                </ul>
                <div>icons</div>
            </div>
            <div className='md:flex justify-between items-center md:mt-[47px] container mx-auto '>

               <p className=' text-gray-pale text-[16px]'>© 2022 RAmana caste</p>
               {/* <Subscription className='w-[509px]'  text={<p className='text-white uppercase'>subscribe now : <span className=' text-gray-pale'>enter your email</span></p>}/> */}
                <p className=' text-gray-pale text-[16px]'>© 2022 RAmana caste</p>

            </div>
        </footer>
    );
};

export default Footer;