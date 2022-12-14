import { useEffect } from "react";
import Card from "../components/card";
import stackFront from "../data/stack-front";
import AOS from 'aos'
import services from "../data/services";

export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="text-white flex flex-col justify-center w-full items-center gap-4">
            <p className="w-[60rem] text-xl mb-16">
                Olá! Meu nome é Pedro, moro em São Paulo e trabalho na área de desenvolvimento desde 2011. Posso te ajudar com seu app, site ou software?
            </p>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl" data-aos="flip-down" data-aos-duration="3000">SERVIÇOS</span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            
            <div 
                className="w-2/6 mx-auto grid grid-cols-2 mb-32" 
                data-aos="fade-up" 
                data-aos-duration="3000"
                data-aos-anchor-placement="bottom-bottom"
            >
                {services.map(item => (
                    <Card 
                        key={item.id} 
                        logo={item.logo} 
                        title={item.title} 
                        hover={false} 
                        textHeight={'230px'}
                        textWidth={'230px'}
                        width={'230px'}
                        height={'230px'}
                        topText={'-13.5rem'}
                        imageSize={50}
                        marginBottonTitle={'0rem'}
                        spaceBottonLogo={'m-4'}
                    />
                ))}
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl" data-aos="flip-down" data-aos-duration="3000">TECNOLOGIAS FRONT-END</span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            <div 
                className="w-2/6 mx-auto grid grid-cols-3 mb-32" 
                data-aos="fade-up" 
                data-aos-duration="3000"
            >
                {stackFront.map(item => (
                    <Card 
                        key={item.id} 
                        logo={item.logo} 
                        title={item.title} 
                        hover={false} 
                        textHeight={'120px'}
                        textWidth={'115px'}
                        width={'120px'}
                        height={'100px'}
                        topText={'-6.5rem'}
                        imageSize={70}
                        marginBottonTitle={'0rem'}
                    />
                ))}
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl" data-aos="flip-down" data-aos-duration="3000">TECNOLOGIAS BACK-END</span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            
        </div>
    )
}
