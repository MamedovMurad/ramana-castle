
import Subscription from '@/components/general/subscription'


import { api } from "@/common/api";
import { productDetail } from "@/common/model/products";


export default async function Home() {



  const data = await getData();
  if (!data?.data) {
    return
  }
  return (
    <>
      {
        data.data.map((item, index: number) => (
          <section key={index} style={{backgroundImage:`url(${item.image})`}} className='h-screen   bg-[center_top_-9rem]  bg-no-repeat bg-cover flex items-center' >
            <div className={'container mx-auto flex  flex-col items-center   '+ (index===0?" md:block":'')}>
              <h1 className={'w-[230px]  text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'+
              (index===0?" md:w-[550px] ":' text-center md:w-full')}>{item.title} </h1>
              {index!==0&&<p className=' mt-2 text-white font-light  text-[27px] '>{item.sub_title}</p>}
             {index===0&& <Subscription className="w-[380px] mt-12" text={<p className='text-white'>stay up to date with us</p>} />}
            </div>
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
      "image": string
    }[]
  }>("/")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res?.data);


  return res
}
