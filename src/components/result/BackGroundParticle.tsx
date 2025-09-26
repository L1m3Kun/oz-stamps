import { motion } from "framer-motion";
import { memo } from "react";

const BackGroundParticle = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="absolute w-2 h-2 bg-[#984BFF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`,
            filter: "blur(1px)",
            boxShadow: "0 0 8px #984BFF",
          }}
        />
      ))}
    </div>
  );
};

export default memo(BackGroundParticle);
