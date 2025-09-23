import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../components/_common/Button";
import Input from "../../components/_common/Input";
import MagicLoader from "../../components/feature/MagicLoader";

interface FormData {
  flag: string;
  name: string;
  phonLast: string;
}

interface FormErrors {
  flag?: string;
  name?: string;
  phonLast?: string;
}

export default function Identify() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    flag: "",
    name: "",
    phonLast: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.flag.trim()) {
      newErrors.flag = "기수를 입력해주세요.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.phonLast.trim()) {
      newErrors.phonLast = "휴대폰 뒷 4자리를 입력해주세요.";
    } else if (
      formData.phonLast.length !== 4 ||
      !/^\d{4}$/.test(formData.phonLast)
    ) {
      newErrors.phonLast = "휴대폰 뒷 4자리는 숫자만 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError("");

    try {
      // 테스트용 데이터 확인
      const testData = {
        flag: "1",
        name: "홍길동",
        phonLast: "1234",
      };

      // 입력된 데이터가 테스트 데이터와 일치하는지 확인
      if (
        formData.flag === testData.flag &&
        formData.name === testData.name &&
        formData.phonLast === testData.phonLast
      ) {
        // 테스트 결과 데이터
        const mockResult = {
          stamps: 187,
          prizeTier: "A",
          updatedAt: "2024-01-15 14:30",
          name: formData.name,
        };

        // 짧은 지연 후 결과 페이지로 이동 (로딩 효과를 위해)
        setTimeout(() => {
          navigate("/result", { state: mockResult });
        }, 1500);

        return;
      }

      // Apps Script URL - 환경변수에서 가져오기 (실제 API 연동용)
      const apiUrl = import.meta.env.VITE_APP_SCRIPT_URL || "";

      if (!apiUrl) {
        throw new Error("입력하신 정보와 일치하는 수강생을 찾을 수 없습니다.");
      }

      const params = new URLSearchParams({
        action: "stamp",
        flag: formData.flag,
        name: formData.name,
        phoneLast: formData.phonLast,
      });

      const response = await fetch(`${apiUrl}?${params}`);

      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await response.json();

      // 성공 시 결과 페이지로 이동 (데이터를 state로 전달)
      navigate("/result", { state: data });
    } catch (error) {
      console.error("API Error:", error);

      // 사용자 친화적 에러 메시지
      if (error instanceof Error) {
        if (error.message.includes("fetch")) {
          setApiError("마법이 불안정해요. 잠시 뒤 다시 시도해 주세요.");
        } else {
          setApiError("마법사를 찾을 수 없어요. 입력값을 다시 확인해 주세요.");
        }
      } else {
        setApiError("마법에 실패했어요. 일치하는 수강생을 찾을 수 없어요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto max-w-md relative z-10">
          {/* 헤더 */}
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              마법사 확인
            </h1>
            <p className="text-gray-600">
              정보를 입력하여 마법구슬을 확인해보세요
            </p>
          </motion.div>

          {/* 폼 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* 테스트 안내 */}
            {/* <motion.div
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
            </motion.div> */}

            <div className="space-y-6">
              <Input
                label="기수"
                value={formData.flag}
                onChange={(e) =>
                  setFormData({ ...formData, flag: e.target.value })
                }
                placeholder="예: 1, 2"
                error={errors.flag}
                required
              />

              <Input
                label="이름"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="홍길동"
                error={errors.name}
                required
              />

              <Input
                label="휴대폰 뒷 4자리"
                value={formData.phonLast}
                onChange={(e) =>
                  setFormData({ ...formData, phonLast: e.target.value })
                }
                placeholder="1234"
                type="text"
                error={errors.phonLast}
                required
              />

              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <p className="text-red-600 text-sm">{apiError}</p>
                </motion.div>
              )}

              <Button
                variant="magic"
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? "확인 중..." : "✨ 마법구슬 확인하기 ✨"}
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate("/")}
                className="w-full"
              >
                뒤로가기
              </Button>
            </div>
          </motion.div>
        </div>

        {/* 배경 글로우 효과 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#984BFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      {isLoading && <MagicLoader />}
    </>
  );
}
