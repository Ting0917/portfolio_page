import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '🛍️',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '📋',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard for business metrics',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '📊',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Social Media Platform',
      description: 'Social networking site with user profiles and messaging',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      image: '🌐',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather information with beautiful UI',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌤️',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system for blogging',
      tech: ['Next.js', 'MDX', 'Contentful', 'Vercel'],
      image: '✍️',
      link: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-accent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-cream border-2 border-navy/10 rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent-light/10 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-custom">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-navy/5 rounded-full text-sm text-navy font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-navy text-cream px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                  >
                    {t('viewProject')}
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border-2 border-navy rounded-lg hover:bg-navy hover:text-cream transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
