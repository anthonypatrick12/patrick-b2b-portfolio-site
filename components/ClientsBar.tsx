import Marquee from "@/components/Marquee";

export default function ClientsBar() {
  const items = [
    "/logos/acme.svg",
    "/logos/polaris.svg",
    "/logos/quantix.svg",
    "/logos/northstar.svg"
  ];
  return (
    <section className="py-6 border-t border-b border-white/10 bg-black/10">
      <div className="container">
        <Marquee>
          {items.map(src => (
            <img key={src} src={src} alt="Client logo" className="h-8 opacity-70" />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
