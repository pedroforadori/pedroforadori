import Link from "next/link";

export default function Header(){
    return (
        <div className="h-8 w-full text-white text-xl mr-2 max-sm:text-xs">
            <nav className="flex justify-start gap-5 pt-4 pl-4 max-sm:justify-center">
                <Link href="/work" >
                    <span className="text-black hover:underline">
                        meus trabalhos
                    </span>
                </Link>
                <Link href="#" >
                    <span className="text-black hover:underline">
                        sobre mim
                    </span>
                </Link>
                <Link href="#" >
                    <span className="text-black hover:underline">
                        entre em contato
                    </span>
                </Link>
            </nav>
         </div>
    )
}