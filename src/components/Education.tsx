import { School, Calendar, MapPin, Award } from 'lucide-react';

const educationTimeline = [
  {
    year: '2022',
    title: 'High School Completion',
    institution: 'Murray High School',
    description: 'Completed my secondary education, building a strong academic foundation.',
    icon: School,
  },
  {
    year: '2023',
    title: 'Basic Computer Course',
    institution: 'Thusong Service Centre, Kwanokuthula',
    description: 'Gained foundational computer and digital literacy skills.',
    icon: Award,
  },
  {
    year: '2024',
    title: 'N4-N6 Certificate in Marketing Management',
    institution: 'Northlink College',
    description: 'Studied Marketing Management, Sales Management, Marketing Research, and Marketing Communication.',
    icon: School,
  },
  {
    year: '2026',
    title: 'In-Service Training',
    institution: 'Capaciti',
    description: 'Currently completing in-service training, working on AI and marketing projects while earning AI certifications.',
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Education & Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-emerald-500 md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationTimeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-md md:-translate-x-1/2 z-10" />

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 group">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 mb-3 flex items-center gap-1.5"
                       style={{ flexDirection: i % 2 === 0 ? 'row-reverse' : 'row' }}
                    >
                      <MapPin size={14} className="text-teal-500" />
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
