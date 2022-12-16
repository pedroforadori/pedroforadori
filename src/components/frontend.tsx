import AOS from 'aos'
import { useEffect } from 'react'
import stackFront from '../data/stack-front'
import Card from './card'

export default function Frontend() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="mx-auto grid grid-cols-3 mb-32
                max-sm:grid-cols-2 max-sm:mb-16"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {stackFront.map((item) => (
        <Card
          key={item.id}
          logo={item.logo}
          title={item.title}
          hover={false}
          textHeight={"120px"}
          textWidth={"115px"}
          width={"120px"}
          height={"100px"}
          topText={"-6.5rem"}
          imageSize={70}
          marginBottonTitle={"0rem"}
        />
      ))}
    </div>
  )
}
