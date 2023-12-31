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

  const { data: products, loading } = useFetchData<{ message: null, data: IProduct[], meta: { total: number , per_page:number} }>(`/filter?page=${page}${categories}${sizes}${material}${genders}`, { page, categories, sizes, genders, material })


  const handlePage = (page: number) => setpage(page)
  const handleCategories = (category: string) => { setcategories(category); handlePage(1) }
  const handleSizes = (category: string) => { setSizes(category); handlePage(1) }
  const handleMaterial = (category: string) => { setMaterial(category); handlePage(1) }
  const handleGenders = (category: string) => { setGenders(category); handlePage(1) }
  


  return (
    <main className=' bg-mobile_nav'>


      <div className='md:h-[540px]  h-[145px]   bg-[url("/image/unsplash_hCG34GSdYTA.png")]   bg-no-repeat bg-cover flex items-center' >
        <div className='container mx-auto   flex-col items-center md:block hidden'>
          <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>MEN’S
            FOOTWEAR</h1>

        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] pb-8 mt-3">
        <Filter handleCategories={handleCategories} handleSizes={handleSizes} handleMaterial={handleMaterial} handleGenders={handleGenders} />
        <div className='flex  flex-wrap md:gap-[20px] gap-[10px]  md:pl-0 pl-5'>

          {loading ? Array(8).fill(<div className=' w-[46%] md:w-[369px]'><Skeleton /></div>) : products?.data?.map(item => (
            <div key={item.title} className=' w-[46%] md:w-[369px]'>
              <Link href={'/product/' + item.slug}>
                <ProductCard product={item} /></Link>
            </div>
          ))}
        </div>

        <div className='mt-[66px]'>
         {
          products&& <PaginatedItems total={Math.ceil((products.meta.total)/(products.meta.per_page))} handlePage={handlePage} initialPage={page-1}/>
         }
        </div>
      </div>
    </main>
  );
};

export default Products;