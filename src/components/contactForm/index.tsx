'use client'
import React, { useState } from 'react';

interface Props {

}

const ContactForm: React.FC<Props> = ({ }) => {
    const [fields, setfields] = useState({ fullname: '', email: '' })
    const handleChange = (e: any) => {
        setfields({ ...fields, [e.target.name]: e.target.value })
    }
    return (
        <form action="" id='contactForm'>
            <div>

                <input type="text" name="fullname" id="fullname" onChange={handleChange} />
                <label className={'uppercase '+(fields.fullname ? 'top-[-20px] ' : 'top-0')} htmlFor="fullname">FUll Name</label>

            </div>
            <div className='mt-10'>

                <input type="text" name="email" id="email" onChange={handleChange} />
                <label htmlFor="email" className={'uppercase '+ (fields.email ? 'top-[-20px] ' : 'top-0')} >Email ADDress</label>

            </div>
            <div className='mt-10'>

                <label htmlFor="message" className={' text-[16px] font-bold'} >Your Message</label>
                <textarea className='mt-1 p-2 w-full block outline-none border-[1.5px] border-black border-solid' name="message" id="message" onChange={handleChange} cols={30} rows={10}></textarea>


            </div>
            <div className='flex justify-center mt-10'>
                <button type='submit' className=' px-20 py-3 border-[1.5px] border-black border-solid '>SUBMiT</button>
            </div>
        </form>
    );
};

export default ContactForm;