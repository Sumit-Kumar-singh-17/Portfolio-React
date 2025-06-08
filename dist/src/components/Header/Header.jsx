import React, {useEffect, useState} from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isOpen, setIsOpen] = useState(false);

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



  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  }
  return (
    <header className='w-full  shadow-md  py-[1rem]'>
        <div className='flex justify-between items-center w-[90%] mx-auto py-4 px-[2rem] accent-color-gradient rounded-[30px] shadow-lg'>
            <div className='text-[20px]  font-bold'>
                <h1 >Port<span className='text-[#FF70C6]'>folio</span></h1>
            </div>
            
            { isDesktop ? (
            <div>
                <ul className='flex justify-between items-center gap-10 text-[17px] font-semibold'>
                    <li className='flex flex-col items-center'>
                        <ScrollLink to='home' smooth={true} duration={500} className='cursor-pointer'>Home</ScrollLink>
                        <div className='w-[60px] border-b-[#FF70C6] border-b-[2px] rounded-b-[5px]'></div>
                    </li>
                    <li><ScrollLink to='about' smooth={true} duration={500} className='cursor-pointer'>About</ScrollLink></li>
                    <li><ScrollLink to='skill' smooth={true} duration={500} className='cursor-pointer'>Skills</ScrollLink></li>
                    <li><ScrollLink to='contact' smooth={true} duration={500} className='cursor-pointer'>Contact</ScrollLink></li>
                </ul>
            </div>
            ) : (
                <div className=''>
                    {/* Hamburger Menu */}
                    <div className="relative w-[30px] h-[30px] flex flex-col justify-between items-center cursor-pointer" onClick={toggleMenu}>
                        <div className={`w-[100%] h-[4px] bg-[#000] my-[4px] transition-all duration-300 absolute ${isOpen ? 'rotate-45 top-[10px]' : 'top-0'}`}></div>
                        <div className={`w-[100%] h-[4px] bg-[#000] my-[4px] transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'top-[10px]'}`}></div>
                        <div className={`w-[100%] h-[4px] bg-[#000] my-[4px] transition-all duration-300 absolute ${isOpen ? '-rotate-45 top-[10px]' : 'top-[20px]'}`}></div>
                    </div>
                    {isOpen && (
                        <ul className='absolute top-20 left-0  shadow-lg rounded-lg p-4 w-[100vw] accent-color-gradient z-10'>
                            <li className='py-2 flex flex-col '>
                                <ScrollLink to='home' smooth={true} duration={500} className='cursor-pointer'>Home</ScrollLink>
                                <div className='w-[45px] border-b-[#FF70C6] border-b-[2px] rounded-b-[5px]'></div>
                            </li>
                            <li className='py-2'><ScrollLink to='about' smooth={true} duration={500} className='cursor-pointer'>About</ScrollLink></li>
                            <li className='py-2'><ScrollLink to='skill' smooth={true} duration={500} className='cursor-pointer'>Skills</ScrollLink></li>
                            <li className='py-2'><ScrollLink to='contact' smooth={true} duration={500} className='cursor-pointer'>Contact</ScrollLink></li>
                        </ul>
                )}
                </div>

                
            )}
              
            
            <div>
                <ScrollLink to='contact' smooth={true} duration={500} className='btn-pink-gradient px-[2rem] py-[3px] rounded-2xl border-none cursor-pointer'>Contact</ScrollLink>
            </div>
        </div>
    </header>
  )
}

export default Header





