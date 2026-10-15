import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/generated-image-044953cd-3774-49a8-9d99-e9170a0288d0.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover object-[center_35%] blur-md opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-8 animate-fade-in-up">
          <Sparkles size={16} className="text-teal-400" />
          <span className="text-sm text-teal-300 font-medium">Marketing Student & AI Enthusiast</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Abonga Mketso
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A passionate marketing student blending traditional marketing expertise with
          cutting-edge AI skills to drive innovative, data-driven solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollTo('#about')}
            className="px-8 py-3.5 rounded-full bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
          >
            Discover More
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-200 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}
