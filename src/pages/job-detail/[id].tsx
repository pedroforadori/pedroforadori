import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { title } from "process"
import { IWorkItem } from "../../components/work-item"
import workItem from "../../data/work-item"

export default function JobDetail(props: IWorkItem){

  return (
    <div className="flex flex-col items-center mx-auto p-8 text-white gap-6 w-2/3">
      <div className="flex flex-row items-center gap-3">
        <Image src={props.logo} alt={props.title} width={100} height={100} />
        <span className="uppercase text-4xl">{props.title}</span>
      </div>
      <div className="uppercase text-2xl mb-4">
        {props.description.map(item => (
          <p className="mb-4 mt-6" key={item}>{item}</p>
        ))}
      </div>
      <p className="uppercase">Stack utilizada:</p>
      <ol className="flex flex-row gap-2">
        {props.stack.map(item => (
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
  const [jobs] = workItem.filter(item => item.id == Number(id))

  return {
    props: {
      id: id,
      logo: jobs.logo,
      title: jobs.title,
      description: jobs.description,
      stack: jobs.stack,
      site: jobs.site
    }
  }
}