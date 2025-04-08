import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function HeroWithFog() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect;
    import("vanta/dist/vanta.fog.min").then(VANTA => {
      effect = VANTA.default({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xffffff,
        midtoneColor: 0xaaaaaa,
        lowlightColor: 0x000000,
        baseColor: 0x000000,
        blurFactor: 0.5,
        speed: 1.5,
        zoom: 1.2,
      });
      setVantaEffect(effect);
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen relative text-white flex items-center justify-center"
    >
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Ravinuthala Ramachandra Sri Harsha</h1>
        <p className="text-lg text-gray-300">
          Software Engineer | Full-Stack Developer | Cloud Enthusiast
        </p>
      </div>
    </div>
  );
}

export default HeroWithFog;
