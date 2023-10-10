"use client"

import { IGenderWithCategory } from '@/common/model/products';
import SearchComponent from '@/components/search';
import { useFetchData } from '@/hooks/useFetchData';
import { MainLogo } from '@/svg';
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
          <div className={`container mx-auto flex justify-between items-center`}>
            <div>
              <Link href={'/'}><MainLogo /></Link>

            </div>
            <div>
              <ul className=' h-full hidden md:flex text-[16px] font-normal gap-x-[34px] text-white '>
                {
                  genders?.data?.map(item => (
                    <li key={item.id} className={'py-10 cursor-pointer  '+ (genderId===item.id?' font-bold':'')} onClick={()=>setgenderId(item.id)}><span>{item.name}</span></li>
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
        <div className='backdrop-blur-lg h-screen w-full'>
          <div className='container mx-auto '>
            {
              genderId&& <SearchComponent id={genderId}/>
            }
          
          </div>

        </div>

      </main>

    </>

  );
};

export default Search;