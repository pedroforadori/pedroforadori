import Image from "next/image";
import cnn from '../../public/cnn.svg'
import leroy from '../../public/leroy.jpg'
import bradesco from '../../public/bradesco.png'
import { motion, useScroll } from 'framer-motion'
import WorkItem from "../components/work-item";
import workItem from "../data/work-item";

export default function Work() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="overflow-hidden">
            <div className="flex flex-col w-full h-[100vh] items-center justify-center mx-auto max-sm:h-auto max-sm:my-8">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-[10px] bg-[#056CF2] origin-left"
                    style={{ scaleX: scrollYProgress }}
                />
                <motion.h1
                    className="w-1/2 uppercase underline text-black text-4xl mt-8 max-2xl:text-xl max-sm:text-xs "
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    meus trabalhos e empresas que ja trabalhei como consultor
                </motion.h1>
                <motion.p
                    className="w-1/2 text-black text-4xl mt-8  max-2xl:text-xl max-sm:text-xs"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    Ao longo dos anos, tive a sorte de ter trabalhado com algumas pessoas e empresas incríveis em alguns projetos interessantes. Abaixo estão algumas das empresas com as quais tive o prazer de trabalhar.
                </motion.p>
                <motion.p
                    className="w-1/2 text-black text-4xl mt-8  max-2xl:text-xl max-sm:text-xs"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 3 }}
                >
                    Devido à natureza de alguns clientes com quem trabalhei, não posso revelar todos os aspectos dos projetos. No entanto, aqui está a lista de empresas com as quais
                    trabalhei no passado.
                </motion.p>

            </div>
            {workItem.map(item => (
                <WorkItem 
                    key={item.id}
                    id={item.id}
                    color={item.color} 
                    description={item.description} 
                    title={item.title} 
                    logo={item.logo}
                    imageUrl={item.imageUrl} />
            ))}
        </div>
    )
}
