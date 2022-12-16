import stackMobile from "../data/stack-mobile"
import Card from "./card"

export default function Mobile() {
  return (
    <div 
    className="mx-auto grid grid-cols-2 mb-32
    max-sm:grid-cols-2 max-sm:mb-16" 
    data-aos="fade-up" 
    data-aos-duration="3000"
>
    {stackMobile.map(item => (
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
            marginBottonTitle={'0rem'}
        />
    ))}
  </div>
  )
}