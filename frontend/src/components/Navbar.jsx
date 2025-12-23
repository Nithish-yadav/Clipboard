export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
      <nav
        className="
          flex items-center gap-10
          px-8 py-3
          rounded-full
          bg-white/10 backdrop-blur-lg
          border border-white/15
          text-white
          font-sans
        "
        style={{ width: "70vw", maxWidth: "900px" }}
      >
        <div className="font-medium tracking-wide">React Bits</div>

        <div className="flex gap-6 text-sm opacity-80">
          <button className="hover:opacity-100">Home</button>
          <button className="hover:opacity-100">Docs</button>
        </div>
      </nav>
    </div>
  );
}
