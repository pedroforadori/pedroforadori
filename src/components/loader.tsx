import { motion } from "framer-motion";

export default function Loadefr() {
    return (
        <motion.div
            initial={{ '--rotate': '0deg' } as any}
            animate={{ '--rotate': '360deg' } as any}
            transition={{ duration: 1, repeat: Infinity }}
            
        >
            <div 
                className="rounded-full w-5 h-5 border-2 border-white border-t-transparent" 
                style={{ transform: 'rotate(var(--rotate))' }}
            />
                
        </motion.div>
    )
}