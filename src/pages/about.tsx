import { useEffect, useState } from "react";
import AOS from 'aos'
import workItem from "../data/work-item";
import TitleTopic from "../components/title-topic";
import Services from "../components/services";
import Frontend from "../components/frontend";
import Mobile from "../components/mobile";
import Backend from "../components/backend";

export default function About() {
    const [ yearsJob, setYearsJob ] = useState<number | null>(0)

    const [ countProject, setCountProject ] = useState(0)
    useEffect(() => {
        AOS.init()

        var date = new Date()
        setYearsJob(date.getFullYear())

        var projects = 0
        workItem.forEach(item => {
            projects = projects + item.project
            return projects
        })
        setCountProject(projects)
    }, [])

    return (
        <div className="text-white flex flex-col justify-center items-center gap-4">
            <p className="w-2/3 text-xl mb-16 mt-4
            max-sm:w-96 max-sm:mb-4">
                Olá! Meu nome é Pedro, moro em São Paulo e trabalho na área de desenvolvimento desde 2011. Posso te ajudar com seu app, site ou software?
            </p>
            <div className="flex flex-row gap-16 mb-24">
                <p className="text-green-400 text-6xl flex flex-col justify-center items-center">
                    {yearsJob ? yearsJob - 2011 : 0} <br /> <span className="text-xs text-white"> anos de experiencia</span>
                </p> 
                <p className="text-green-400 text-6xl flex flex-col justify-center items-center">
                    {workItem.length} <span className="text-xs text-white"> clientes</span>
                </p>
                <p className="text-green-400 text-6xl flex flex-col justify-center items-center">
                    {countProject} <span className="text-xs text-white"> projetos</span>
                </p>
            </div>
            
            <TitleTopic text="SERVIÇOS" />
            <Services />

            <TitleTopic text="FRONT-END" />
            <Frontend />

            <TitleTopic text="MOBILE" />
            <Mobile />
 
            <TitleTopic text="BACK-END" />
            <Backend />
        </div>
    )
}
