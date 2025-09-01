// components/LogoMarquee.tsx
import Image from "next/image";
import React from "react";

type Client = { name: string; file?: string }; // file is optional (we’ll show a text pill if missing)

const CLIENTS: Client[] = [
  { name: "Mimecast", file: "mimecast.svg" },
  { name: "Juniper Networks", file: "juniper-networks.svg" },
  { name: "Cisco", file: "cisco.svg" },
  { name: "Dell", file: "dell.svg" },
  { name: "SAP", file: "sap.svg" },
  { name: "Microsoft", file: "microsoft.svg" },
  { name: "ON24", file: "on24.svg" },
  { name: "JFrog", file: "jfrog.svg" },           // you wrote JFRONG — corrected to JFrog
  { name: "ITWC", file: "itwc.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
];

function Row({ clients }: { clients: Client[] }) {
  return (
    <ul className="flex items-center gap-10 pr-10">
      {clients.map((c) => (
        <li key={c.name} className="shrink-0">
          {c.file ? (
            <Image
              src={`/clients/${c.file}`}
              alt={`${c.name} logo`}
              width={140}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
            />
          ) : (
            <span className="px-3 py-1.5 rounded-xl text-white/80 border border-white/15 text-sm">
              {c.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee({ className = "" }: { className?: string }) {
  // Duplicate the list so it loops seamlessly
  return (
    <div
      className={`marquee relative w-full overflow-hidden ${className}`}
      aria-label="Trusted by"
      role="region"
    >
      <div className="marquee-track flex gap-10">
        <Row clients={CLIENTS} />
        <Row clients={CLIENTS} />
      </div>
    </div>
  );
}
