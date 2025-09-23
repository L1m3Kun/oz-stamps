import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl md:text-5xl font-semibold text-gray-100">404</h1>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-500">
        페이지를 찾을 수 없습니다. 주소를 확인해주세요.
      </p>
      <Link to="/">메인 화면으로</Link>
    </div>
  );
}
