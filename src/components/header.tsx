import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, List, X } from "phosphor-react";
import { useState } from "react";

export default function Header(){
    const [ isOpen, setIsOpen] = useState(false) 
    const [ arrow, setArrow ] = useState(false) 
    const [ arrowWork, setArrowWork ] = useState(false)
    const [ arrowAbout, setArrowAbout ] = useState(false) 
    const [ arrowContact, setArrowContact ] = useState(false) 
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
    return (
        <div className="h-16 w-full my-auto text-white text-xl mt-4 max-sm:text-xs">
            <div className="flex w-28 flex-row items-center gap-2  hover:text-green-400 cursor-pointer
            max-sm:w-20">
                <List 
                    size={40} 
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                /> 
                <span onClick={() => setIsOpen(isOpen => !isOpen)}> MENU</span> 
            </div>
            <div>
                <motion.nav className="w-full h-screen bg-white absolute overflow-x-hidden text-6xl max-sm:justify-center p-8 z-10
                max-sm:text-3xl
                "
                variants={variants}
                animate={isOpen ? "open" : "closed"}
            >
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <span className="text-black">
                            <div className="flex items-center mb-6" onMouseOver={() => setArrow(true)} onMouseOut={() => setArrow(false)}>
                                <span 
                                    style={{display: arrow ? 'block' : 'none'}}
                                >
                                    <ArrowRight size={50} className="text-green-500" id="arrow" />
                                </span>
                                home
                            </div>
                        </span>
                        <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </Link>
                    <Link href="/work" onClick={() => setIsOpen(false)}>
                        <span className="text-black">
                            <div className="flex items-center mb-6" onMouseOver={() => setArrowWork(true)} onMouseOut={() => setArrowWork(false)}>
                                <span 
                                    style={{display: arrowWork ? 'block' : 'none'}}
                                >
                                    <ArrowRight size={50} className="text-green-500" id="arrow-work"/>
                                </span>
                                meus trabalhos
                            </div>
                        </span>
                        <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                        <span className="text-black">
                            <div className="flex items-center mb-6" onMouseOver={() => setArrowAbout(true)} onMouseOut={() => setArrowAbout(false)}>
                                <span 
                                    style={{display: arrowAbout ? 'block' : 'none'}}
                                >
                                    <ArrowRight size={50} className="text-green-500" id="arrow-about"/>
                                </span>
                                sobre mim
                            </div>
                        </span>
                        <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <span className="text-black">
                            <div className="flex items-center mb-6" onMouseOver={() => setArrowContact(true)} onMouseOut={() => setArrowContact(false)}>
                                <span 
                                    style={{display: arrowContact ? 'block' : 'none'}}
                                >
                                    <ArrowRight size={50} className="text-green-500" id="arrow-contact"/>
                                </span>
                                entre em contato
                            </div>
                        </span>
                        <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    </Link>
                </motion.nav>
            </div>
            
         </div>
    )
}