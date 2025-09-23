import { motion } from 'framer-motion';

export default function MagicParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-[#984BFF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px #984BFF',
          }}
        />
      ))}
    </div>
  );
}