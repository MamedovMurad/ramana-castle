"use client"
import { IProduct } from '@/common/model/products';
import CarouselCopmonent from '@/components/carousel';
import Spinner from '@/components/general/loading/spinner';
import ProductCard from '@/components/product/card';
import { useFetchData } from '@/hooks/useFetchData';
import Link from 'next/link';
import React from 'react';

interface Props {
    slug: string
}

const SlidersCarousel: React.FC<Props> = ({ slug }) => {
    const { data: products, loading } = useFetchData<{ message: null, data: IProduct[], meta: { total: number } }>(`/oxsar-mehsullar/${slug}`)


    if (loading) {
       return <div className='flex items-center h-20 justify-center'><Spinner/> </div>
    }
if (!products?.data) {
    return
    
}
    return (

        <CarouselCopmonent>
            {
                products?.data?.map(item => (
                    <div className='bg-white px-[7px]' key={item.id}>
                        <Link href={"/product/" + item.slug}>
                            <ProductCard product={item} /></Link>

                    </div>
                ))
            }


        </CarouselCopmonent>
    
    );
};

export default SlidersCarousel;