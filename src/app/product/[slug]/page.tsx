"use client"
import CarouselCopmonent from '@/components/carousel';
import ProductCard from '@/components/product/card';
import { Bag, LikeIcon } from '@/svg';
import Image from 'next/image';
import React from 'react';


interface Props {

}

const ProductDetail: React.FC<Props> = ({ }) => {
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
                  <div><h2 className=' font-bold text-[24px] uppercase'>Brown Leather Shoes</h2>
                    <p className='text-[20px]'>150 AZN</p></div>
                  <div className='flex gap-x-[14px]'>
                    <span><LikeIcon /></span>
                    <span><Bag /></span>
                  </div>
                </div>

                <div className='relative h-[540px]'>

                  <Image alt='test' src={'/image/product.png'} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div className='  col-span-2 flex-1 flex flex-col justify-between'>
              <div className='p-[12px] bg-white'>
                <div className='relative h-[300px]  '>
                  <Image alt='test' src={'/image/product.png'} fill objectFit='cover' />
                </div>
              </div>

              <div className='p-[12px] bg-white'>
                <div className='relative  h-[300px] '>
                  <Image alt='test' src={'/image/product.png'} fill objectFit='cover' />
                </div>
              </div>
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

            <CarouselCopmonent>
              <div className='bg-white px-[7px]'>
                <ProductCard product={{ price: 3435, title: 'fasdfdsa', name: 'dsfdsa', description: 'dsafdsaf', quantity: null, stock: '', image: '', discount_price: null, slug: null }} />

              </div>
              <div className='bg-white px-[7px]'>
                <ProductCard product={{ price: 3435, title: 'fasdfdsa', name: 'dsfdsa', description: 'dsafdsaf', quantity: null, stock: '', image: '', discount_price: null, slug: null }} />

              </div>
              <div className='bg-white px-[7px]'>
                <ProductCard product={{ price: 3435, title: 'fasdfdsa', name: 'dsfdsa', description: 'dsafdsaf', quantity: null, stock: '', image: '', discount_price: null, slug: null }} />

              </div>
              <div className='bg-white px-[7px]'>
                <ProductCard product={{ price: 3435, title: 'fasdfdsa', name: 'dsfdsa', description: 'dsafdsaf', quantity: null, stock: '', image: '', discount_price: null, slug: null }} />

              </div>
              <div className='bg-white px-[7px]'>
                <ProductCard product={{ price: 3435, title: 'trtrtret', name: 'dsfdsa', description: 'dsafdsaf', quantity: null, stock: '', image: '', discount_price: null, slug: null }} />

              </div>
            </CarouselCopmonent>

          </div>
        </div>
      </div>

    </main>
  );
};

export default ProductDetail;