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
        <div className="w-[200px] h-[200px] m-2 hover:bg-green-400 hover:rounded-lg">
            <div
                className="w-[200px] h-[200px] opacity-10 rounded-lg border border-slate-100  bg-white  "
            >
            </div>
            
            <p
                className="w-[180px] h-[200px] relative top-[-10rem] left-4 text-white text-xs uppercase mb-8 
                            max-2xl:text-xs 
                            max-sm:text-xs max-sm:w-48 max-sm:p-2 max-sm:mb-1 max-sm:px-2 max-sm:left-2"
                >
                <Image 
                    src={props.logo} 
                    alt={props.title} 
                    width={50} height={50} 
                    className="mb-4 mx-auto"
                />
                {props.title}
            </p>
        </div>

    )
}