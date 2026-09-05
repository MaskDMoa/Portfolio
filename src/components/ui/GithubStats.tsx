"use client";

import { WindowFrame } from "@/components/ui/WindowFrame";
import React, { useEffect, useState } from "react";

export function GithubStats() {
  const [data, setData] = useState<{ userData: any, reposData: any[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/github')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="hidden md:block w-full max-w-sm" data-testid="github-stats-loading">
        <WindowFrame title="stats.exe" accentColor="#c9a84c">
          <div className="p-4 text-[var(--foreground-muted)] text-sm animate-pulse">
            Carregando dados...
          </div>
        </WindowFrame>
      </div>
    );
  }

  if (error || !data || !data.userData) {
    return (
      <div className="hidden md:block w-full max-w-sm" data-testid="github-stats-error">
        <WindowFrame title="stats.exe" accentColor="#c9a84c">
          <div className="p-4 text-[var(--foreground-muted)] text-sm">
            [Erro] Não foi possível carregar os dados.
          </div>
        </WindowFrame>
      </div>
    );
  }

  const { userData, reposData } = data;
  const totalStars = reposData?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0;
  
  // Calcula linguagem mais usada
  const languages = reposData?.reduce((acc: any, repo: any) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {}) || {};
  const topLanguage = Object.keys(languages).sort((a, b) => languages[b] - languages[a])[0] || "N/A";

  return (
    <div className="hidden md:block w-full max-w-sm" data-testid="github-stats">
      <WindowFrame title="stats.exe" accentColor="#7a9bb5">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={userData.avatar_url} 
              alt="GitHub Avatar" 
              className="w-12 h-12 rounded-sm border border-[var(--border)]"
            />
            <div>
              <h3 className="font-bold text-[var(--foreground)] text-sm">@{userData.login}</h3>
              <p className="text-[var(--foreground-muted)] text-xs line-clamp-1">{userData.bio || "Engenharia de Computação"}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="border border-[var(--border-strong)] p-2 bg-[var(--surface-alt)]">
              <p className="text-[var(--foreground-muted)] text-[10px] uppercase tracking-widest mb-1">Repositórios</p>
              <p className="font-bold text-base" style={{ color: "var(--accent-blue)" }}>{userData.public_repos}</p>
            </div>
            <div className="border border-[var(--border-strong)] p-2 bg-[var(--surface-alt)]">
              <p className="text-[var(--foreground-muted)] text-[10px] uppercase tracking-widest mb-1">Total Stars</p>
              <p className="font-bold text-base" style={{ color: "var(--accent-yellow)" }}>{totalStars}</p>
            </div>
            <div className="border border-[var(--border-strong)] p-2 bg-[var(--surface-alt)]">
              <p className="text-[var(--foreground-muted)] text-[10px] uppercase tracking-widest mb-1">Linguagem Top</p>
              <p className="font-bold text-base" style={{ color: "var(--accent-green)" }}>{topLanguage}</p>
            </div>
            <div className="border border-[var(--border-strong)] p-2 bg-[var(--surface-alt)]">
              <p className="text-[var(--foreground-muted)] text-[10px] uppercase tracking-widest mb-1">Seguidores</p>
              <p className="font-bold text-base" style={{ color: "var(--accent-orange)" }}>{userData.followers}</p>
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
