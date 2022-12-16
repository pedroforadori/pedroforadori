interface ITitleTopic {
  text?: string
}

export default function TitleTopic(props: ITitleTopic) {
  return(
    <div className="w-full flex flex-row items-center justify-center gap-2
    max-sm:mt-0">
        <div 
            className="h-[1px] bg-green-400 w-[10%]
            max-sm:w-[9%] max-sm:h-[2px]"
            data-aos="fade-right" 
            data-aos-duration="3000"
        />
        <span className="text-2xl max-sm:text-xl" 
              data-aos="flip-down" 
              data-aos-duration="3000">
                {props.text}
        </span>    
        <div 
            className="h-[1px] bg-green-400 w-[10%]
            max-sm:w-[9%] max-sm:h-[2px]"
            data-aos="fade-left" 
            data-aos-duration="3000"
        />
    </div>
  )
}