import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

import "./globals.css";



export default function Home() {
  return (
    <div className="spline">
      <Spline
        scene="https://prod.spline.design/WBBBobfUf6xRsO0I/scene.splinecode"
      />

    </div>
  );
}
