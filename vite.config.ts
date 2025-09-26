// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve as pResolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        // React 훅/유틸만
        {
          react: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        // 라우터: 훅만 자동 임포트 (팀 규칙상 컴포넌트는 직접 import 권장)
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
          ],
        },
        // i18n 훅/컴포넌트
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      // 타입 선언 파일 경로 명시(에디터 친화)
      dts: "src/auto-imports.d.ts",
      // ESLint 사용 시 권장(자동 import된 전역 식별자 인식)
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
  ],
  base,
  build: {
    sourcemap: true, // 필요 시 prod에서 false 권장
    outDir: "out",
  },
  resolve: {
    alias: {
      "@": pResolve(__dirname, "./src"),
    },
  },
});
