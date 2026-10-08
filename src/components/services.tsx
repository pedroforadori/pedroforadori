import Link from "next/link";
import services from "../data/services";
import InfoCardContent, { INFO_CARD_CLASS } from "./infoCard";

export default function Services(){
  return (
    <div
      className="mx-auto mb-32 grid w-full max-w-3xl grid-cols-2 gap-4 px-6
      max-sm:grid-cols-1 max-sm:mb-16"
    >
      {services.map((item, i) => (
        <Link
          key={item.id}
          href="#contact-section"
          className={`${INFO_CARD_CLASS} block transition-colors duration-300 hover:border-green-500`}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay={i * 100}
        >
          <InfoCardContent
            logo={item.logo}
            title={item.title}
            description={item.resume}
            footerLabel="Solicitar orçamento"
            logoBackground={false}
            index={i}
          />
        </Link>
      ))}
    </div>
  )
}
