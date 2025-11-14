import { motion } from "framer-motion";
import { memo } from "react";
import { CustomImg } from "../_common";
import MagicWand from "@/assets/imgs/noto_magic-wand.png";
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
            animate={{
              rotate: [0, 10, -10, 0],
              opacity: [1, 0.6, 1],
              x: [0, -10, 10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            <CustomImg
              src={MagicWand}
              alt="magic wand"
              className="w-12 h-auto m-auto"
            />
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
