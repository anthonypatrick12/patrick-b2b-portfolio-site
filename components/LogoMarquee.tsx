// components/LogoMarquee.tsx
import Image from "next/image";
import React from "react";

/**
 * Uses your files under /public/logos with exact names (case-sensitive):
 *  - Cisco.png
 *  - Dell.png
 *  - Microsoft.png
 *  - MongoDB.svg
 *  - Jfrog.svg
 *  - Juniper.png
 *  - ON24.png
 *  - SAP.png
 *  - Mimecast.png
 */
const CLIENTS = [
  { name: "Mimecast", file: "Mimecast.png" },
  { name: "Juniper Networks", file: "Juniper.png" },
  { name: "Cisco", file: "Cisco.png" },
  { name: "Dell", file: "Dell.png" },
  { name: "SAP", file: "SAP.png" },
  { name: "Microsoft", file: "Microsoft.png" },
  { name: "ON24", file: "ON24.png" },
  { name: "JFrog", file: "Jfrog.svg" },
  { name: "MongoDB", file: "MongoDB.svg" },
];

function Row() {
  return (
    <ul className="flex items-center gap-10 pr-10">
      {CLIENTS.map((c) => (
        <li key={c.name} className="shrink-0">
          <Image
            src={`/logos/${c.file}`}
            alt={`${c.name} logo`}
            width={160}
            height={40}
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
            sizes="(max-width: 768px) 50vw, 400px"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="Trusted by"
      role="region"
    >
      <div className="marquee-track flex gap-10">
        <Row />
        <Row /> {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}
