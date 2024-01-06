"use client";

import Image from "next/image"
import { sanityClient } from "@/utils/sanity/lib/client"
import { useNextSanityImage } from "next-sanity-image"

export default function ClientImg({ img, fullHeight, objectCover }) {
  const imageProps = useNextSanityImage(sanityClient, img)
  
  return (
    <Image
      {...imageProps}
      alt={img.alt}
      sizes="(max-width: 1024px) 100vw, 50vw"
      quality={100}
      placeholder="blur"
      blurDataURL={img.asset.metadata.lqip}
      // className="w-full h-auto object-contain"
      className={`w-full ${fullHeight ? 'h-full' : 'h-auto'} ${objectCover ? 'object-cover' : 'object-contain'}`}
    />
  )
}