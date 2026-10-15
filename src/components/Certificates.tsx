import { Award, Sparkles } from 'lucide-react';
import CertificateCard from './CertificateCard';

const googleAICerts = [
  'Introduction to AI',
  'Maximize Productivity with AI Tools',
  'Discover the Art of Prompting',
  'Use AI Responsibly',
  'Stay Ahead of the AI Curve',
  'Google AI Essentials',
];

const bootcampCerts = [
  'Generative AI: Prompt Engineering Basics',
  'AI for Everyone',
  'Introduction to Artificial Intelligence (AI)',
  'Python for Data Science & AI Development',
  'Introduction to Generative AI',
  'Generative AI with Large Language Models',
  'Supervised Machine Learning: Regression and Classification',
  'Unsupervised Learning, Recommenders, Reinforcement Learning',
];

const otherCerts = [
  'N4-N6 Certificate in Marketing Management — Northlink College (2024)',
  'Basic Computer Certificate — Thusong Service Centre, Kwanokuthula (2023)',
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Certificates</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            A collection of my certifications across AI, marketing, and digital skills. Click any certificate space to upload an image of your certificate.
          </p>
        </div>

        {/* Google AI Essentials */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Google AI Essentials</h3>
              <p className="text-sm text-slate-500">6 Certificates</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {googleAICerts.map((cert, i) => (
              <CertificateCard key={`google-ai-${i}`} certKey={`google-ai-${i}`} cert={cert} accent="teal" />
            ))}
          </div>
        </div>

        {/* AI Bootcamp */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <Award size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Artificial Intelligence Bootcamp (AI)</h3>
              <p className="text-sm text-slate-500">8 Certificates</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bootcampCerts.map((cert, i) => (
              <CertificateCard key={`bootcamp-${i}`} certKey={`bootcamp-${i}`} cert={cert} accent="emerald" />
            ))}
          </div>
        </div>

        {/* Other certificates */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
              <Award size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Other Qualifications</h3>
              <p className="text-sm text-slate-500">2 Certificates</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {otherCerts.map((cert, i) => (
              <CertificateCard key={`other-${i}`} certKey={`other-${i}`} cert={cert} accent="slate" uploadable={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
