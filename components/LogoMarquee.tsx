// components/LogoMarquee.tsx
import Image from "next/image";
import React from "react";

/**
 * Looks in /public/logos with LOWERCASE filenames.
 * If you change a filename, update it here too.
 */
const CLIENTS = [
  { name: "Mimecast",   file: "mimecast.png"  },
  { name: "Juniper",    file: "juniper.png"   },
  { name: "Cisco",      file: "cisco.png"     },
  { name: "Dell",       file: "dell.png"      },
  { name: "SAP",        file: "sap.png"       },
  { name: "Microsoft",  file: "microsoft.png" },
  { name: "ON24",       file: "on24.png"      },
  { name: "JFrog",      file: "jfrog.svg"     },
  { name: "MongoDB",    file: "mongodb.svg"   },
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
    <div className={`relative w-full overflow-hidden ${className}`} aria-label="Trusted by" role="region">
      <div className="marquee-track flex gap-10">
        <Row />
        <Row /> {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}
