type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
};

export function PageHero({ eyebrow, title, description, stats }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(190,242,100,0.12),transparent_30%),linear-gradient(180deg,rgba(11,18,23,0.92),rgba(8,12,16,0.96))] p-8 sm:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.03)_30%,transparent_60%)]" />
      <div className="relative max-w-4xl">
        <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-200/75">{eyebrow}</div>
        <h1 className="max-w-3xl font-[family:var(--font-display)] text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{description}</p>
        {stats?.length ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/4 p-4">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-white/55">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
