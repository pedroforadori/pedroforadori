import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      id="card-container"
      className=""
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div 
        id="card" 
        variants={cardVariants} 
        className="text-9xl w-full h-[300px] flex items-center justify-start"
    >
        <strong>
            {emoji}
        </strong>
        
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["BANCO BRADESCO", 340, 10],
  ["LEROY MERLIN", 20, 40],
  ["CNN BRASIL", 60, 10],

];

export default function WorkTeste() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}