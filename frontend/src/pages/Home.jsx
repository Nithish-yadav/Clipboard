import FaultyTerminal from "../components/FaultyTerminal";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Home() {
  return (
    // <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-black"></div>
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      <ErrorBoundary>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </ErrorBoundary>
    </div>
  );
}
