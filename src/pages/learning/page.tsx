import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../components/_common/Button";

export default function Learning() {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);

  // 샘플 데이터 (실제 연동 시 대체될 예정)
  const sampleData = {
    name: "홍길동",
    cohort: "3기",
    totalMarbles: 187,
    attendanceRate: 85,
    assignmentRate: 92,
    weeklyProgress: [10, 15, 12, 20, 18, 22, 25, 30],
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 92 },
      { name: "CSS", level: 88 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* 헤더 */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            📊
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            학습도 리포트
          </h1>
          <p className="text-gray-600 text-lg">
            나만의 성장 기록을 확인해보세요
          </p>
        </motion.div>

        {/* 안내 카드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8 text-center"
        >
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            곧 출시됩니다!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            곧, 나만의 학습도 리포트를 PDF로 내려받을 수 있어요.
            <br />
            개인별 맞춤 분석과 성장 추이를 한눈에 확인하세요.
          </p>

          <Button
            variant="magic"
            size="lg"
            onClick={() => setShowPreview(!showPreview)}
            className="mb-4"
          >
            📋 학습도 PDF 미리보기 (베타)
          </Button>
        </motion.div>

        {/* 미리보기 섹션 */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📊 학습 리포트 미리보기
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 기본 정보 */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800">
                  기본 정보
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">이름:</span> {sampleData.name}
                  </p>
                  <p>
                    <span className="font-medium">기수:</span>{" "}
                    {sampleData.cohort}
                  </p>
                  <p>
                    <span className="font-medium">총 마법구슬:</span>{" "}
                    {sampleData.totalMarbles}개
                  </p>
                </div>
              </div>

              {/* 출석률 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800">출석률</h4>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-green-600 mr-4">
                    {sampleData.attendanceRate}%
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${sampleData.attendanceRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 과제 완료율 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800">
                  과제 완료율
                </h4>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-blue-600 mr-4">
                    {sampleData.assignmentRate}%
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${sampleData.assignmentRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 주간 성장 추이 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800">
                  주간 성장 추이
                </h4>
                <div className="flex items-end space-x-1 h-20">
                  {sampleData.weeklyProgress.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${(value / 30) * 100}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-t from-yellow-400 to-orange-400 rounded-t flex-1 min-h-2"
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1주차</span>
                  <span>8주차</span>
                </div>
              </div>
            </div>

            {/* 스킬 레벨 */}
            <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4 text-gray-800">
                스킬 레벨
              </h4>
              <div className="space-y-4">
                {sampleData.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              ※ 이는 미리보기용 샘플 데이터입니다. 실제 데이터는 추후 연동될
              예정입니다.
            </div>
          </motion.div>
        )}

        {/* 네비게이션 버튼 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            variant="secondary"
            onClick={() => navigate("/result")}
            className="w-full"
          >
            마법구슬 현황으로
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
