export default function ThankYou() {
  return (
    <main className="pt-28 pb-20">
      <div className="container text-center">
        <h1 className="text-4xl font-semibold">Thanks — we’ll be in touch</h1>
        <p className="text-white/70 mt-2">Check your inbox. You can also book directly via Calendly below.</p>
        <div className="mt-6 card p-6">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://calendly.com/your-handle/intro?hide_gdpr_banner=1"
              className="w-full h-full"
              title="Book a discovery call"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
