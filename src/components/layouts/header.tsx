'use client'
import { MainLogo, SearchIcon } from '@/svg';
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
        <header className={'fixed  w-full   transition-colors h-[106px] z-10  top-[0px] hover:bg-sticky-color   hover:backdrop-blur-lg ' + (sticky ? ' bg-sticky-color  backdrop-blur-lg' : 'bg-transparent')}>
            <div className='relative'>
                <div className={`container mx-auto flex justify-between items-center`}>
                    <div>
                        <Link href={'/'}><MainLogo /></Link>

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
                                                    <li className={local_scop +" flex items-center"} onMouseOver={() => setlocal_scop("group/" + item.name.toLocaleLowerCase())} key={item.name}>
                                                       <Link href={'/products?gender='+item.id}>{item.name}</Link>  
                                                        {item.gender_categories?.length > 0 && <MegaMenu scop={item.name} list={item.gender_categories} />}
                                                    </li>
                                                ))
                                            }

                                            {/*               <li className={local_scop} onMouseOver={() => setlocal_scop("group/woomen")}>
                                                <span>WOMEN</span>
                                                <MegaMenu scop="woomen" />
                                            </li>
                                            <li className={local_scop} onMouseOver={() => setlocal_scop("group/kids")}>
                                                <span>KIds</span>
                                                <MegaMenu scop='kids' />
                                            </li> */}

                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='py-10'><Link href={'/about'}>ABOUT US</Link></li>
                            <li className='py-10'><Link href={'/contact'}>CONTACT</Link></li>
                            <li className='py-10'><Link href={'/search'}><SearchIcon width='20' height='22'/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;