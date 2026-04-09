export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-gray-400 py-20 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="mb-6 flex flex-col leading-none">
            <span className="text-2xl font-serif tracking-widest text-white mb-1">YANGTZE</span>
            <span className="text-[9px] tracking-[0.4em] uppercase font-sans text-amber-500 font-light">
              Chinese Cuisine
            </span>
          </div>
          <p className="text-[11px] leading-relaxed font-light tracking-wide text-gray-400">
            A premier culinary destination in Islamabad. We blend centuries-old traditions with modern elegance for an unforgettable dining experience.
          </p>
        </div>
        
        {/* Location Column */}
        <div>
          <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-8 font-semibold">Location</h4>
          <address className="not-italic text-[11px] font-light leading-loose text-gray-400">
            Rafi, Western Drive Block<br />
            Islamabad, 44000<br />
            Pakistan
          </address>
        </div>

        {/* Reservations Column */}
        <div>
          <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-8 font-semibold">Reservations</h4>
          <div className="flex flex-col gap-2 text-[11px] font-light text-gray-400">
            <a href="tel:03350532333" className="hover:text-amber-500 text-gray-200 transition-colors duration-300">
              +92 335 0532333
            </a>
            <p>Mon - Sun: 12PM - 11PM</p>
          </div>
        </div>

        {/* Social Column */}
        <div>
          <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-8 font-semibold">Social</h4>
          <div className="flex gap-6 text-[11px] font-light text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors duration-300">
              Instagram
            </a>
            <a href="https://wa.me/923350532333" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors duration-300">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase gap-4">
        <div className="text-zinc-500">
          © {currentYear} YANGTZE CHINESE CUISINE
        </div>
        
        <div className="text-zinc-500 flex items-center gap-2">
          <span>Digital Experience by</span>
          <a 
            href="https://glacialabs.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-amber-500 font-bold transition-colors duration-300 tracking-[0.3em]"
          >
            GLACIA LABS
          </a>
        </div>

        <div className="text-zinc-500">
          Premium Dining in Islamabad
        </div>
      </div>
    </footer>
  );
}