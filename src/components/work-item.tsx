import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Eye, X } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'

export interface IWorkItem {
    id: number
    color: string
    logo: string
    imageUrl: string
    title: string
    description: string[]
    stack: string[]
    site?: [{
        id: number
        title: string
        url: string
    }]
}

export default function WorkItem(props: IWorkItem) {
    const [ hoverLayout, setHoverLayout ] = useState(false)
    const [ viewJob, setViewJob ] = useState(false)
    const job = useRef(null)
    const router = useRouter()

    const handleCloseViewJob = () =>  setViewJob(false)

    function handleClickEye(id: string){
       router.push(`/job-detail/${id}`)
    }

    return (
        <>
            <div className="w-[200px] h-[200px] m-2" onMouseOver={() => setHoverLayout(true)} onMouseOut={() => setHoverLayout(false)}>
                <div
                    className="w-[200px] h-[200px] opacity-10 rounded-lg border border-slate-100  bg-white"
                />
                <p className="max-w-[180px] max-h-[200px] relative top-[-10rem] left-4 text-white text-xs uppercase mb-8 
                                max-2xl:text-xs 
                                max-sm:text-xs max-sm:w-48 max-sm:p-2 max-sm:mb-1 max-sm:px-2 max-sm:left-2"
                                
                >
                    <span 
                        className="w-[200px] h-[200px] absolute top-[-2.4rem] left-[-1rem] rounded-lg border bg-green-400"
                        style={{display: hoverLayout ? 'block' : 'none'}}
                        onClick={() => handleClickEye(`${props.id}`)}
                    >
                        <span className="flex justify-center items-center h-full">
                            <Eye size={32} className=" cursor-pointer"/>
                        </span>
                        
                    </span>
                    <Image 
                        src={props.logo} 
                        alt={props.title} 
                        width={50} height={50} 
                        className="mb-4 mx-auto"
                    />
                    {props.title}
                </p>
            </div>
            {/* <div 
                className="w-[700px] h-[700px] absolute rounded-lg shadow-2xl bg-gradient-to-r from-green-400 via-green-300 to-green-200 z-10"
                style={{display: viewJob ? 'block' : 'none'}}
                ref={job}
                id="job"
                onMouseLeave={handleCloseViewJob}
            >
                <div className="w-full flex items-end justify-end p-2">
                    <X size={24} onClick={handleCloseViewJob} className="cursor-pointer text-black"/>
                </div>
                
            </div> */}
        </>
    )
}