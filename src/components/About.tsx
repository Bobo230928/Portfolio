import { MapPin, GraduationCap, Sparkles, Briefcase } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'N4-N6 Marketing Management', sublabel: 'Northlink College' },
  { icon: Sparkles, label: '14 AI Certificates', sublabel: 'Google AI & AI Bootcamp' },
  { icon: Briefcase, label: 'In-service Training', sublabel: 'Capaciti' },
  { icon: MapPin, label: 'Kraaifontein', sublabel: 'Western Cape, South Africa' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-slate-900 shadow-2xl border border-slate-700 overflow-hidden">
                <img
                  src="/generated-image-044953cd-3774-49a8-9d99-e9170a0288d0.png"
                  alt="Abonga Mketso"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium text-center">Abonga Mketso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I'm a dedicated marketing student with a strong foundation in Marketing Management,
              Sales Management, Marketing Research, and Marketing Communication. My journey has
              taken me from Murray High School to Northlink College, and now to Capaciti where I'm
              completing my in-service training.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              What sets me apart is my passion for Artificial Intelligence. I've earned 14
              certificates across Google AI Essentials and an AI Bootcamp, covering everything
              from prompt engineering to machine learning. I believe the future of marketing
              lies at the intersection of creativity and AI-driven insights.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <item.icon size={20} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
