import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import myCV from '../../assets/Myresume.pdf';
import photo from '../../assets/photo.png';

const Home = () => {


    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 668);
    
        useEffect(() => {
          const mediaQuery = window.matchMedia('(max-width: 668px)');
          
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
    { isDesktop ? (
    <section id='home' className='rounded-2xl mb-[1rem] flex flex-wrap items-center justify-between p-[20px] overflow-hidden'>
        <div className='w-[90vw] mx-auto  flex align-center justify-between items-center h-[90vh] gap-10 flex-wrap'>
            <div className='flex-1/4 flex flex-col'>
            <div>
                <h1 className='text-[2rem] font-bold'>Hi,<span className='text-[1.3rem]'>I'm</span> <span className='text-[1.3rem] font-normal'>Sumit Kumar</span></h1>
                <h2 className='text-[2.5rem] font-bold relative pasion overflow-hidden'><span className='text-[#6a0e8b] '>Frontend</span> Developer</h2>
                <p className='text-[1rem] text-fuchsia-200 font-normal'>
                    Hello! I'm a passionate beginner in Frontend Developer, eager to learn and grow my skills. I’m excited about building creative, functional projects and improving with every new challenge. This portfolio showcases some of my early work, and I’m constantly working on new projects to expand my knowledge. Thanks for visiting—I look forward to connecting and growing together!"
                </p>
            </div>
            <div className='flex gap-4 mt-10 text-[#350645] relative '>
                <ScrollLink to='contact' smooth={true} duration={500} className='bg-white button button1 relative overflow-hidden font-bold px-[1.4rem] py-[.4rem] rounded-2xl cursor-pointer hover:scale-[.9]'>Contact</ScrollLink>
                <ScrollLink to={myCV} smooth={true} duration={500} className='bg-white button button2 relative overflow-hidden font-bold px-[1.4rem] py-[.4rem] rounded-2xl cursor-pointer hover:scale-[.9]'>Download CV</ScrollLink>
            </div>
            <div className='flex gap-5 items-center mt-8 text-black'>
                <a href="https://www.instagram.com/sumit_rajput7480/" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.7-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.9a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm6.4-10.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                    </svg>
                </a>
                <a href="https://github.com/Sumit-Kumar-singh-17" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" fill='#6a0e8b' viewBox="0 0 24 24">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.9 1.3 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .8-1.6c-2.6-.3-5.4-1.3-5.4-5.7 0-1.2.5-2.2 1.2-3-.1-.3-.5-1.4.1-3a9.5 9.5 0 0 1 2.5 0 8.8 8.8 0 0 1 4.6 0 9.5 9.5 0 0 1 2.5 0c.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.4-2.8 5.4-5.5 5.7a2.7 2.7 0 0 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/sumit-kumar-21047b1b1" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.7h-3.54V9h3.4v1.56h.05c.47-.9 1.6-1.87 3.29-1.87 3.52 0 4.17 2.3 4.17 5.29v6.47zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm-1.77 13h3.55V9H3.57v11.43zM22.23 0H1.77C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.78V1.78C24 .8 23.2 0 22.23 0z" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100022101375340&sk=about" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                </a>
            </div>
                {/* fill="currentColor" */}
            </div>

            <div className='flex-1 '>
                <div className='profile rounded-[14%_86%_67%_33%_/_66%_62%_38%_34%] btn-pink-gradient relative'>
                    <img className='w-[55vw] relative bottom-[20px] opacity-[.9]' src={photo} alt="Profile"/>
                </div> 
            </div>
            
        </div>
    </section>
    ) : (
        <section id='home' className='rounded-2xl mb-[1rem] flex flex-wrap items-center justify-between p-[20px] overflow-hidden'>
        <div className='w-[90vw] mx-auto  flex flex-col items-center justify-center h-[90vh]'>
            <div className='flex justify-center '>
                <div className='profile rounded-[14%_86%_67%_33%_/_66%_62%_38%_34%] btn-pink-gradient relative w-[70%]'>
                    <img className='w-[100%] relative bottom-[20px] opacity-[.9]' src={photo} alt="Profile"/>
                </div> 
            </div>
            <div className=' flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[2rem] font-bold'>Hi,<span className='text-[1.3rem]'>I'm</span> <span className='text-[1.3rem] font-normal'>Sumit Kumar</span></h1>
                <h2 className='text-[2.3rem] font-bold relative pasion overflow-hidden'><span className='text-[#6a0e8b] '>Frontend</span> Developer</h2>
                <p className='text-[.9rem] text-fuchsia-200 font-normal'>
                    Hello! I'm a passionate beginner in Frontend Developer, eager to learn and grow my skills. I’m excited about building creative, functional projects and improving with every new challenge. This portfolio showcases some of my early work, and I’m constantly working on new projects to expand my knowledge. Thanks for visiting—I look forward to connecting and growing together!"
                </p>
            </div>
            <div className='flex gap-4 mt-10 text-[#350645] relative '>
                <ScrollLink to='contact' smooth={true} duration={500} className='bg-white border hover:scale-[.9] button button1 relative overflow-hidden font-bold px-[1.4rem] py-[.4rem] rounded-2xl cursor-pointer'><span className='z-10'>Contact</span></ScrollLink>
                <ScrollLink to={myCV} smooth={true} duration={500} className='border hover:scale-[.9] text-white button button2 relative overflow-hidden font-bold px-[1.4rem] py-[.4rem] rounded-2xl cursor-pointer'><span className='z-10'>Download CV</span></ScrollLink>
            </div>
            <div className='flex gap-5 items-center mt-8 text-black'>
                <a href="https://www.instagram.com/sumit_rajput7480/" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.7-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.9a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm6.4-10.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                    </svg>
                </a>
                <a href="https://github.com/Sumit-Kumar-singh-17" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" fill='#6a0e8b' viewBox="0 0 24 24">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.9 1.3 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .8-1.6c-2.6-.3-5.4-1.3-5.4-5.7 0-1.2.5-2.2 1.2-3-.1-.3-.5-1.4.1-3a9.5 9.5 0 0 1 2.5 0 8.8 8.8 0 0 1 4.6 0 9.5 9.5 0 0 1 2.5 0c.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.4-2.8 5.4-5.5 5.7a2.7 2.7 0 0 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/sumit-kumar-21047b1b1" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.7h-3.54V9h3.4v1.56h.05c.47-.9 1.6-1.87 3.29-1.87 3.52 0 4.17 2.3 4.17 5.29v6.47zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm-1.77 13h3.55V9H3.57v11.43zM22.23 0H1.77C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.78V1.78C24 .8 23.2 0 22.23 0z" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100022101375340&sk=about" className='p-3 hover:scale-[.9] rounded-[50%] bg-amber-50 w-[45px] h-[45px] flex justify-center items-center'>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill='#6a0e8b'>
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                </a>
            </div>
                {/* fill="currentColor" */}
            </div>

            
            
        </div>
    </section>
    )}
    </>

  )
}

export default Home
