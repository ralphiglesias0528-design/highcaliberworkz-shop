import { Link, createFileRoute } from '@tanstack/react-router'
import { asset } from '#/lib/asset'

export const Route = createFileRoute('/character')({ component: CharacterPage })

function CharacterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
        Character
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
        El Gordo Ninja
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
        Street silhouette. Island swagger. El Gordo Ninja is the face of the
        High Caliber universe — figure sheet ready, Shop3d lane open. Merch
        labels stay El Gordo Ninja or High Caliber. Never Workz on the art.
      </p>

      <div className="mt-10 overflow-hidden border border-gold/30 bg-black">
        <img
          src={asset('/images/el-gordo-figure-sheet.png')}
          alt="El Gordo Ninja figure sheet"
          className="mx-auto w-full max-w-3xl object-contain"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/shop/$slug"
          params={{ slug: 'el-gordo-figure' }}
          className="border border-gold bg-gold px-6 py-3 text-xs font-bold tracking-[0.2em] text-charcoal uppercase hover:bg-transparent hover:text-gold"
        >
          Figure product
        </Link>
        <a
          href="https://shop3d.io"
          target="_blank"
          rel="noreferrer"
          className="border border-pr-red px-6 py-3 text-xs font-bold tracking-[0.2em] text-pr-red uppercase hover:bg-pr-red hover:text-white"
        >
          Shop3d
        </a>
      </div>
    </div>
  )
}
