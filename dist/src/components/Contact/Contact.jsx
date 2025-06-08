import React, { useState, useEffect } from 'react'
const Contact = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      
      const handleMediaChange = (e) => {
        setIsDesktop(!e.matches);  // e.matches = true means width <= 768px
      };
      
      // Initial check
      setIsDesktop(!mediaQuery.matches);
      
      mediaQuery.addEventListener('change', handleMediaChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }, []);
  return (

    <>
    {  isDesktop ? (
    <section id='contact' className='flex flex-wrap items-start primary-bg-gradient-2 min-h-[100vh] pt-[8rem] px-[9%] pb-[2rem]'>
        <form action="#" className='mt-[1rem] mx-[1rem] mb-[3rem] text-center w-[42vw] '>
            <h2 className='mb-[3rem] mt-[-6rem] w-[100%] text-[3rem] text-white font-bold text-center'>Contact <span className='text-[#a92fd6]'>Us !</span></h2>
            <div className='flex flex-wrap flex-col w-full justify-between'>
                <input type="text" id='name' name='user_name' placeholder='Full Name' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem] px-[1rem] py-[1rem]'/>
                <input type="email" id='email' name='uer_email' placeholder='Email Address' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem] px-[1rem] py-[1rem]'/>
            </div>

            <textarea name="message" id="message" cols="30" rows="7" placeholder='Your Message' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem] px-[1rem] py-[1rem]'></textarea>
            <button type='submit value="send' className='cursor-pointer bg-[#939598] mt-[2rem] shadow-[0_0_0.8rem_#939598] rounded-[2rem] text-[#fff] text-[1rem] font-medium tracking-[.1rem] py-[1rem] px-[2rem]'>Send Message</button>
        </form>
        <div className='flex items-start flex-1 justify-end'>
            <img src="https://www.coderarmy.in/assets/images/Imgwebp/webp/contactmewebp.jpg" alt="" className='h-auto mr-[-60px] mt-[40px] w-[100%] max-w-[100%] transition-transform duration-100'/>
        </div>
    </section>
    ) : (
        <section id='contact' className='flex flex-col justify-between mt-[1rem] items-center flex-wrap  primary-bg-gradient-2 min-h-[100vh] pt-[1rem] pb-[2rem]'>
            <h2 className='mt-[3rem]  w-[100%] text-[2.5rem] text-white font-bold text-center'>Contact <span className='text-[#a92fd6]'>Us !</span></h2>
            <div className='flex items-center flex-1 justify-center'>
            <img src="https://www.coderarmy.in/assets/images/Imgwebp/webp/contactmewebp.jpg" alt="" className='h-auto mt-[5px] w-[80%]  transition-transform duration-100'/>
        </div>
        <form action="#" className='mt-[1rem] mb-[1.5rem] text-center w-[90vw] '>
            
            <div className='flex flex-wrap flex-col w-full justify-between'>
                <input type="text" id='name' name='user_name' placeholder='Full Name' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem]  py-[1rem]'/>
                <input type="email" id='email' name='uer_email' placeholder='Email Address' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem]  py-[1rem]'/>
            </div>

            <textarea name="message" id="message" cols="30" rows="7" placeholder='Your Message' className='w-[100%] backdrop-blur-0 bg-[#939598] rounded-[0.8rem] text-white text-[1rem] my-[0.4rem] px-[1rem] py-[1rem]'></textarea>
            <button type='submit value="send' className='cursor-pointer bg-[#939598] mt-[2rem] shadow-[0_0_0.8rem_#939598] rounded-[2rem] text-[#fff] text-[1rem] font-medium tracking-[.1rem] py-[1rem] px-[2rem]'>Send Message</button>
        </form>
        
    </section>
    )

}
    </>
  )
}

export default Contact