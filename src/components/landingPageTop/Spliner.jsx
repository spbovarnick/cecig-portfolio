"use client";
import Spline from "@splinetool/react-spline"
import React, { Suspense } from "react";

export default function Spliner(){

  return (
    <Suspense fallback={<div></div>}>
      <Spline scene="https://prod.spline.design/XQfFcOSN6WByHP97/scene.splinecode" className="absolute top-0 " />
    </Suspense>
  )
}