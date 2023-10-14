
import Subscription from '@/components/general/subscription'


import { api } from "@/common/api";
import { productDetail } from "@/common/model/products";
import Link from 'next/link';


export default async function Home() {



  const data = await getData();
  if (!data?.data) {
    return
  }
  return (
    <>
      {
        data.data.map((item, index: number) => (
          <section key={index} style={{ backgroundImage: `url(${item.image})` }} className='h-screen  relative  bg-[center_top_-9rem]  bg-no-repeat bg-cover flex items-center' >
          
          
            <div className={'container mx-auto flex  flex-col items-center   ' + (index === 0 ? " md:block" : '')}>
              <h1 className={'w-[230px]  text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]' +
                (index === 0 ? " md:w-[550px] " : ' text-center md:w-full')}>{item.title} </h1>
              {index !== 0 && <p className=' mt-2 text-white font-light  text-[27px] '>{item.sub_title}</p>}
              {index === 0 && <Subscription className="w-[380px] mt-12" text={<p className='text-white'>stay up to date with us</p>} />}

            </div>
            {index !== 0 && <div className=' absolute bottom-0 left-0 w-full  text-white backdrop-blur-lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
              <ul className='flex items-center justify-center py-[50px]'>
                <li className=' text-white text-[24px] font-light border-r-[1.5px] pr-8 border-white'>
                  <Link href={item.link_1}>{item.link_title_1 } </Link>
                </li>
                <li className=' text-white text-[24px] font-light  pl-8 '>
                <Link href={item.link_2}>{item.title }  </Link> </li>
              </ul>
            </div>}
          </section>
        ))
      }
    </>
  )


}


async function getData() {

  const res = await api.get<{
    data: {
      "title": string,
      "sub_title": string,
      "link_1": string,
      "link_2": string,
      "image": string,
      link_title_1: string,
      link_title_2: string
    }[]
  }>("",{ cache: 'force-cache' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res?.data);


  return res
}
