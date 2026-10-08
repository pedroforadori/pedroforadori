import Link from "next/link";
import { ArrowArcLeft } from "phosphor-react";

export default function ButtonBack() {
    return (
        <Link href="/" className="cursor-pointer flex flex-row items-center gap-2 mb-4 max-sm:self-start text-white p-10 pt-28 hover:underline max-sm:px-6 max-sm:pt-24">
            <ArrowArcLeft size={32} /> Voltar
        </Link>
    )
}