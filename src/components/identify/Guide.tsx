import { motion } from "framer-motion";
import { memo } from "react";

const Guide = () => {
  return (
    <>
      안내
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4 mb-6"
      >
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2">🧪</span>
          <h3 className="font-bold text-purple-800">테스트 계정</h3>
        </div>
        <div className="text-sm text-purple-700 space-y-1">
          <p>
            <strong>기수:</strong> 1기
          </p>
          <p>
            <strong>이름:</strong> 홍길동
          </p>
          <p>
            <strong>휴대폰 뒷 4자리:</strong> 1234
          </p>
        </div>
        <p className="text-xs text-purple-600 mt-2">
          위 정보로 테스트해보세요! 🎯
        </p>
      </motion.div>
    </>
  );
};

export default memo(Guide);
