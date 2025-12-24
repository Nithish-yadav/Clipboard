import { useState, useRef, useEffect } from "react";
import StarBorder from "../components/StarBorder";

export default function Text() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 560)}px`;
  }, [text]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      {/* Editor Container */}
      <div
        className="
            w-[500px] h-[600px]
            bg-[#1a1a1a]
            rounded-[15px]
            flex flex-col
            p-4
          "
      >
        {/* TEXT AREA */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing..."
          className="
      flex-1
      resize-none
      bg-[#0d0d0d]
      box-border
      text-white
      caret-white
      outline-none
      border border-white/5
      font-mono
      text-sm
      px-10
      py-4
      rounded-lg
      placeholder:text-gray-400
    "
          style={{ color: "white" }}
        />

        {/* ACTION BUTTONS */}
        <div className="mt-4 flex gap-3 ">
          <StarBorder className="w-full cursor-pointer">Save</StarBorder>

          <StarBorder className="w-full cursor-pointer" color="#facc15">
            Lock
          </StarBorder>

          <StarBorder className="w-full cursor-pointer" color="#22c55e">
            Save & Exit
          </StarBorder>
        </div>
      </div>
    </div>
  );
}
