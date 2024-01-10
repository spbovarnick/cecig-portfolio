"use client";
import Spline from "@splinetool/react-spline"
import React, { Suspense } from "react";

export default function Spliner(){

  return (
    <Suspense fallback={<div></div>}>
      <Spline scene="https://prod.spline.design/RbKuDtJPoSHyiAfj/scene.splinecode" className="absolute top-0 " />
    </Suspense>
  )
}