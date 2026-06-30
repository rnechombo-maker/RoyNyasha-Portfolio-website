import { ExternalLink, Github, Star } from 'lucide-react';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { GITHUB_PROFILE } from '@constants/brand';
import { githubContributionDays } from '@constants/siteData';
import { useGitHubData } from '@hooks/useGitHubData';
import { cn } from '@utils/cn';

export default function GithubSection() {
  const { repos, languages, loading } = useGitHubData();
  const pinned = repos.filter((repo) => repo.pinned).slice(0, 4);
  const latest = repos.slice(0, 4);

  return (
    <SectionWrapper
      id="github"
      eyebrow="GitHub"
      title="A public trail of experiments, systems, and continuous learning."
      description="This section uses live GitHub data when available and falls back gracefully so the experience stays fast and reliable."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl font-semibold text-textPrimary">Contribution Graph</h3>
              <p className="mt-2 text-sm text-textPrimary/62">Consistent building, iteration, and learning over time.</p>
            </div>
            <a className="icon-link" href={GITHUB_PROFILE} target="_blank" rel="noreferrer" data-cursor="interactive">
              <Github size={18} /> Profile
            </a>
          </div>
          <div className="contribution-grid" aria-label="GitHub contribution graph preview">
            {githubContributionDays.map((day, index) => (
              <span key={index} className={cn(day.level > 0 && `level-${day.level}`)} />
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display text-3xl font-semibold text-textPrimary">Most Used Languages</h3>
          <p className="mt-2 text-sm text-textPrimary/62">A language mix shaped by full-stack product work, automation, and experimentation.</p>
          <div className="mt-6 space-y-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm text-textPrimary/78">{language.name}</span>
                  <span className="text-sm text-muted">{language.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full rounded-full bg-highlight" style={{ width: `${language.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
          {loading ? <p className="mt-4 text-sm text-muted">Fetching live repository data...</p> : null}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="font-display text-3xl font-semibold text-textPrimary">Pinned Repositories</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {pinned.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-accent/12 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-highlight/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60"
                data-cursor="interactive"
              >
                <div className="flex items-center justify-between gap-3">
                  <Github className="text-highlight" size={18} aria-hidden />
                  {repo.stars ? (
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <Star size={14} /> {repo.stars}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 font-semibold text-textPrimary">{repo.name}</p>
                <p className="mt-2 text-sm leading-6 text-textPrimary/62">{repo.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">{repo.language}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-display text-3xl font-semibold text-textPrimary">Latest Repositories</h3>
          <div className="mt-5 space-y-4">
            {latest.map((repo) => (
              <a
                key={`${repo.name}-latest`}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-accent/12 bg-white/[0.03] p-5 transition duration-300 hover:border-highlight/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60"
                data-cursor="interactive"
              >
                <div>
                  <p className="font-semibold text-textPrimary">{repo.name}</p>
                  <p className="mt-2 text-sm leading-6 text-textPrimary/62">{repo.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 text-xs text-muted">
                  <span>{repo.language}</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
