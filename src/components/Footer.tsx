import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
          Designed & built with <Heart size={14} className="text-teal-400 fill-teal-400" /> by Abonga Mketso
        </p>
        <p className="text-slate-600 text-xs mt-2">© {new Date().getFullYear()} Abonga Mketso. All rights reserved.</p>
      </div>
    </footer>
  );
}
