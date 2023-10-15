'use client'
import { BurgerIcon, MainLogo, SearchIcon } from '@/svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MegaMenu from '../general/megamenu';
import { useFetchData } from '@/hooks/useFetchData';
import { IGenderWithCategory } from '@/common/model/products';

interface Props {

}

const Header: React.FC<Props> = ({ }) => {
    const [sticky, setsticky] = useState(false)
    const [local_scop, setlocal_scop] = useState("group/men")
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

    const { data: genders, loading } = useFetchData<{ message: null, data: IGenderWithCategory[] }>('/cinsler')


    return (
        <header className={'fixed  w-full border-b-[1.5px] border-black md:border-none   transition-colors h-[55px] md:h-[106px] z-10  top-[0px] md:hover:bg-sticky-color   hover:backdrop-blur-lg ' + (sticky ? ' bg-mobile_nav     md:bg-sticky-color  backdrop-blur-lg' : 'bg-transparent')}>
            <div className='relative h-full'>
                <div className={`container mx-auto flex justify-around md:justify-between items-center h-full `}>
                    <div className='md:block hidden'>
                        <Link href={'/'}><MainLogo /></Link>

                    </div>
                    <div className='md:hidden block'>
                        <BurgerIcon/>
                    </div>
                    <div className='md:hidden block w-[141px]'>
                        <Link href={'/'}><MainLogo height='12' width='141' color='#363636' /></Link>
                    </div>
                    <div>
                        <ul className=' h-full hidden md:flex text-[16px] font-bold gap-x-[34px] text-white '>
                            <li className=' group/test cursor-pointer py-10 '>
                                <span>PRODUCTS</span>
                                <div className=' 
                                 border-solid border-gray-pale absolute z-10 left-0 top-[106px] w-full   h-[0] 
                                 bg-sticky-color opacity-0 group-hover/test:h-full  group-hover/test:opacity-[1] group-hover/test:border-t-[1px] 
                                  transition-all   overflow-hidden group-hover/test:overflow-visible'>
                                    <div className="container mx-auto h-full">
                                        <ul className='w-[86%] text-[white] flex gap-x-5 justify-end h-full '>
                                            {
                                                genders?.data?.map(item => (
                                                    <li className={local_scop + " flex items-center"} onMouseOver={() => setlocal_scop("group/" + item.name.toLocaleLowerCase())} key={item.name}>
                                                        <Link href={'/products?gender=' + item.id}>{item.name}</Link>
                                                        {item.gender_categories?.length > 0 && <MegaMenu scop={item.name} list={{ gender: item.id, categories: item.gender_categories }} />}
                                                    </li>
                                                ))
                                            }



                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='py-10'><Link href={'/about'}>ABOUT US</Link></li>
                            <li className='py-10'><Link href={'/contact'}>CONTACT</Link></li>

                        </ul>
                        <ul className="block md:hidden ">
                        <li ><Link href={'/search'}><SearchIcon width='20' height='22' color='#363636' /></Link></li>
                    </ul>
                    </div>

                   
                </div>
            </div>
        </header>
    );
};

export default Header;