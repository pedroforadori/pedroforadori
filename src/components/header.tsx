import Link from "next/link";
import { ArrowRight, List, X } from "phosphor-react";
import { useState } from "react";

export default function Header(){
    const [ menuLayout, setMenuLayout ] = useState(false) 
    const [ arrow, setArrow ] = useState(false) 
    const [ arrowWork, setArrowWork ] = useState(false)
    const [ arrowAbout, setArrowAbout ] = useState(false) 
    const [ arrowContact, setArrowContact ] = useState(false) 
    return (
        <div className="h-16 w-full my-auto text-white text-xl mt-4 max-sm:text-xs">
            <div className="flex w-28 flex-row items-center gap-2  hover:text-green-400 cursor-pointer
            max-sm:w-20">
                <List 
                    size={40} 
                    onClick={() => setMenuLayout(true)} 
                    style={{display: menuLayout ? 'none' : 'block'}}  
                /> 
                <span style={{display: menuLayout ? 'none' : 'block'}}> MENU</span> 
                <X 
                    size={40} 
                    onClick={() => setMenuLayout(false)} 
                    style={{display: menuLayout ? 'block' : 'none'}} />
            </div>
            <div style={{display: menuLayout ? 'block' : 'none'}}>
                <nav className="w-full h-screen bg-white absolute overflow-x-hidden text-6xl max-sm:justify-center p-8 z-10
                max-sm:text-3xl
                ">
                    <Link href="/" onClick={() => setMenuLayout(false)}>
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
                    <Link href="/work" onClick={() => setMenuLayout(false)}>
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
                    <Link href="/about" onClick={() => setMenuLayout(false)}>
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
                    <Link href="#" onClick={() => setMenuLayout(false)}>
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
                </nav>
            </div>
            
         </div>
    )
}