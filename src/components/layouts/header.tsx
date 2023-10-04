'use client'
import { MainLogo } from '@/svg';
import Link from 'next/link';
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
    const isSticky = (e: any) => {

        const scrollTop = window.scrollY;
        scrollTop >= 50 ? setsticky(true) : setsticky(false);
    };

    return (
        <header className={'fixed  w-full  transition-colors py-10 z-10  top-[0px] hover:bg-sticky-color  hover:backdrop-blur-lg ' + (sticky ? ' bg-sticky-color  backdrop-blur-lg' : 'bg-transparent')}>
            <div className={`container mx-auto flex justify-between items-center`}>
                <div>
                    <Link href={'/'}><MainLogo /></Link>

                </div>
                <div>
                    <ul className=' hidden md:flex text-[16px] font-bold gap-x-[34px] text-white'>
                        <li>PRODUCTS</li>
                        <li><Link href={'about'}>ABOUT US</Link></li>
                        <li><Link href={'contact'}>CONTACT</Link></li>
                        <li>icons</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;