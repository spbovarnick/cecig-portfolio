"use client";

import Image from "next/image"
import { sanityClient } from "@/utils/sanity/lib/client"
import { useNextSanityImage } from "next-sanity-image"

export default function ClientImg({ img }) {
  const imageProps = useNextSanityImage(sanityClient, img)

  return (
    <Image
      {...imageProps}
      alt={img.alt}
      sizes="(max-width: 1024px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={img.asset.metadata.lqip}
      className="w-full h-auto object-contain"
    />
  )
}