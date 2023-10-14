"use client"
import { categoryWIthSub } from '@/common/model/products';
import Link from 'next/link';
import React from 'react';

interface Props {
  scop: 'Men' | 'Famale' | 'Kids',
  list: { gender: number; categories: categoryWIthSub[] }
}

const MegaMenu: React.FC<Props> = ({ scop, list }) => {
  const local_const = {
    Men: `border-solid border-gray-pale absolute z-10 right-0 top-[99px] w-[660px]  py-0 h-[0] 
    bg-sticky-color opacity-0 group-hover/men:h-[375.5px]  group-hover/men:opacity-[1] group-hover/men:border-t-[1px] 
    group-hover/men:py-10 transition-all`,
    Famale: `border-solid border-gray-pale absolute z-10 right-0 top-[99px] w-[660px]  py-0 h-[0] 
    bg-sticky-color opacity-0 group-hover/famale:h-[375.5px]  group-hover/famale:opacity-[1] group-hover/famale:border-t-[1px] 
    group-hover/famale:py-10 transition-all`,
    Kids: `border-solid border-gray-pale absolute z-10 right-0 top-[99px] w-[660px]  py-0 h-[0] 
    bg-sticky-color opacity-0 group-hover/kids:h-[375.5px]  group-hover/kids:opacity-[1] group-hover/kids:border-t-[1px] 
    group-hover/kids:py-10 transition-all`
  }

  return (
    <div className={local_const[scop]}>
      <div className=' px-[30px] py-[0px] flex justify-between text-[15.5px] font-normal'>
        {
          list.categories.map(item => (
            <ul key={item.name + item.title + item.description}>
              <li className='py-[9px] font-bold uppercase'>
                <Link href={'/products?gender='+list.gender+'&category='+item.id}>{item.name}</Link>
              </li>
              {item.subcategory?.map((item, index: number) => (
                <li key={index} className='py-[5px] mt-[12px]'>{item.name}</li>
              ))}



            </ul>
          ))
        }




      </div>
    </div>
  );
};

export default MegaMenu;