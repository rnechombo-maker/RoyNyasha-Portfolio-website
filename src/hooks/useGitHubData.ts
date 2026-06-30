import { useEffect, useState } from 'react';
import { githubLanguageStats, githubRepos } from '@constants/siteData';
import type { GitHubRepo, GitLanguageStat } from '@/types/site';

interface GitHubState {
  repos: GitHubRepo[];
  languages: GitLanguageStat[];
  loading: boolean;
}

export function useGitHubData(username = 'rnechombo-maker') {
  const [state, setState] = useState<GitHubState>({
    repos: githubRepos,
    languages: githubLanguageStats,
    loading: true
  });

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`);
        if (!response.ok) {
          throw new Error('GitHub request failed');
        }

        const repos = (await response.json()) as Array<{
          name: string;
          description: string | null;
          language: string | null;
          stargazers_count: number;
          html_url: string;
        }>;

        const mappedRepos: GitHubRepo[] = repos.map((repo, index) => ({
          name: repo.name,
          description: repo.description ?? 'Repository details coming soon.',
          language: repo.language ?? 'Code',
          stars: repo.stargazers_count,
          url: repo.html_url,
          pinned: index < 4
        }));

        const totals = new Map<string, number>();
        mappedRepos.forEach((repo) => {
          totals.set(repo.language, (totals.get(repo.language) ?? 0) + 1);
        });

        const languageTotal = mappedRepos.length || 1;
        const languages: GitLanguageStat[] = Array.from(totals.entries())
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / languageTotal) * 100)
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        if (active) {
          setState({
            repos: mappedRepos.length ? mappedRepos : githubRepos,
            languages: languages.length ? languages : githubLanguageStats,
            loading: false
          });
        }
      } catch {
        if (active) {
          setState({
            repos: githubRepos,
            languages: githubLanguageStats,
            loading: false
          });
        }
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, [username]);

  return state;
}
