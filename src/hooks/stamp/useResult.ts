import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TIER_CONFIG } from "@/assets/configs/stamp/result";
import { useUser } from "@/contexts/UserContext";
import {
  getNextTierInfo,
  getTierFromstamps,
} from "@/utilities/stamp/handleTier";

export const useResult = () => {
  const navigate = useNavigate();
  const [displaystamps, setDisplaystamps] = useState(0);
  const [tier, setTier] = useState<string>("");
  const { name, stamps } = useUser();

  const currentTier = getTierFromstamps(stamps);
  const tierConfig = TIER_CONFIG[currentTier];
  const nextTierInfo = getNextTierInfo(stamps);

  useEffect(() => {
    if (!name) {
      navigate("/identify");
      return;
    }

    setTier(getTierFromstamps(stamps));

    const duration = 2000; // 2초
    const increment = stamps / (duration / 16); // 60fps 기준

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stamps) {
        setDisplaystamps(stamps);
        clearInterval(timer);
      } else {
        setDisplaystamps(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [name, stamps, setDisplaystamps]);

  return { name, tier, tierConfig, nextTierInfo, displaystamps };
};
