import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full overflow-hidden pointer-events-auto">
        <div className="flex items-center justify-between p-1.5">
          <a
            href="tel:9785078209"
            className="flex flex-col items-center justify-center flex-1 py-2 text-dark hover:text-gold transition-colors rounded-full hover:bg-gray-50"
          >
            <Phone className="w-4 h-4 mb-1 text-gold" />
            <span className="text-[9px] font-semibold uppercase tracking-widest">Call</span>
          </a>
          
          <div className="w-px h-6 bg-gray-200"></div>
          
          <a
            href="https://wa.me/919785078209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 py-2 text-dark hover:text-[#128C7E] transition-colors rounded-full hover:bg-gray-50"
          >
            <MessageCircle className="w-4 h-4 mb-1 text-[#25D366]" />
            <span className="text-[9px] font-semibold uppercase tracking-widest">WhatsApp</span>
          </a>
          
          <div className="w-px h-6 bg-gray-200"></div>
          
          <a
            href="/contact"
            className="flex flex-col items-center justify-center flex-1 py-2 bg-dark-dark text-white hover:bg-gold transition-colors rounded-full shadow-sm"
          >
            <Calendar className="w-4 h-4 mb-1" />
            <span className="text-[9px] font-semibold uppercase tracking-widest text-center">Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
}
