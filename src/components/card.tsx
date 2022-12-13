import Image from 'next/image'
import { useRouter } from 'next/router'
import { Eye } from 'phosphor-react'
import { useState } from 'react'

export interface ICardItem {
    id?: number
    logo: string
    imageUrl?: string
    title: string
    description?: string[]
    stack?: string[]
    site?: [{
        id: number
        title: string
        url: string
    }]
    hover: boolean
    textWidth: string
    textHeight: string
    width: string
    height: string
    topText: string
    imageSize?: number
    left?: string
    marginBotton: string
}

export default function Card(props: ICardItem) {
    const [ hoverLayout, setHoverLayout ] = useState(false)
    const router = useRouter()

    function handleClickEye(id: string){
       router.push(`/job-detail/${id}`)
    }

    return (
        <>
            <div 
                className="m-2" 
                onMouseOver={() => setHoverLayout(props.hover)} 
                onMouseOut={() => setHoverLayout(false)}
                style={{width: props.width, height: props.height}}
            >
                <div
                    className="opacity-10 rounded-lg border border-slate-100 bg-white"
                    style={{width: props.width, height: props.height}}
                />
                <p className="relative text-white text-xs
                                max-2xl:text-xs 
                                max-sm:text-xs max-sm:w-48 max-sm:p-2 max-sm:mb-1 max-sm:px-2 max-sm:left-2 text-center"
                                style={{
                                    maxWidth: props.textWidth, 
                                    maxHeight: props.textHeight, 
                                    top: props.topText,
                                    marginBottom: props.marginBotton,
                                    left: props.left
                                    
                                }}
                                
                >
                    <span 
                        className="absolute top-[-2.4rem] left-[-1rem] rounded-lg border bg-green-400"
                        style={{display: hoverLayout ? 'block' : 'none', width: props.width, height: props.height}}
                        onClick={() => handleClickEye(`${props.id}`)}
                    >
                        <span className="flex justify-center items-center h-full">
                            <Eye size={32} className=" cursor-pointer"/>
                        </span>
                        
                    </span>
                    <Image 
                        src={props.logo} 
                        alt={props.title} 
                        width={!props.imageSize ? 50 : props.imageSize} height={!props.imageSize ? 50 : props.imageSize} 
                        className="mx-auto"
                        quality={100}
                    />
                    {props.title}
                </p>
            </div>
        </>
    )
}