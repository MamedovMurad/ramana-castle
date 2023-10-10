import { useFetchData } from '@/hooks/useFetchData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Spinner from '../general/loading/spinner';
import { SearchIcon } from '@/svg';

interface Props {
  id: number
}

const SearchComponent: React.FC<Props> = ({ id }) => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);

  const { data, loading } = useFetchData<{ message: null, data: { id: number, title: string, name: string, slug:string }[] }>('/axtaris/' + id + "?name=" + value, value)
  console.log(data, 'data');



  return (
    <div className='mt-[160px]' >
      <div className='border-b-[2px] border-solid border-white flex'>
        <input type="text" onChange={(e) => setText(e.target.value)} placeholder='enter search keywords here' className=' w-[98%] bg-transparent text-white placeholder:opacity-[0.5] placeholder:text-white placeholder:uppercase py-[8px] outline-none px-1' />
        <SearchIcon />
      </div>

      <div className='mt-[60px] text-white text-[16px]  uppercase font-light'>
        <ul className='flex flex-col flex-wrap h-[370px] justify-start gap-[15px] '>
          {loading && <div className='w-full flex items-center justify-center'><Spinner /></div>}
          {
            data?.data && data.data.map(item => (
              <li key={item.id}><Link href={"/product/" + item.slug}>{item.name}</Link></li>
            ))
          }


        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;