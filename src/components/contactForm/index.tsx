'use client'
import { api } from '@/common/api';
import React, { useState } from 'react';

interface Props {

}

const ContactForm: React.FC<Props> = ({ }) => {
    const [fields, setfields] = useState({ name: '', email: '', msg: "" })
    const [errors1, seterrors] = useState<string[]>([])
    const handleChange = (e: any) => {
        setfields({ ...fields, [e.target.name]: e.target.value })
    }
    const handleOnBLur = (param: "name" | "email") => {
        console.log("llllllllllllll");

        if (fields[param] === "") {
            return seterrors([...errors1, param])
        }
        else if(fields[param] !== ""){
            return seterrors([...errors1.filter(item=>item!==param)])
        }
    }

        const handleSubmit = async(e:any)=>{
            e.preventDefault();
            try {
                const data = await api.post('/send-mail',fields)
                seterrors(["success"])
                
            } catch (error) {
                seterrors(['name',"email"])
                
            }
        }

    return (
        <form action="" id='contactForm' onSubmit={handleSubmit}>
       
            <div>

                <input type="text" name="name" id="fullname" onChange={handleChange} onBlur={() => handleOnBLur("name")} className=' bg-transparent' />
                <label className={'uppercase ' + (fields.name ? 'top-[-20px] ' : 'top-0') + (errors1.find(item => item === "name") ? " text-red-700" : "")} htmlFor="fullname">FUll Name</label>

            </div>
            <div className='mt-10'>

                <input type="text" name="email" id="email" onChange={handleChange} onBlur={() => handleOnBLur("email")} className=' bg-transparent'/>
                <label htmlFor="email" className={'uppercase ' + (fields.email ? 'top-[-20px] ' : 'top-0') + (errors1.find(item => item === "email") ? " text-red-700" : "")} >Email ADDress</label>

            </div>
            <div className='mt-10'>

                <label htmlFor="msg" className={' text-[16px] font-bold'} >Your Message</label>
                <textarea className='mt-1 p-2 w-full block outline-none border-[1.5px] border-black border-solid bg-transparent' name="msg" id="msg" onChange={handleChange} cols={30} rows={10}></textarea>


            </div>
            <div className='flex justify-center mt-10'>
                <button type='submit' className=' px-20 py-3 border-[1.5px] border-black border-solid '>SUBMiT</button>
            </div>

            {
                errors1.find(item=>item==="success")&& <div className='mt-3 p-3 rounded bg-green-200 text-green-800'>The form has been successfully submitted</div>
            }
        </form>
    );
};

export default ContactForm;