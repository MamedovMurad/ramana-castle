"use client"

import { IGenderWithCategory, categoryWIthSub } from '@/common/model/products';
import { BurgerArrow, BurgerIcon, Bag, LikeIcon, LinkedinIcon, WorldIcon, UserIcon } from '@/svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'



interface Props {
    data?: IGenderWithCategory[],
    color?:string
}

const Burger: React.FC<Props> = ({ data, color }) => {
    const pathname = usePathname()
    console.log(pathname,'params');
    
    const [subIndex, setsubIndex] = useState<IGenderWithCategory | null>(null)
    const [active, setactive] = useState(false)
    const closeSub = () => setsubIndex(null)

    useEffect(() => {
        closeSub()
        setactive(false)
    }, [pathname])
    
    return (
        <section >
            <span className="cursor-pointer " onClick={() => setactive(!active)}> <BurgerIcon  color={color}/></span>
            {
                active &&
                <div className='absolute top-[53px]  h-[94vh]  w-full bg-mobile_nav left-0  text-center flex flex-col justify-between'>
                    {
                        subIndex ? <SubMenu data={subIndex} closeSub={closeSub} /> :

                            <ul >
                                {
                                    data?.map((item) => (
                                        <li onClick={() => setsubIndex(item)} key={item.id} className=' border-t-[1.5px] border-solid py-4'><Link href="#" className="uppercase">{item.name}</Link></li>
                                    ))
                                }
                                <li className=' border-t-[1.5px] border-solid py-4'><Link href="/about" className="uppercase">About us</Link></li>
                                <li className=' border-y-[1.5px] border-solid py-4'><Link href="/contact" className="uppercase">Contact</Link></li>
                            </ul>
                    }

                    <footer >
                        <div className='flex justify-center gap-x-10 py-4'>
                            <span><LikeIcon /></span>
                            <span><Bag /></span>
                            <span><UserIcon /></span>
                            <span><WorldIcon /></span>


                        </div>
                        <div className='border-t-[1px] py-4'>
                            <p className='text-[14px] uppercase'>© 2022 RAmana caste</p>
                        </div>
                    </footer>
                </div>
            }


        </section>
    );
};

export default Burger;



const SubMenu = ({ data, closeSub }: { data: IGenderWithCategory, closeSub: () => void }) => {
    const [activeSub, setactiveSub] = useState<categoryWIthSub | null>(null)
    return (
        <ul>
            <li className=' border-t-[1.5px] border-solid py-4 relative'>
                <Link href="#" className="uppercase">{data.name}</Link>
                <span className=' absolute left-5 top-5 rotate-180' onClick={closeSub}><BurgerArrow /></span>
            </li>
            {
                data.gender_categories?.map(item => (
                    <li key={item.id} className=' border-t-[1.5px] border-solid relative' onClick={() => setactiveSub(item)}>
                        {item.subcategory?.length > 0 ? <span className='py-4 block'>{item.name}</span> : <Link className='py-4 block' href={'/products?category=' + item.id}>{item.name}</Link>}
                        <span className={' absolute right-5 top-5  ' + (activeSub?.id === item.id ? "rotate-[-90deg]" : "rotate-90")} ><BurgerArrow /></span>
                        {
                            activeSub?.id === item.id && <ul>
                                {
                                    activeSub.subcategory?.map(Subitem => (
                                        <li key={Subitem.id} className='py-4' ><Link href={'/products?category=' + Subitem.id}>{Subitem.name}</Link></li>
                                    ))
                                }
                            </ul>
                        }
                    </li>

                ))
            }
        </ul>
    )
}