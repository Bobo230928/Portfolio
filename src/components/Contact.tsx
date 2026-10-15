import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Contact Me</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:mketsoabonga8@gmail.com"
            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors group-hover:scale-110 transition-transform duration-300">
              <Mail size={26} className="text-teal-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Email</p>
            <p className="text-sm text-slate-500 break-all">mketsoabonga8@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:0720664406"
            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors group-hover:scale-110 transition-transform duration-300">
              <Phone size={26} className="text-teal-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Phone</p>
            <p className="text-sm text-slate-500">0720664406</p>
          </a>

          {/* Location */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-center">
            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors group-hover:scale-110 transition-transform duration-300">
              <MapPin size={26} className="text-teal-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Location</p>
            <p className="text-sm text-slate-500">Bloekombos, Kraaifontein 7570</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:mketsoabonga8@gmail.com?subject=Opportunity%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <Send size={18} />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
