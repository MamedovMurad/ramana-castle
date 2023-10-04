"use client"
import Subscription from '@/components/general/subscription'


export default function Home() {


  return (
    <main className='h-screen  bg-[url("/image/unsplash_hCG34GSdYTA.e97292d988c36a62e4cb.jpg")] bg-[center_top_-9rem]  bg-no-repeat bg-cover flex items-center' >
      <div className='container mx-auto flex  flex-col items-center md:block'>
        <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>RAMANA CASTLE </h1>
        <Subscription className="w-[380px] mt-12" text={  <p className='text-white'>stay up to date with us</p>} />
      </div>
    </main>
  )
}
