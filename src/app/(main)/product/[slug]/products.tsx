
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
    <main className=' bg-[url("/image/background.png")] bg-[center_top_-9rem]  bg-no-repeat bg-cover ' >
      <div className='container mx-auto pt-[130px]'>
        <div className='mx-[60px]'>
          <h3 className=' text-white font-bold text-[16px] uppercase'>PRoduct details</h3>
          <hr color='#FFF' className='text-white' />

          {/* images */}

          <div className="grid grid-cols-7 gap-4 mt-[50px]">
            <div className=' col-span-5'>

              <div className='  p-[30px] bg-white'>
                <div className=' flex justify-between'>
                  <div><h2 className=' font-bold text-[24px] uppercase'>{data?.title}</h2>
                    <p className='text-[20px]'>{data.price}</p></div>
                  <div className='flex gap-x-[14px]'>
                    <span><LikeIcon /></span>
                    <span><Bag /></span>
                  </div>
                </div>

                <div className='relative h-[540px]'>


                  <Image alt='test' src={data.image || ""} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>

            <div className='  col-span-2 flex-1 flex flex-col justify-between'>
              {
                data?.images?.map((item, index: number) => (
                  index < 2 && <div className='p-[12px] bg-white' key={item}>
                    <div className='relative h-[300px]  '>
                      <Image alt='test' src={item} fill objectFit='cover' />
                    </div>
                  </div>
                ))
              }

            </div>
          </div>

          <div className=' p-14 bg-white mt-6'>
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
      <div className='bg-white pt-[60px] mt-20'>
        <div className="container mx-auto">

          <div className='mx-[60px] pb-[100px]'>
            <div className='mb-[50px]'>
              <h3 className=' font-bold text-[16px]'>MORE LIKE THIS</h3>
              <hr />
            </div>

            <SlidersCarousel slug={slug} />

          </div>
        </div>
      </div>

    </main>
  );
};








