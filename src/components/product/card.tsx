import { IProduct } from '@/common/model/products';
import { Bag, LikeIcon } from '@/svg';
import Image from 'next/image';
import React from 'react';

interface Props {
    product: IProduct
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className=' w-full relative bg-gray py-[23px] px-[31px]'>
            <div className=' absolute flex right-[10px] top-[10px] items-center gap-x-[15px]'>
                <span className=' cursor-pointer'><LikeIcon /></span>
                <span className=' cursor-pointer'><Bag /></span>
            </div>
            <div className="relative w-full h-[247px]">
                <Image src={product.image} fill alt='test' objectFit='contain'/>
            </div>
            <div>
                <h1 className=' font-bold text-[16px]'>{product.title}</h1>
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;