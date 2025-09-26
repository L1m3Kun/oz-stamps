import { Identify } from "@/components/identify";

export default function IdentifyPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4 relative overflow-hidden flex flex-col items-center justify-center">
        <Identify.Header />
        <Identify.Form />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#984BFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
    </>
  );
}
