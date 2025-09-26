import { motion } from "framer-motion";
import { memo } from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto max-w-md relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🔮
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">마법사 확인</h1>
          <p className="text-gray-600">
            정보를 입력하여 마법구슬을 확인해보세요
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default memo(Header);
