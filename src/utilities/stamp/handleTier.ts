import { TIER, TIER_CONFIG_KEY_TYPE } from "../../assets/configs/stamp/result";

export const getTierFromstamps = (stamps: number): TIER_CONFIG_KEY_TYPE => {
  if (stamps >= 330) return "SS";
  if (stamps >= 250) return "S";
  if (stamps >= 200) return "A";
  if (stamps >= 150) return "B";
  if (stamps >= 100) return "C";
  if (stamps >= 50) return "D";
  return "F";
};

export const getNextTierInfo = (stamps: number) => {
  for (const tier of TIER) {
    if (stamps < tier.min) {
      return {
        nextTier: tier.name,
        remaining: tier.min - stamps,
        progress: (stamps / tier.min) * 100,
      };
    }
  }

  return { nextTier: null, remaining: 0, progress: 100 };
};

export type NextTierInfoType = ReturnType<typeof getNextTierInfo>;
