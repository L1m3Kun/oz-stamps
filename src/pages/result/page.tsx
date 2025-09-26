import { motion } from "framer-motion";
import { CustomButton } from "@/components/_common";
import { Result } from "@/components/result";
import { useResult } from "@/hooks/stamp/useResult";

export default function ResultPage() {
  const { name, displaystamps, nextTierInfo, tier, tierConfig } = useResult();

  if (!tier) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden relative">
      {/* 배경 파티클 */}
      <Result.BackGroundParticle />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* 헤더 */}
        <Result.Header name={name} />

        {/* 메인 결과 카드 */}
        <Result.MainCard
          displaystamps={displaystamps}
          nextTierInfo={nextTierInfo}
          tierConfig={tierConfig}
        />

        {/* 버튼들 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          {/* <CustomButton
            variant="magic"
            size="lg"
            onClick={() => navigate('/learning')}
            className="w-full"
          >
            📊 학습도 리포트 보기
          </CustomButton> */}

          <CustomButton
            mode="link"
            to="/identify"
            variant="secondary"
            className="w-full"
          >
            다시 조회하기
          </CustomButton>

          <CustomButton
            mode="link"
            to="/"
            variant="secondary"
            className="w-full"
          >
            처음으로
          </CustomButton>
        </motion.div>
      </div>
    </div>
  );
}
