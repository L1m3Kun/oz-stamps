import { memo } from "react";
import { motion } from "framer-motion";
import { TIER_CONFIG_DETAIL } from "@/assets/configs/stamp/result";
import { NextTierInfoType } from "@/utilities/stamp/handleTier";

interface MainCardProps {
  tierConfig: TIER_CONFIG_DETAIL;
  displaystamps: number;
  nextTierInfo: NextTierInfoType;
}

const MainCard = ({
  tierConfig,
  displaystamps,
  nextTierInfo,
}: MainCardProps) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`bg-gradient-to-br ${tierConfig.color} rounded-3xl p-8 mb-8 shadow-2xl ${tierConfig.glow} text-white relative overflow-hidden`}
      >
        {/* 배경 글로우 */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        <div className="relative z-10">
          {/* 등급 배지 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-6"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-lg font-bold">{tierConfig.name}</span>
            </div>
          </motion.div>

          {/* 마법구슬 수 */}
          <div className="text-center mb-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotateY: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-4"
            >
              🔮
            </motion.div>
            <p className="text-xl opacity-90">마법구슬</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-6xl font-bold mb-2"
            >
              {displaystamps} <span className="text-xl opacity-90">개</span>
            </motion.div>
          </div>

          {/* 진척도 바 (다음 등급이 있을 때만) */}
          {nextTierInfo.nextTier && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className=" rounded-full p-1 mb-4"
            >
              <div className="bg-white/30 rounded-full px-4 py-2 mb-2">
                <div className="flex justify-between text-sm">
                  <span>다음 등급까지</span>
                  <span>{nextTierInfo.remaining}개 남음</span>
                </div>
              </div>
              <div className="bg-white/30 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(nextTierInfo.progress, 100)}%`,
                  }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="bg-gradient-to-r from-primary-dark to-primary-light h-full rounded-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default memo(MainCard);
