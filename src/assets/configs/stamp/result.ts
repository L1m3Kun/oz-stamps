export const TIER_CONFIG = {
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

export const TIER = [
  { name: "D", min: 50 },
  { name: "C", min: 100 },
  { name: "B", min: 150 },
  { name: "A", min: 200 },
  { name: "S", min: 250 },
  { name: "SS", min: 330 },
];

export type TIER_CONFIG_KEY_TYPE = keyof typeof TIER_CONFIG;
export type TIER_KEY_TYPE = keyof typeof TIER;
export type TIER_CONFIG_DETAIL = (typeof TIER_CONFIG)["SS"];
