"use client"

import { IGenderWithCategory } from '@/common/model/products';
import Burger from '@/components/burger';
import SearchComponent from '@/components/search';
import { useFetchData } from '@/hooks/useFetchData';
import { BurgerIcon, MainLogo } from '@/svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {

}

const Search: React.FC<Props> = ({ }) => {
  const [genderId, setgenderId] = useState<any>(null)
  const { data: genders, loading } = useFetchData<{ message: null, data: IGenderWithCategory[] }>('/cinsler')
  useEffect(() => {
    genders && setgenderId(genders.data[0].id)
  }, [genders])


  return (
    <>
      <header className={'fixed  w-full    transition-colors h-[106px] z-10  top-[0px]  '}>
        <div className='relative'>
          <div className={`container mx-auto md:flex justify-between items-center md:p-0 p-5`}>
            <div className='flex md:block justify-between'>
              <div className=' cursor-pointer md:hidden'> <Burger data={genders?.data} color="white"/></div>
              <Link href={'/'}><MainLogo /></Link>
              <div className='md-hidden'></div>
            </div>
            <div>
              <ul className=' h-full flex text-[16px] font-normal justify-center md:justify-normal gap-x-[34px] text-white '>
                {
                  genders?.data?.map(item => (
                    <li key={item.id} className={'py-10 cursor-pointer  ' + (genderId === item.id ? ' font-bold' : '')} onClick={() => setgenderId(item.id)}><span>{item.name}</span></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <ul className=' h-full hidden md:flex text-[16px] font-bold gap-x-[34px] text-white '>


                <li className='py-10'>{/* icons */}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className=' fixed w-full    bg-[url("/image/unsplash_hCG34GSdYTA.e97292d988c36a62e4cb.jpg")] bg-[center_top_-9rem]  bg-no-repeat bg-cover flex items-center' >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }} className='backdrop-blur-lg h-screen w-full'>
          <div className='container mx-auto md:px-0 px-5'>
            {
              genderId && <SearchComponent id={genderId} />
            }

          </div>

        </div>

      </main>

    </>

  );
};

export default Search;