"use client";

import Image from "next/image"
import { sanityClient } from "@/utils/sanity/lib/client"
import { useNextSanityImage } from "next-sanity-image"

export default function ClientImg({ img, sizes, classes }) {
  const imageProps = useNextSanityImage(sanityClient, img)
  
  return (
    <Image
      {...imageProps}
      alt={img.alt}
      // sizes="(max-width: 1024px) 100vw, 50vw"
      sizes={sizes}
      quality={100}
      placeholder="blur"
      blurDataURL={img.asset.metadata.lqip}
      className={classes}
    />
  )
}