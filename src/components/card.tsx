import Image from 'next/image'
import { useRouter } from 'next/router'
import { Eye } from 'phosphor-react'
import { useEffect, useState } from 'react'

export interface ICardItem {
    id?: number
    logo?: string
    project?: number
    title?: string
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
    marginBottonTitle: string
    spaceBottonLogo?: string
    resume?: string
}

export default function Card(props: ICardItem) {
    const [ hoverLayout, setHoverLayout ] = useState(false)
    const [ adjustHoverCard, setAdjustHoverCard ] = useState('')
    const router = useRouter()

    function handleClickEye(id: string){
       router.push(`/job-detail/${id}`)
    }

    function onlyNumbers(text: string) {
        var numsStr = text.replace(/[^0-9]/g,'');
        return parseInt(numsStr);
    }

    useEffect(() => {
        if(window.innerWidth < 640){
            setAdjustHoverCard('0rem')
        }
    }, [])

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
                <p 
                className="relative text-white text-xs text-center
                                max-2xl:text-xs 
                                max-sm:text-xs max-sm:mb-1"
                                style={{
                                    maxWidth: props.textWidth, 
                                    maxHeight: props.textHeight, 
                                    top: props.topText,
                                    marginBottom: props.marginBottonTitle,
                                    left: props.left
                                }}
                                
                >
                    <span 
                        className="absolute top-[-2.4rem] left-[-1rem] rounded-lg border bg-green-400 
                        max-sm:mt-0
                        "                        
                        style={{
                            display: hoverLayout 
                            ? 'block' 
                            : 'none', width: props.width, height: props.height,
                            
                            marginTop: `-${onlyNumbers(props.marginBottonTitle) - 1}rem`
                            
                        }}
                        onClick={() => handleClickEye(`${props.id}`)}
                    >
                        <span className="flex justify-center items-center h-full">
                            <Eye size={32} className=" cursor-pointer"/>
                        </span>
                        
                    </span>
                    <Image 
                        src={props.logo ? props.logo : ''} 
                        alt={props.title ? props.title : ''} 
                        width={!props.imageSize ? 50 : props.imageSize} height={!props.imageSize ? 50 : props.imageSize} 
                        className={`mx-auto ${props.spaceBottonLogo}`}
                        quality={100}
                    />
                    <span className="grid grid-cols-1">
                        <span>
                            {props.title}
                        </span>
                        
                        <span className="p-4">
                            {props.resume}
                        </span>
                    </span>
                </p>
            </div>
        </>
    )
}