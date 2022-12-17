import bradesco from '../../public/bradesco.png'
import { motion, useScroll } from 'framer-motion'
import workItem from "../data/work-item";
import Card from "../components/card";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import AOS from 'aos'
import { CaretDoubleDown } from "phosphor-react";

export default function Work() {
    const { scrollYProgress } = useScroll()
    const jobs = useRef(null)
    const [ arrowScrollY, setArrowScrollY] = useState(true)

    useEffect(() => {
        AOS.init()
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            if(window.scrollY > 300) {
                setArrowScrollY(false)
            }
            if(window.scrollY < 10) {
                setArrowScrollY(true)
            }
        })
    }, [])

    function handleScrollDown(ref: MutableRefObject<null>){
        if (typeof window !== "undefined") {
            window.scrollTo({
                //@ts-ignore
                top: ref.current?.offsetTop,
                behavior: 'smooth'
            })
          }
    }

    return (
        <div className="overflow-hidden w-full">
            <div className="flex flex-col h-screen items-center mx-auto 
            max-lg:h-[90vh]
            max-sm:h-auto max-sm:my-8">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-[10px] bg-green-500 origin-left"
                    style={{ scaleX: scrollYProgress }}
                />
                <motion.h1
                    className="w-1/2 uppercase underline text-white text-4xl mt-8 
                    max-lg:text-2xl
                    max-md:text-xl
                    max-sm:text-xs "
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    meus projetos e empresas que ja trabalhei como consultor
                </motion.h1>
                <motion.p
                    className="w-1/2 text-white text-4xl mt-8  
                    max-2xl:text-3xl 
                    max-lg:text-2xl 
                    max-md:text-xl
                    max-sm:text-xs"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    Ao longo dos anos, tive a sorte de ter trabalhado com algumas pessoas e empresas incríveis em alguns projetos interessantes. Abaixo estão algumas das empresas com as quais tive o prazer de trabalhar.
                </motion.p>
                <motion.p
                    className="w-1/2 text-white text-4xl mt-8 
                    max-2xl:text-3xl 
                    max-lg:text-2xl
                    max-md:text-xl
                    max-sm:text-xs"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 3 }}
                >
                    Devido à natureza de alguns clientes com quem trabalhei, não posso revelar todos os aspectos dos projetos. No entanto, aqui está a lista de empresas com as quais
                    trabalhei no passado.
                </motion.p>
                <motion.div 
                    className="w-full flex justify-center items-end text-green-400 h-2/5
                    max-sm:hidden"
                    whileHover={{y: 5}}
                    initial={{ y: 0 }}
                    animate={{ y: 5 }}
                    transition={{ duration: 1, repeat: Infinity }}
                >   
                    {arrowScrollY 
                    ? <CaretDoubleDown size={50} weight="thin" onClick={() => handleScrollDown(jobs)}/> 
                    : null }
                
                </motion.div>

            </div>
            
            <div 
                className="grid grid-cols-2 w-2/5 mx-auto h-auto p-20 
                max-2xl:w-3/5 max-xl:w-3/5 max-lg:w-10/12 max-md:w-full
                max-sm:flex max-sm:flex-col max-sm:w-full max-sm:h-auto max-sm:p-0 max-sm:items-center"
                data-aos="fade-up" 
                data-aos-duration="3000"
                ref={jobs}
            >
                {workItem.map(item => (
                    <Card 
                        key={item?.id}
                        id={item?.id}
                        description={item?.description} 
                        title={item?.title ? item?.title : ''} 
                        logo={item?.logo}
                        stack={item?.stack}
                        hover={true}
                        textHeight={'200px'}
                        textWidth={'180px'}
                        width={'200px'}
                        height={'200px'}
                        topText={'-10rem'}
                        marginBottonTitle={'2rem'}
                        left={'1rem'}
                        spaceBottonLogo={'m-4'}
                    />
                ))}
            </div>
            
        </div>
    )
}

