import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/_common/Button";

interface ResultData {
  stamps: number;
  prizeTier: string;
  updatedAt: string;
  name?: string;
}

const TIER_CONFIG = {
  SS: {
    min: 330,
    color: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-400/50",
    name: "1등급 (SS)",
  },
  S: {
    min: 250,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-400/50",
    name: "2등급 (S)",
  },
  A: {
    min: 200,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-400/50",
    name: "3등급 (A)",
  },
  B: {
    min: 150,
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-400/50",
    name: "4등급 (B)",
  },
  C: {
    min: 100,
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-400/50",
    name: "5등급 (C)",
  },
  D: {
    min: 50,
    color: "from-gray-500 to-slate-500",
    glow: "shadow-gray-400/50",
    name: "6등급 (D)",
  },
  F: {
    min: 0,
    color: "from-red-500 to-pink-500",
    glow: "shadow-red-400/50",
    name: "7등급 (F)",
  },
};

function getTierFromstamps(stamps: number): keyof typeof TIER_CONFIG {
  if (stamps >= 330) return "SS";
  if (stamps >= 250) return "S";
  if (stamps >= 200) return "A";
  if (stamps >= 150) return "B";
  if (stamps >= 100) return "C";
  if (stamps >= 50) return "D";
  return "F";
}

function getNextTierInfo(stamps: number) {
  const tiers = [
    { name: "D", min: 50 },
    { name: "C", min: 100 },
    { name: "B", min: 150 },
    { name: "A", min: 200 },
    { name: "S", min: 250 },
    { name: "SS", min: 330 },
  ];

  for (const tier of tiers) {
    if (stamps < tier.min) {
      return {
        nextTier: tier.name,
        remaining: tier.min - stamps,
        progress: (stamps / tier.min) * 100,
      };
    }
  }

  return { nextTier: null, remaining: 0, progress: 100 };
}

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [displaystamps, setDisplaystamps] = useState(0);
  const [data, setData] = useState<ResultData | null>(null);

  useEffect(() => {
    const resultData = location.state as ResultData;

    if (!resultData) {
      navigate("/identify");
      return;
    }

    setData(resultData);

    // 숫자 카운트업 애니메이션
    const targetstamps = resultData.stamps;
    const duration = 2000; // 2초
    const increment = targetstamps / (duration / 16); // 60fps 기준

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetstamps) {
        setDisplaystamps(targetstamps);
        clearInterval(timer);
      } else {
        setDisplaystamps(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [location.state, navigate]);

  if (!data) return null;

  const currentTier = getTierFromstamps(data.stamps);
  const tierConfig = TIER_CONFIG[currentTier];
  const nextTierInfo = getNextTierInfo(data.stamps);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden relative">
      {/* 배경 파티클 */}
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            마법구슬 현황 ✨
          </h1>
          <p className="text-gray-600">
            {data.name && `${data.name}님의 `}마법구슬을 확인해보세요
          </p>
        </motion.div>

        {/* 메인 결과 카드 */}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-6xl font-bold mb-2"
              >
                {displaystamps}
              </motion.div>
              <p className="text-xl opacity-90">개의 마법구슬</p>
            </div>

            {/* 진척도 바 (다음 등급이 있을 때만) */}
            {nextTierInfo.nextTier && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-white/20 rounded-full p-1 mb-4"
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
                    className="bg-white h-full rounded-full"
                  />
                </div>
              </motion.div>
            )}

            {/* 업데이트 시간 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center text-sm opacity-75"
            >
              <p>최근 업데이트: {data.updatedAt}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 버튼들 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          {/* <Button
            variant="magic"
            size="lg"
            onClick={() => navigate('/learning')}
            className="w-full"
          >
            📊 학습도 리포트 보기
          </Button> */}

          <Button
            variant="secondary"
            onClick={() => navigate("/identify")}
            className="w-full"
          >
            다시 조회하기
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/")}
            className="w-full"
          >
            처음으로
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
