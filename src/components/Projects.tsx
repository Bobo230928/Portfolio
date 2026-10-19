import { FolderGit2, Link as LinkIcon, MessageSquare, FileText, Bot, Lightbulb } from 'lucide-react';

const projects = [
  {
    title: 'Sentiment Analysis',
    description: 'Analyzed text data to determine emotional tone — positive, negative, or neutral — enabling better understanding of customer feedback and brand perception.',
    icon: MessageSquare,
    tags: ['AI', 'Data Analysis', 'NLP'],
    link: 'https://github.com/Bobo230928/Sentiment-Analysis',
  },
  {
    title: 'Digital Store Chatbot',
    description: 'Built a chatbot for an online store to assist customers with product inquiries, navigation, and support, improving the overall shopping experience.',
    icon: Bot,
    tags: ['Chatbot', 'AI', 'E-commerce'],
    link: 'https://github.com/Bobo230928/Ai-Chatbot',
  },
  {
    title: 'AI Content Generator',
    description: 'Developed a tool that leverages AI to automatically generate written content, helping marketers and businesses create copy more efficiently.',
    icon: FileText,
    tags: ['AI', 'Content', 'Automation'],
    link: 'https://omnichannel-business-0nui.bolt.host/',
  },
  {
    title: 'AI Solution App',
    description: 'Created an application that integrates AI solutions to address real business problems, combining marketing knowledge with AI tools.',
    icon: Lightbulb,
    tags: ['AI', 'Business', 'Solutions'],
    link: 'https://github.com/Bobo230928/UbuntuCare',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Projects I built during my in-service training at Capaciti, combining marketing knowledge with AI skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 border border-slate-600 rounded-lg py-3 flex items-center justify-center gap-2 text-slate-400 hover:text-teal-300 hover:border-teal-500/50 transition-colors"
                >
                  <LinkIcon size={16} />
                  <span className="text-xs font-medium">View project</span>
                </a>
              ) : (
                <div className="mt-4 border-2 border-dashed border-slate-600 rounded-lg py-4 flex items-center justify-center gap-2 text-slate-500">
                  <LinkIcon size={16} />
                  <span className="text-xs">Project link coming soon</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <FolderGit2 size={16} />
            <span>All projects completed at Capaciti during in-service training</span>
          </div>
        </div>
      </div>
    </section>
  );
}
