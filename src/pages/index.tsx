import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import me from '../../public/me.jpg'

export default function Home() {
  return (
    <div className="flex flex-row">
      
      <div className="text-black h-[90vh] text-8xl text-left flex flex-col justify-center items-end w-full ml-5 pl-10">
        <motion.p 
          className="bg-[#0554F2] p-6 pl-96  max-2xl:text-5xl max-lg:text-2xl max-md:pl-60 max-sm:text-xs max-sm:pl-48"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          PEDRO FORADORI 
        </motion.p> 
        <motion.p 
          className="bg-[#F2EA7E] p-4 pl-96 max-2xl:text-5xl max-lg:text-2xl max-md:pl-60 max-sm:text-xs max-sm:pl-52"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
          SOFTWARE ENGINEER
        </motion.p>
        {/* <p className="mb-8">Olá!</p>
        <p className="w-[60rem]">
          Meu nome é Pedro, moro em São Paulo e trabalho na área de desenvolvimento desde 2011. Posso te ajudar com seu app, site ou software.
        </p> */}
        
      </div>
    </div>
    
  )
}
