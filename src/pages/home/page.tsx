import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MagicParticles from "../../components/feature/MagicParticles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden">
      <MagicParticles />

      {/* 상단 배너 */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-primary-dark text-white py-3 px-4 text-center relative z-10"
      >
        <p className="text-sm font-medium">
          ✨ 마법구슬은 매일 오전 10시에 업데이트돼요 ✨
        </p>
      </motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary-light mb-4">
            오즈의 마법구슬
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-dark to-primary-light mx-auto rounded-full" />
        </motion.div>

        {/* 히어로 섹션 - 클릭 가능한 마법 오브 */}
        <div className="text-center mb-16">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/identify")}
            className="relative mx-auto w-80 h-80 mb-8 cursor-pointer group"
          >
            {/* 외곽 링 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-primary-dark/30 rounded-full group-hover:border-primary-dark/50 transition-colors duration-300"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-2 border-purple-300/50 rounded-full group-hover:border-purple-300/70 transition-colors duration-300"
            />

            {/* 메인 오브 */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 30px rgba(152, 75, 255, 0.5)",
                  "0 0 50px rgba(152, 75, 255, 0.8)",
                  "0 0 30px rgba(152, 75, 255, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-8 bg-gradient-to-br from-primary-dark to-primary-light rounded-full shadow-2xl flex flex-col items-center justify-center group-hover:from-primary-300 group-hover:to-primary-200 transition-all duration-300"
            >
              <span className="text-5xl mb-2">🔮</span>
              <span className="text-white font-bold text-lg">마법구슬</span>
              <span className="text-white font-bold text-lg">확인하기</span>
            </motion.div>

            {/* 부유 오브젝트들 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
                  y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary-dark rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-light transition-colors duration-300"
                style={{
                  boxShadow: "0 0 10px rgba(152, 75, 255, 0.6)",
                }}
              />
            ))}

            {/* 클릭 유도 텍스트 */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full whitespace-nowrap absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-primary-dark font-medium"
            >
              ✨ 클릭하여 확인하세요 ✨
            </motion.div>
          </motion.button>
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🌟 마법구슬을 모아보세요! 🌟
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              출석과 과제 수행으로 마법구슬을 모아 보상을 업그레이드하세요!
              <br />더 많이 모을수록 더 특별한 혜택이 기다리고 있어요.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 배경 글로우 효과 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
    </div>
  );
}
