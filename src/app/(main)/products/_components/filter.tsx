'use client'
import { categoryWIthSub } from '@/common/model/products';
import CustomDropdown from '@/components/general/dropDown';
import { useFetchData } from '@/hooks/useFetchData';
import { FilterIcon } from '@/svg';
import Link from 'next/link';
import { useState } from 'react';


interface Props {
    handleCategories: (category: string) => void,
    handleSizes: (category: string) => void,
    handleMaterial: (category: string) => void,
    handleGenders: (category: string) => void,
}

const Filter: React.FC<Props> = ({ handleCategories, handleSizes, handleMaterial, handleGenders }) => {

    const handleSelectCateory = (params: { label: string, id: number }[] | []) => { const new_Array = params?.map(item => "&category_ids[]=" + item.id).join('&'); handleCategories(new_Array); setAtive(false) }
    const handleSize = (params: { label: string, id: number }[] | []) => { const new_Array = params?.map(item => "&size_ids[]=" + item.id).join('&'); handleSizes(new_Array); setAtive(false)  }
    const hadnleMaterials = (params: { label: string, id: number }[] | []) => { const new_Array = params?.map(item => "&material_ids[]=" + item.id).join('&'); handleMaterial(new_Array); setAtive(false)  }
    const handleGender = (params: { label: string, id: number }[] | []) => { const new_Array = params?.map(item => "&gender_ids[]=" + item.id).join('&'); handleGenders(new_Array); setAtive(false)  }
    const { data: categories, loading } = useFetchData<{ message: null, data: categoryWIthSub[] }>('/kateqoriyalar')
    const { data: sizes, loading: sizeLoading } = useFetchData<{ message: null, data: { id: number, name: string }[] }>('/olculer')
    const { data: materials, loading: materialLoad } = useFetchData<{ message: null, data: { id: number, name: string }[] }>('/materiallar')
    const { data: genders, loading: genderLoad } = useFetchData<{ message: null, data: { id: number, name: string }[] }>('/cinsler')

    const [active, setAtive] = useState(false)

    if (!categories?.data || !sizes?.data || !materials?.data || !genders?.data) {
        return ""
    }
    return (
        <div className='flex justify-between md:border-b-[1px] border-solid border-black md:mb-12 mb-4  md:px-0 px-5 items-center relative'>
            <ul className='md:hidden cursor-pointer' onClick={()=>setAtive(!active)}>
                <FilterIcon />
            </ul>
            <ul className='pb-2'>
                <li className='text-[14px] font-bold'><Link href={'#'}>Footwear</Link>  /  MEN</li>
            </ul>

            <ul className='md:hidden'>

            </ul>
            <ul className={'md:flex gap-x-2  block absolute  md:static md:h-min md:w-min h-[70vh] bg-white md:bg-transparent w-full top-0 z-10 left-0 pt-4 md:pt-0 ' + (!active ? 'hidden' : "")} >

                <li className=' pb-2 md:border-r-[1.5px] border-solid border-black px-1  min-w-[190px] border-b-[1.5px]  md:border-b-0 md:py-0 py-3'>
                    <CustomDropdown options={categories.data.map((item, index: number) => ({ label: item.name, id: item.id }))} onSelect={handleSelectCateory} def='Categories' />
                </li>
                <li className='pb-2 md:border-r-[1.5px] border-solid border-black px-1  min-w-[190px] border-b-[1.5px]  md:border-b-0 md:py-0 py-3'>
                    <CustomDropdown options={sizes.data.map((item) => ({ label: item.name, id: item.id }))} onSelect={handleSize} def='Sizes' />
                </li>
                <li className='pb-2 md:border-r-[1.5px] border-solid border-black px-1  min-w-[190px] border-b-[1.5px]  md:border-b-0 md:py-0 py-3'>
                    <CustomDropdown options={materials.data.map((item) => ({ label: item.name, id: item.id }))} onSelect={hadnleMaterials} def='Materials' />
                </li>
                <li className='pb-2 md:border-r-[1.5px] border-solid border-black px-1  min-w-[190px] border-b-[1.5px]  md:border-b-0 md:py-0 py-3 '>
                    <CustomDropdown options={genders.data.map((item) => ({ label: item.name, id: item.id }))} onSelect={handleGender} def='Genders' />
                </li>



            </ul>
        </div>
    );
};

export default Filter;