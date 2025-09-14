"use client";
import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-sm">
      <div
        className="mx-auto flex max-w-5xl justify-around py-3" // more padding top/bottom
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 6px)" }} // lift slightly above bottom
      >
        <button
          onClick={() => router.back()}
          className="flex flex-col items-center text-gray-600 hover:text-[#0b5fad]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1" // arrow sits a little higher
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xs">Back</span>
        </button>

        <button
          onClick={() => router.forward()}
          className="flex flex-col items-center text-gray-600 hover:text-[#0b5fad]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs">Forward</span>
        </button>
      </div>
    </nav>
  );
}