import { motion } from "framer-motion";
import { useIdentifySubmit } from "@/hooks/stamp/useIdentifySubmit";
import { CustomButton, CustomInput } from "@/components/_common";
import MagicLoader from "@/components/feature/MagicLoader";
import { memo } from "react";

const IdentifyForm = () => {
  const { FormConfigs, isLoading, handleSubmit } = useIdentifySubmit();

  return (
    <>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-w-96 bg-white rounded-2xl p-8 shadow-lg z-20"
      >
        <div className="space-y-6">
          {FormConfigs.map((configs) => (
            <CustomInput key={configs.label} {...configs} />
          ))}

          <CustomButton
            variant="magic"
            size="lg"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "확인 중..." : "✨ 마법구슬 확인하기 ✨"}
          </CustomButton>

          <CustomButton
            mode="link"
            variant="secondary"
            className="w-full"
            to="/"
          >
            뒤로가기
          </CustomButton>
        </div>
      </motion.div>
      {isLoading && <MagicLoader />}
    </>
  );
};

export default memo(IdentifyForm);
