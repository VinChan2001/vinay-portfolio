"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function AboutCard({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (0.5 - y) * 12; // tilt range
    const ry = (x - 0.5) * 12;
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      className="relative h-64 w-64 sm:h-72 sm:w-72 select-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/35 to-fuchsia-500/30 blur-2xl" aria-hidden />
      <div
        ref={ref}
        className="relative mx-auto grid h-full w-full place-items-center rounded-full p-1 backdrop-blur-md animate-float-slow"
        style={{ transition: "transform 200ms ease" }}
      >
        <Image
          src={src}
          alt={alt}
          width={356}
          height={356}
          className="w-full h-full rounded-full object-cover ring-1 ring-white/20"
          style={{ objectPosition: "center center" }}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </div>
  );
}
