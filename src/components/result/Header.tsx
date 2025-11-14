import { motion } from "framer-motion";
import { memo } from "react";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
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
        <span className="text-primary-DEFAULT">{name && name}</span>
        님의 마법구슬을 확인해보세요
      </p>
    </motion.div>
  );
};

export default memo(Header);
