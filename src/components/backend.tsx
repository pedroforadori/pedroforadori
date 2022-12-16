import stackBack from "../data/stack-back";
import Card, { ICardItem } from "./card"

export default function Backend() {
  
  return (
    <div
      className="mx-auto grid grid-cols-3 mb-32
                max-sm:grid-cols-2 max-sm:mb-16"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {stackBack.map((item) => (
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
  );
}
