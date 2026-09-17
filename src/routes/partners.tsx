import { createFileRoute } from '@tanstack/react-router'
import { partners } from '#/lib/partners'

export const Route = createFileRoute('/partners')({ component: PartnersPage })

function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
        Network
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
        Partners
      </h1>
      <p className="mt-4 max-w-xl text-sm text-zinc-500">
        Production, collectibles, pins, trays. Active lanes and parked tray
        partners until the next drop locks.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {partners.map((p) => (
          <article
            key={p.id}
            className="border border-white/10 bg-surface p-5 transition hover:border-gold/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg tracking-wide text-zinc-100 uppercase">
                {p.name}
              </h2>
              <span
                className={`shrink-0 text-[10px] tracking-widest uppercase ${
                  p.status === 'parked' ? 'text-zinc-500' : 'text-gold'
                }`}
              >
                {p.status}
              </span>
            </div>
            <p className="mt-1 text-xs tracking-wide text-pr-red uppercase">
              {p.role}
            </p>
            <p className="mt-3 text-sm text-zinc-500">{p.description}</p>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-xs tracking-widest text-gold uppercase hover:underline"
              >
                Visit →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
