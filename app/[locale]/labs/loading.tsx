function SkeletonCard() {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60">
      <div className="w-[72px] h-[72px] shrink-0 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
      <div className="flex-[1] border-r border-slate-200 dark:border-slate-700 pr-5 flex flex-col justify-center gap-2">
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
        <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
      </div>
      <div className="flex-[1] pl-5 flex flex-col justify-center gap-2">
        <div className="h-3 w-1/3 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
        <div className="h-5 w-20 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse mt-1" />
      </div>
    </div>
  );
}

export default function LabsLoading() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <div className="h-8 w-40 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto animate-pulse" />
        <div className="h-4 w-64 bg-slate-100 dark:bg-slate-800 rounded mx-auto mt-2 animate-pulse" />
      </div>
      <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl mb-8 animate-pulse" />
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  );
}
