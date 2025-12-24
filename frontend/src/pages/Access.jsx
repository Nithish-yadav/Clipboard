import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Access() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!code.trim()) return;
    navigate(`/text/${code.trim()}`);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* INPUT */}
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className="
            w-[320px]
            px-5 py-4
            text-center
            text-white
            bg-[#1a1a1a]
            rounded-[16px]
            border border-[#333]
            outline-none
            placeholder:text-gray-500
          "
        />

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="
            w-[320px]
            py-3
            rounded-[16px]
            bg-[#ececec]
            text-black
            font-medium
            hover:bg-white
            transition
          "
        >
          Open
        </button>
      </div>
    </div>
  );
}
