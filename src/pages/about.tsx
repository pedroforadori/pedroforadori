import Card from "../components/card";
import stackFront from "../data/stack-front";

export default function About() {
    return (
        <div className="text-white flex flex-col justify-center w-full items-center gap-4">
            <p className="w-[60rem] text-xl">
                Olá! Meu nome é Pedro, moro em São Paulo e trabalho na área de desenvolvimento desde 2011. Posso te ajudar com seu app, site ou software?
            </p>
            <div>
            <hr className="my-6 h-px bg-gray-200 border-0"></hr>
            </div>
            <span className="w-full text-2xl text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-green-400 
                            after:inline-block after:relative after:align-middle after:w-1/4 
                            before:bg-green-400 before:inline-block before:relative before:align-middle 
                            before:w-1/4 before:right-2 after:left-2 p-4"
            >
                TECNOLOGIAS FRONT-END
            </span>
            <div className="flex flex-wrap justify-center items-center w-2/5 mx-auto ">
                {stackFront.map(item => (
                    <Card 
                        key={item.id} 
                        logo={item.logo} 
                        title={item.title} 
                        hover={false} 
                        textHeight={'120px'}
                        textWidth={'115px'}
                        width={'120px'}
                        height={'100px'}
                        topText={'-6.5rem'}
                        imageSize={70}
                        marginBotton={'0rem'}
                    />
                ))}
            </div>
        </div>
    )
}
