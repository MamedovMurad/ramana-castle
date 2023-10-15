import { IProduct } from '@/common/model/products';
import { Bag, LikeIcon } from '@/svg';
import Image from 'next/image';
import React from 'react';

interface Props {
    product: IProduct
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className=' w-full relative bg-gray py-6 md:py-[23px] md:px-[31px] px-3'>
            <div className=' absolute flex right-[10px] top-[10px] items-center md:gap-x-[15px]  gap-x-2'>
                <span className=' cursor-pointer hidden  md:block'><LikeIcon /></span>
                <span className=' cursor-pointer hidden md:block'><Bag /></span>

                <span className=' cursor-pointer block  md:hidden'><LikeIcon width='13' height='11'/></span>
                <span className=' cursor-pointer block md:hidden'><Bag width='13' height='11'/></span>
            </div>
            <div className="relative w-full md:h-[247px]  h-[96px]">
                <Image src={product.image} fill alt='test' objectFit='contain'/>
            </div>
            <div>
                <h1 className=' font-bold text-[10px] md:text-[16px]'>{product.title}</h1>
                <p className='text-[10px] md:text-[16px]'>{product.price} AZN</p>
            </div>
        </div>
    );
};

export default ProductCard;