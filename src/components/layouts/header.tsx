'use client'
import { MainLogo } from '@/svg';
import React, { useEffect, useState } from 'react';

interface Props {

}

const Header: React.FC<Props> = ({ }) => {
    const [sticky, setsticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e:any) => {
              
                const scrollTop = window.scrollY;
                scrollTop >= 50 ? setsticky(true) : setsticky(false);
            };
  
    return (
        <header className={'fixed  w-full  transition-colors py-10 z-10  top-[0px] '+ (sticky?' bg-sticky-color  ':'bg-transparent')}>
            <div className={`container mx-auto flex justify-between items-center`}>
                <div>
                    <MainLogo />
                </div>
                <div>
                    <ul className=' hidden md:flex text-[16px] font-bold gap-x-[34px] text-white'>
                        <li>PRODUCTS</li>
                        <li>ABOUT US</li>
                        <li>CONTACT</li>
                        <li>icons</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;