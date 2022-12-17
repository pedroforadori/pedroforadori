import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import me from '../../public/assets/me.jpg'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import Loader from "../components/loader";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ emailSucess, setEmailSucess] = useState('')
  const [loader, setLoader ] = useState(false)
  const [ imageAdjust, setImageAdjust ] = useState(300)

  useEffect(() => {
    if(window.innerWidth < 640){
      setImageAdjust(200)
    }
  }, [])

  function handleSendEmail(event: FormEvent) {
    event.preventDefault();

    if (name === "" && email === "" && message === "") {
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    setLoader(true)

    emailjs.send('service_de3jc8g', 'template_boso1y5', templateParams, 'bHD7eqUy0xfHqhhqD')
    .then((response) => {
      setName("")
      setEmail("")
      setMessage("")
      setLoader(false)
      setEmailSucess("Email enviado com sucesso! :D")

    }, (error) => {
      console.log(error)
    })
    
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-green-500 h-screen mt-[-80px]">
      <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1 opacity-80 max-sm:mt-14">
        <motion.div
          initial={{ '--rotate': '0deg' } as any}
          animate={{ '--rotate': '360deg' } as any}
          transition={{ duration: 2 }}
        >
          <Image 
            src={me} alt="foto no chile" 
            quality={100} 
            width={imageAdjust} 
            className="rounded-full" 
            style={{ transform: 'rotate(var(--rotate))' }}/>
        </motion.div>
        
        <form
          onSubmit={handleSendEmail}
          className="flex flex-col gap-4 mt-4 max-sm:mt-0"
        >
          <input
            type="text"
            required
            placeholder="Seu nome"
            className="h-14 bg-transparent border-2 border-b-black border-transparent text-black placeholder-black 
            focus:outline-none required:focus:border-b-red-600 required:focus:placeholder-red-600"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Seu email"
            className="h-14 bg-transparent border-2  border-b-black border-transparent text-black placeholder-black 
            focus:outline-none required:focus:border-b-red-600 required:focus:placeholder-red-600"
            onChange={(e) => setEmail(e.target.value)}
          />
            <textarea
              required
              placeholder="Me conte aqui sobre seu projeto"
              className="flex-1 h-14 pt-4 bg-transparent border-2  border-b-black border-transparent text-black placeholder-black 
              focus:outline-none required:focus:border-b-red-600 required:focus:placeholder-red-600  max-sm:h-20"
              onChange={(e) => setMessage(e.target.value)}
            />
  
            <motion.button
                type="submit"
                className="bg-black rounded text-white h-10 w-full hover:opacity-80"
            >
              <div className="flex">
                <div className="flex-1">Enviar</div>
                {loader
                ? <div className="mr-3"><Loader /></div>
                : null
                }
              </div>
            </motion.button>
            <p>{emailSucess}</p>
        </form>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 justify-center text-xl w-2/4">
        <p className="text-black">
          Ou vou voce pode entrar em contato comigo direto pelo
          <span className="underline">
            <Link
              href="https://wa.me/5511981024517?text=Ola!%20Vamos%20conversar%20sobre%20seu%20projeto?"
              className="ml-2 cursor-pointer"
              target="_blank"
            >
              WhatsApp
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
