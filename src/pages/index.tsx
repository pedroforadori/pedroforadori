import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import me from '../../public/me.jpg'
import About from './about'

export default function Home() {
  return (
    <div className="flex flex-col max-sm:p-2">
      
      <div className="text-white h-screen text-5xl flex flex-col justify-center items-center  w-full">
        <motion.p 
          className="w-2/5 max-2xl:text-5xl max-lg:text-2xl max-sm:text-xs max-sm:w-full flex justify-center"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          PEDRO FORADORI DESENVOLVEDOR DE SOFTWARE, APP E SITES 
        </motion.p> 
        <div className="w-2/5 flex flex-row justify-between mt-10 uppercase max-sm:w-full">
          <div className="rounded-md border border-green-500 w-32 h-12  text-green-500 text-xs flex items-center justify-center cursor-pointer hover:animate-bounce hover:cursor-pointer">
            <Link href="/work">
              projetos
            </Link>
          </div>
          <div className="rounded-md border border-green-500 w-32 h-12 text-green-500 text-xs flex items-center justify-center cursor-pointer hover:animate-bounce hover:cursor-pointer">
            sobre
          </div>
          <div className="rounded-md border border-green-500 w-32 h-12 text-green-500 text-xs flex items-center justify-center cursor-pointer hover:animate-bounce hover:cursor-pointer">
            contato
          </div>
       </div>
      </div>
      

      {/* <About /> */}
      
      {/* <WorkTeste /> */}
    </div>
    
  )
}
