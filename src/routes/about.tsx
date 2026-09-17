import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
        About
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
        About High Caliber
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
        <p>
          I&apos;m a Boricua kid, born and raised in the Bronx. In my mid-20s I
          moved out to Queens and got hit with a whole different mix of
          cultures — languages, styles, hustles, all stacked on top of each
          other. That shift stuck with me.
        </p>
        <p>
          I was raised rough. Not for a story. That&apos;s just how it was. The
          Bronx taught me early what loyalty looks like, what pressure does,
          and what it means to keep moving when nothing&apos;s handed to you. I
          wanted my clothing line to carry that same energy — real, loud when
          it needs to be, and proud of where it comes from.
        </p>
        <p>
          High Caliber isn&apos;t random designs. It&apos;s Puerto Rico in my
          DNA, Bronx grit, the cultures I absorbed in Queens, and the mindset
          of being built different. Faith, family, hustle, progress —
          everyday. More than a brand. It&apos;s how I came up, stitched into
          the fit.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/shop"
          className="inline-block border border-gold px-6 py-3 text-xs font-bold tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-charcoal"
        >
          Enter the shop
        </Link>
        <Link
          to="/character"
          className="inline-block border border-pr-red px-6 py-3 text-xs font-bold tracking-[0.2em] text-pr-red uppercase hover:bg-pr-red hover:text-white"
        >
          Meet El Gordo Ninja
        </Link>
      </div>
    </div>
  )
}
