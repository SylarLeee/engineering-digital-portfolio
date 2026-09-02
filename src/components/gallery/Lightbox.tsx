"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export type LightboxProps = { src: string; alt: string; width: number; height: number; caption?: string };

export function Lightbox({ src, alt, width, height, caption }: LightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild><button className="gallery-trigger" aria-label={`放大查看：${alt}`}><Image src={src} alt={alt} width={width} height={height} loading="lazy" /><span><Maximize2 size={16} /> 放大</span></button></DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">{caption ?? alt}</DialogDescription>
        <Image className="lightbox-image" src={src} alt={alt} width={width} height={height} />
        {caption && <p className="lightbox-caption">{caption}</p>}
      </DialogContent>
    </Dialog>
  );
}
