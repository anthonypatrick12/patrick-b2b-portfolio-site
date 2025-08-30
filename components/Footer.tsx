export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <p>© {year} Patrick — B2B Lead Generation</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/data-processing" className="hover:text-white">DPA</a>
          <a href="/cold-email-policy" className="hover:text-white">Cold Email Policy</a>
          <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
