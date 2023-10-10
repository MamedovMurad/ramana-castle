"use client"
import { IProduct } from '@/common/model/products';
import Skeleton from '@/components/general/skeleton';
import ProductCard from '@/components/product/card';
import { useFetchData } from '@/hooks/useFetchData';
import Link from 'next/link';
import React, { useState } from 'react';
import Filter from './_components/filter';
import { PaginatedItems } from '@/components/general/paginate';

interface Props {

}

const Products: React.FC<Props> = ({ }) => {
  const [page, setpage] = useState(1);
  const [categories, setcategories] = useState("")
  const [sizes, setSizes] = useState("")
  const [material, setMaterial] = useState("")
  const [genders, setGenders] = useState("")

  const { data: products, loading } = useFetchData<{ message: null, data: IProduct[], meta: { total: number } }>(`/filter?page=${page}${categories}${sizes}${material}${genders}`, { page, categories, sizes, genders, material })


  const handlePage = (page: number) => setpage(page)
  const handleCategories = (category: string) => { setcategories(category); handlePage(1) }
  const handleSizes = (category: string) => { setSizes(category); handlePage(1) }
  const handleMaterial = (category: string) => { setMaterial(category); handlePage(1) }
  const handleGenders = (category: string) => { setGenders(category); handlePage(1) }


  return (
    <main>


      <div className='h-[540px]  bg-[url("/image/unsplash_hCG34GSdYTA.png")]   bg-no-repeat bg-cover flex items-center' >
        <div className='container mx-auto flex  flex-col items-center md:block'>
          <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>MEN’S
            FOOTWEAR</h1>

        </div>
      </div>

      <div className="container mx-auto my-[100px] ">
        <Filter handleCategories={handleCategories} handleSizes={handleSizes} handleMaterial={handleMaterial} handleGenders={handleGenders} />
        <div className='flex  flex-wrap gap-[20px]'>

          {loading ? Array(8).fill(<div className='w-[369px]'><Skeleton /></div>) : products?.data?.map(item => (
            <div key={item.title} className='w-[369px]'>
              <Link href={'/product/' + item.title}>
                <ProductCard product={item} /></Link>
            </div>
          ))}
        </div>

        <div className='mt-[66px]'>
          <PaginatedItems total={products?.meta.total} handlePage={handlePage} initialPage={page-1}/>
        </div>
      </div>
    </main>
  );
};

export default Products;