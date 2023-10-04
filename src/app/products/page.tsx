"use client"
import { IProduct } from '@/common/model/products';
import ProductCard from '@/components/product/card';
import { useFetchData } from '@/hooks/useFetchData';
import React from 'react';

interface Props {

}

const Products: React.FC<Props> = ({ }) => {
  const { data: products, loading } = useFetchData<{ message: null, data: IProduct[] }>('/mehsullar')
  console.log(loading);

  if (loading) {
    return 'loading'
  }

  return (
    <main>


      <div className='h-[540px]  bg-[url("/image/unsplash_hCG34GSdYTA.png")]   bg-no-repeat bg-cover flex items-center' >
        <div className='container mx-auto flex  flex-col items-center md:block'>
          <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>MEN’S
            FOOTWEAR</h1>

        </div>
      </div>

      <div className="container mx-auto my-[100px] ">
        <div className='flex justify-center flex-wrap gap-[20px]'>
          {products?.data?.map(item => (
            <div key={item.title} className='w-[369px]'>
              <ProductCard  product={item} />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Products;