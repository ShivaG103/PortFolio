"use client"

import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = "Say Hello "

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then( () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true)
        },
      );
  };

  return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container  */}
        <div className='h-1/4 lg:h-full lg:w-1/2 flex justify-center items-center text-4xl md:text-6xl'>
          <div>
            {text.split("").map((letter, i) => (
              <motion.span key={i} initial={{opacity:1}} animate={{opacity:0}} transition={{ duration:3, repeat:Infinity, delay: i * 0.1}}>{letter}</motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container  */}
        <form ref={form} onSubmit={sendEmail} className='h-3/4 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base sm:text-xl flex flex-col gap-8 justify-center p-14 sm:p-20 md:p-24'>
              <div className="flex flex-col gap-2">
                <span>Dear Shivam Gupta,</span>
                <textarea rows={6} name="user_message" className="bg-transparent border-b-2 border-b-black outline-none resize-none scrollb" required/>
              </div>
              <div className="flex flex-col gap-2">
                <span>I am : </span>
                <input type="text" name="user_name" className="bg-transparent border-b-2 border-b-black outline-none" required/>
              </div>
              <div className="flex flex-col gap-2">
                <span>My mail address is : </span>
                <input type="email" name="user_email" className="bg-transparent border-b-2 border-b-black outline-none" required/>
              </div>
              <span>Regards</span>
              <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>

              {success && <span className='text-green-600 font-semibold text-center'>Your Message has been send Successfully!</span>}
              {error && <span className='text-red-600 font-semibold text-center'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage