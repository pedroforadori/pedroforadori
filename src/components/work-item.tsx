import Image from 'next/image'

interface IWorkItem {
    id: number
    color: string
    logo: string
    imageUrl: string
    title: string
    description: string
}

export default function WorkItem(props: IWorkItem) {
    return (
        <>
            {+props.id?.toString().substring(-1) === 0 ||
                +props.id?.toString().substring(-1) === 2 ||
                +props.id?.toString().substring(-1) === 4 ||
                +props.id?.toString().substring(-1) === 6 ||
                +props.id?.toString().substring(-1) === 8
                ?
                <div className="w-full  flex items-center">
                    <div
                        className="w-[60.44%] h-[50vh] m-4 rounded shadow-2xl max-sm:w-full max-sm:h-auto"
                        style={{ backgroundColor: props.color }}
                    >
                        <div className="flex flex-col items-center mt-4">
                            <div className="min-[600px]:hidden">
                                <Image src={props.logo} alt={props.title} priority width={50} height={50} className="mb-4" />
                            </div>
                            <strong 
                                className="text-[#26A653] text-4xl uppercase w-4/5 mb-8 max-2xl:text-xl max-sm:text-xs max-sm:w-64 max-sm:p-2 max-sm:mb-1">
                                {props.title}
                            </strong>
                            <p className="text-[#26A653] text-2xl w-4/5 max-2xl:text-xl max-sm:text-xs max-sm:w-64 max-sm:p-4 ">
                                {props.description}
                            </p>
                            

                        </div>

                    </div>
                    <div className="pl-6 w-3/5 flex flex-col items-center gap-3 p-4 max-sm:hidden">
                        <Image src={props.logo} alt={props.title} priority width={100} height={100} />
                        <span className="text-black mt-2 uppercase">{props.title}</span>
                    </div>
                </div>
                :
                <div className="w-full flex items-center">
                    <div className="pl-6 w-3/5 flex flex-col items-center gap-3 p-4 max-sm:hidden">
                        <Image src={props.logo} alt={props.title} priority width={100} height={100} />
                        <span className="text-black uppercase">{props.title}</span>
                    </div>
                    <div
                        className="w-[60.44%] h-[50vh] m-4 rounded shadow-2xl max-sm:w-full max-sm:h-auto"
                        style={{ backgroundColor: props.color }}
                    >
                        <div className="flex flex-col items-center mt-4">
                            <div className="min-[600px]:hidden">
                                <Image src={props.logo} alt={props.title} priority width={50} height={50} className="mb-4" />
                            </div>
                            <strong 
                                className="text-[#26A653] text-4xl uppercase w-4/5 mb-8 max-2xl:text-xl max-sm:text-xs max-sm:w-64 max-sm:p-2 max-sm:mb-1">
                                {props.title}
                            </strong>
                            <p className="text-[#26A653] text-2xl w-4/5 max-2xl:text-xl max-sm:text-xs max-sm:w-64 max-sm:p-4 ">
                                {props.description}
                            </p>
                           

                        </div>
                    </div>
                </div>
            }

        </>
    )
}