import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-accent"></div>
        </div>

        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6 animate-fade-in">
            <p className="text-xl text-gray-custom leading-relaxed">
              {t('intro')}
            </p>
            <p className="text-lg text-gray-custom leading-relaxed">
              I specialize in building modern web applications with clean code and beautiful design. 
              My approach combines technical expertise with creative problem-solving to deliver 
              exceptional user experiences.
            </p>
          </div>

          <div className="bg-navy/5 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <p className="text-gray-custom font-medium">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            {t('skills')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-cream border-2 border-navy/10 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-accent">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center space-x-2 text-gray-custom"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            {t('experience')}
          </h2>
          <div className="space-y-12">
            {[
              {
                title: 'Senior Full Stack Developer',
                company: 'Tech Company Inc.',
                period: '2022 - Present',
                description: 'Leading development of enterprise web applications',
              },
              {
                title: 'Full Stack Developer',
                company: 'Startup Co.',
                period: '2020 - 2022',
                description: 'Built and maintained multiple client projects',
              },
              {
                title: 'Frontend Developer',
                company: 'Digital Agency',
                period: '2018 - 2020',
                description: 'Created responsive websites and web applications',
              },
            ].map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold">{job.title}</h3>
                  <p className="text-accent font-medium">{job.company}</p>
                  <p className="text-gray-custom text-sm">{job.period}</p>
                  <p className="text-gray-custom">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            {t('education')}
          </h2>
          <div className="bg-navy/5 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-2">
              Bachelor of Computer Science
            </h3>
            <p className="text-accent font-medium mb-2">University Name</p>
            <p className="text-gray-custom">2014 - 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}
