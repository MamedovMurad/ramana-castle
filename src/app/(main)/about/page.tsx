import { api } from '@/common/api';
import React from 'react';

interface Props {

}

const AboutUs: React.FC<Props> = async ({ }) => {
    const data = await getData()
    if (!data?.data) {
        return null
    }
    return (
        <main>
            <div className='md:h-[500px] h-[145px] bg-[url("/image/about..jpg")] bg-[top]  bg-no-repeat bg-cover flex items-center' >
                <div className='container mx-auto flex  flex-col items-center md:block'>
                    <h1 className='w-[230px] md:w-[550px] hidden    md:block text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>ABOUT RAMANA</h1>

                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="md:px-20 px-5">
                    <div>
                        <h2 className='uppercase text-[16px] font-bold text-center md:text-left'>about us</h2>
                        <hr className='mt-3' />
                    </div>
                    <div className='md:flex gap-x-10 mt-10 mb-5'>
                        <div className="flex-1">
                            <h1 className='md:text-[36px] text-[15px] font-medium uppercase text-center md:text-left '>{data.data.title_1} </h1>
                        </div>
                        <div className="flex-1" dangerouslySetInnerHTML={{ __html: data.data.description_1 }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' py-7  bg-[url("/image/contact2.jpg")]  bg-[top]  bg-no-repeat bg-cover flex items-center' >
                <div className="container mx-auto">
                    <div className="md:px-20 px-5">
                        <div >
                            <h2 className='md:text-[36px] text-[15px] font-medium uppercase mb-5 text-center md:text-left'>{data.data.title_2}</h2>
                            <div dangerouslySetInnerHTML={{ __html: data.data.description_2 }}>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;

async function getData() {

    const res = await api.get<{
        data: {
            "title_1": string,
            "title_2": string,
            "description_1": string,
            "description_2": string,
            "image": string
        }
    }>("/haqqimizda", { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.




    return res
}