import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { ICardItem } from "../../components/card"
import workItem from "../../data/work-item"

export default function JobDetail(props: ICardItem){

  return (
    <div className="flex flex-col items-center mx-auto p-8 text-white gap-6 w-2/3
    max-sm:w-full
    ">
      <div className="flex flex-row items-center gap-3 max-sm:flex-col">
        <Image src={props.logo ? props.logo : ''} alt={props.title ? props.title : ''} width={100} height={100} />
        <span className="uppercase text-4xl max-sm:text-xl max-sm:mt-4">{props.title}</span>
      </div>
      <div className="text-2xl mb-4 max-sm:text-xl">
        {props.description?.map(item => (
          <p className="mb-4 mt-6" key={item}>{item}</p>
        ))}
      </div>
      <p className="uppercase">Stack utilizada:</p>
      <ol className="flex flex-wrap gap-2 items-center max-sm:text-xs">
        {props.stack?.map(item => (
          <li
           className="border border-white rounded py-1 px-4"  
           key={item}
          >
            {item}
          </li>
        ))}
      </ol>
      {props.site?.map(item => (
          <Link key={item.id} target="_blank" className="cursor-pointer underline mt-4" href={item.url}>{item.title}</Link>
      ))}
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const id = context.params?.id
  const [jobs] = workItem.filter(item => item?.id == Number(id))

  return {
    props: {
      id: id,
      logo: jobs?.logo,
      title: jobs?.title,
      description: jobs?.description,
      stack: jobs?.stack,
      site: jobs?.site
    }
  }
}