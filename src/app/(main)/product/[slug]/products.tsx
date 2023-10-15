
import CarouselCopmonent from '@/components/carousel';
import ProductCard from '@/components/product/card';
import { Bag, LikeIcon } from '@/svg';
import Image from 'next/image';
import React from 'react';
import SlidersCarousel from '../_components/sliders';

import { productDetail } from '@/common/model/products';


interface Props {
  data: productDetail,
  slug: string
}

export default function ProductDetail({ data, slug }: Props) {





  return (
    <main className=' md:bg-[url("/image/background.png")] bg-[center_top_-9rem]  bg-no-repeat bg-cover bg-mobile_nav' >
      <div className='container mx-auto md:pt-[130px] pt-20'>
        <div className='md:mx-[60px] mx-5'>
          <h3 className=' md:text-white font-bold md:text-[16px] text-[14px] uppercase  text-center md:text-left'>PRoduct details</h3>
          <hr color='#FFF' className='text-white hidden md:block' />

          {/* images */}

          <div className="md:grid grid-cols-7 gap-4 md:mt-[50px] mt-5">
            <div className=' col-span-5'>

              <div className='  md:p-[30px] p-5 md:bg-white  bg-detail_bg'>
                <div className=' flex justify-between'>
                  <div><h2 className=' font-bold md:text-[24px] uppercase text-[14px]'>{data?.title}</h2>
                    <p className='md:text-[20px] text-[14px]'>{data.price} AZN</p></div>
                  <div className='flex gap-x-[14px]'>
                    <span><LikeIcon /></span>
                    <span><Bag /></span>
                  </div>
                </div>

                <div className='relative md:h-[540px] h-[218px]'>


                  <Image alt='test' src={data.image || ""} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>

            <div className='  col-span-2 flex-1 flex md:flex-col justify-between'>
              {
                data?.images?.map((item, index: number) => (
                  index < 2 && <div className='p-[12px] md:bg-white  bg-detail_bg flex-1 md:flex-initial' key={item}>
                    <div className='relative md:h-[300px] h-[102px] '>
                      <Image alt='test' src={item} fill objectFit='cover' />
                    </div>
                  </div>
                ))
              }

            </div>
          </div>

          <div className=' md:p-14 p-5 md:bg-white mt-6  bg-detail_bg' >
            <div>
              <ul>
                <li>
                  <p>Product category:</p>
                  <p>{data.categories?.map(item => item.name).join(', ')}</p>
                </li>
                <li className='mt-4'>
                  <p>Materials:</p>
                  <p>{data.materials?.map(item => item.name).join(', ')}</p>
                </li>
                <li className='mt-4'>
                  <p>Avaliable sizes:</p>
                  <p>{data.sizes?.map(item => item.name).join(', ')}</p>
                </li>
       

              </ul>
            </div>
          </div>
        </div>


      </div>
      <div className=' bg-mobile_nav pt-[60px] md:mt-20 mt-0'>
        <div className="container mx-auto">

          <div className=' md:mx-[60px] md:pb-[100px] md:px-0 px-5 pb-8'>
            <div className='md:mb-[50px] mb-3'>
              <h3 className=' font-bold md:text-[16px] text-[14px] md:text-left text-center'>MORE LIKE THIS</h3>
              <hr className='hidden md:block'/>
            </div>

            <SlidersCarousel slug={slug} />

          </div>
        </div>
      </div>

    </main>
  );
};








