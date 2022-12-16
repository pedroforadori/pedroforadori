import services from "../data/services";
import Card from "./card";

export default function Services(){
  return (
    <div 
      className="mx-auto grid grid-cols-2 mb-32
      max-sm:grid-cols-1 max-sm:mb-16" 
      data-aos="fade-up" 
      data-aos-duration="3000"
  >
    {services.map(item => (
        <Card 
            key={item.id} 
            logo={item.logo} 
            title={item.title} 
            hover={false} 
            textHeight={'230px'}
            textWidth={'230px'}
            width={'230px'}
            height={'230px'}
            topText={'-13.5rem'}
            imageSize={50}
            marginBottonTitle={'0rem'}
            spaceBottonLogo={'m-4'}
            resume={item.resume}
        />
      ))}
  </div>
  )
}