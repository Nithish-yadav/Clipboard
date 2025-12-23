import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Access() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    // TEMP logic (backend later)
    if (!isLocked && code.toLowerCase() === "locked") {
      setIsLocked(true);
      return;
    }

    if (isLocked && !password.trim()) return;

    navigate(`/text/${code.trim()}`);
  };

  return (
    <div className="min-h-screen bg-[#0b0b10] flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
        <h2 className="text-white text-xl text-center">Enter Code</h2>

        {/* CODE INPUT */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white/80">
            Code <span className="text-red-500">*</span>
          </label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code"
            className="
              w-full px-4 py-3 rounded-lg
              bg-white/10 border border-white/20
              text-white outline-none
              placeholder:text-white/40
              focus:border-white/40
            "
          />
        </div>

        {/* PASSWORD INPUT (ONLY IF LOCKED) */}
        {isLocked && (
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/80">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="
                w-full px-4 py-3 rounded-lg
                bg-white/10 border border-white/20
                text-white outline-none
                placeholder:text-white/40
                focus:border-white/40
              "
            />
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="
              flex-1 py-3 rounded-lg
              bg-white text-black font-medium
              hover:bg-white/90 transition
            "
          >
            {isLocked ? "Unlock" : "Open"}
          </button>

          <button
            type="reset"
            onClick={() => {
              setCode("");
              setPassword("");
              setIsLocked(false);
            }}
            className="
              px-4 py-3 rounded-lg
              bg-white/10 border border-white/20
              text-white
              hover:bg-white/20 transition
            "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
