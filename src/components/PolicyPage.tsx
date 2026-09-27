import type { ReactNode } from 'react'

export const CONTACT_EMAIL = 'highcaliberworkz@gmail.com'

export function PolicyPage({
  eyebrow = 'Policies',
  title,
  updated,
  children,
}: {
  eyebrow?: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">{eyebrow}</p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-xs text-zinc-600">Last updated: {updated}</p>
      <div className="policy mt-8 space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:tracking-wide [&_h2]:text-zinc-100 [&_h2]:uppercase [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-gold [&_a]:underline">
        {children}
      </div>
    </div>
  )
}

export function ContactLine() {
  return (
    <p>
      Questions? Email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      HighCaliberWorkz · Queens, NY.
    </p>
  )
}
