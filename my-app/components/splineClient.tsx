'use client';
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineClient() {
    return (
        <Spline scene="https://prod.spline.design/WBBBobfUf6xRsO0I/scene.splinecode" className='spline-client' />
    );
}
