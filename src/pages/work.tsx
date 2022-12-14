import Image from "next/image";
import cnn from '../../public/cnn.svg'
import leroy from '../../public/leroy.jpg'
import bradesco from '../../public/bradesco.png'
import { motion, useScroll } from 'framer-motion'
import WorkItem from "../components/card";
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
                top: ref.current?.offsetTop,
                behavior: 'smooth'
            })
          }
    }

    return (
        <div className="overflow-hidden w-full">
            <div className="flex flex-col h-screen items-center mx-auto max-sm:h-auto max-sm:my-8">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-[10px] bg-green-500 origin-left"
                    style={{ scaleX: scrollYProgress }}
                />
                <motion.h1
                    className="w-1/2 uppercase underline text-white text-4xl mt-8 max-sm:text-xs "
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    meus projetos e empresas que ja trabalhei como consultor
                </motion.h1>
                <motion.p
                    className="w-1/2 text-white text-4xl mt-8  max-2xl:text-3xl max-sm:text-xs"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    Ao longo dos anos, tive a sorte de ter trabalhado com algumas pessoas e empresas incríveis em alguns projetos interessantes. Abaixo estão algumas das empresas com as quais tive o prazer de trabalhar.
                </motion.p>
                <motion.p
                    className="w-1/2 text-white text-4xl mt-8  max-2xl:text-3xl max-sm:text-xs"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 3 }}
                >
                    Devido à natureza de alguns clientes com quem trabalhei, não posso revelar todos os aspectos dos projetos. No entanto, aqui está a lista de empresas com as quais
                    trabalhei no passado.
                </motion.p>
                <motion.div 
                    className="w-full flex justify-center items-end text-green-400 h-2/5"
                    // data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800"
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
                className="grid grid-cols-2 w-1/3 mx-auto h-screen p-20"
                data-aos="fade-up" 
                data-aos-duration="3000"
                ref={jobs}
            >
                {workItem.map(item => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        description={item.description} 
                        title={item.title} 
                        logo={item.logo}
                        imageUrl={item.imageUrl} 
                        stack={item.stack}
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

