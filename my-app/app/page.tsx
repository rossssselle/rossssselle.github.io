import Image from "next/image";
// import Spline from '@splinetool/react-spline/next';

import "./globals.css";

import SplineClient from "@/components/splineClient";

export default function Home() {
  return (
    <div className="spline">
      {/* <Spline
        scene="https://prod.spline.design/WBBBobfUf6xRsO0I/scene.splinecode"
      /> */}

      <SplineClient />
    </div>
  );
}

