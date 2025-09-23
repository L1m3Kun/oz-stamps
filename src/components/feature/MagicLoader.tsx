import { motion } from 'framer-motion';

interface MagicLoaderProps {
  message?: string;
}

export default function MagicLoader({ message = "마법의 주문을 확인 중…" }: MagicLoaderProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
        {/* 마법진 */}
        <div className="relative w-24 h-24 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-[#984BFF] border-t-transparent rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-2 border-purple-300 border-b-transparent rounded-full"
          />
          
          {/* 중앙 오브 */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-6 bg-gradient-to-br from-[#984BFF] to-[#C478FF] rounded-full shadow-lg"
          />
          
          {/* 파티클들 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#984BFF] rounded-full transform -translate-x-1/2 -translate-y-1/2"
            />
          ))}
        </div>
        
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-700 font-medium"
        >
          {message}
        </motion.p>
      </div>
    </div>
  );
}