import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-accent text-lg font-medium">{t('greeting')}</p>
            <h1 className="text-6xl md:text-5xl font-display font-bold leading-tight">
              {t('name')}
            </h1>
            <h2 className="text-2xl md:text-2xl text-gray-custom font-light">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-custom leading-relaxed max-w-lg">
              {t('subtitle')}
            </p>
            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-block bg-navy text-cream px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 font-medium hover:scale-105 transform"
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden md:block relative">
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-3xl transform rotate-6 animate-float"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-navy/10 to-accent/10 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl font-display font-bold text-navy/5">SelinaChen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-navy/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('aboutPreview')}
          </h2>
          <Link
            href="/about"
            className="inline-block text-accent hover:text-accent-light transition-colors font-medium text-lg"
          >
            Learn more about me →
          </Link>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { number: '20+', label: 'Projects Completed' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-8 rounded-2xl hover:bg-navy/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-display font-bold text-accent">
                {stat.number}
              </div>
              <div className="text-gray-custom font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
