import { useEffect, useState } from "react";
import Card from "../components/card";
import stackFront from "../data/stack-front";
import AOS from 'aos'
import services from "../data/services";
import stackBack from "../data/stack-back";
import stackMobile from "../data/stack-mobile";
import workItem from "../data/work-item";


export default function About() {
    const [ yearsJob, setYearsJob ] = useState<number | null>(0)
    useEffect(() => {
        AOS.init()

        var date = new Date()
        setYearsJob(date.getFullYear())
    }, [])

    return (
        <div className="text-white flex flex-col justify-center items-center gap-4
        ">
            <p className="w-2/3 text-xl mb-16 mt-4 px-8
            max-sm:w-96 max-sm:mb-4">
                Olá! Meu nome é Pedro, moro em São Paulo e trabalho na área de desenvolvimento desde 2011. Posso te ajudar com seu app, site ou software?
            </p>
            <div className="flex flex-row gap-16">
                <p className="text-green-400 text-8xl flex flex-col justify-center items-center">
                    {yearsJob ? yearsJob - 2011 : 0} <br /> <span className="text-xl text-white"> anos de experiencia</span>
                </p> 
                    
                <p className="text-green-400 text-8xl flex flex-col justify-center items-center">
                    {workItem.length} <span className="text-xl text-white"> projetos</span>
                </p>
            </div>
            
            <div className="w-full flex flex-row items-center justify-center gap-2
            max-sm:mt-0">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl max-sm:text-xl" 
                      data-aos="flip-down" 
                      data-aos-duration="3000">
                        SERVIÇOS
                </span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            
            <div 
                className="mx-auto grid grid-cols-2 mb-32
                max-sm:grid-cols-1 max-sm:mb-16" 
                data-aos="fade-up" 
                data-aos-duration="3000"
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
                        resume={item.resume}
                    />
                ))}
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2
            max-sm:mt-0">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl max-sm:text-xl" 
                      data-aos="flip-down" 
                      data-aos-duration="3000">
                        FRONT-END
                </span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            <div 
                className="mx-auto grid grid-cols-3 mb-32
                max-sm:grid-cols-2 max-sm:mb-16" 
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
            <div className="w-full flex flex-row items-center justify-center gap-2
            max-sm:mt-0">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl max-sm:text-xl" 
                      data-aos="flip-down" 
                      data-aos-duration="3000">
                        MOBILE
                </span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            <div 
                className="mx-auto grid grid-cols-2 mb-32
                max-sm:grid-cols-2 max-sm:mb-16" 
                data-aos="fade-up" 
                data-aos-duration="3000"
            >
                {stackMobile.map(item => (
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
            <div className="w-full flex flex-row items-center justify-center gap-2
            max-sm:mt-0">
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                />
                <span className="text-2xl max-sm:text-xl" 
                      data-aos="flip-down" 
                      data-aos-duration="3000">
                        BACK-END
                </span>    
                <div 
                    className="h-[1px] bg-green-400 w-[15%]"
                    data-aos="fade-left" 
                    data-aos-duration="3000"
                />
            </div>
            <div 
                className="mx-auto grid grid-cols-3 mb-32
                max-sm:grid-cols-2 max-sm:mb-16" 
                data-aos="fade-up" 
                data-aos-duration="3000"
            >
                {stackBack.map(item => (
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
           
        </div>
    )
}
