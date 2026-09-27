import { createFileRoute } from '@tanstack/react-router'
import { ContactLine, PolicyPage } from '#/components/PolicyPage'

export const Route = createFileRoute('/returns')({
  head: () => ({ meta: [{ title: 'Returns & Exchanges — HighCaliberWorkz' }] }),
  component: ReturnsPage,
})

function ReturnsPage() {
  return (
    <PolicyPage title="Returns & Exchanges" updated="September 27, 2026">
      <p>
        Every item is made to order just for you, so we can&apos;t accept returns or exchanges for
        change of mind, wrong size, or wrong color. Please check the product details and size
        info before you order.
      </p>

      <h2>What we will fix</h2>
      <p>If something went wrong on our end, we&apos;ll make it right with a free replacement or a refund when your order:</p>
      <ul>
        <li>arrives damaged or defective (for example, a manufacturing flaw, warped print, or ink issue);</li>
        <li>was misprinted — wrong design placement, wrong colors, or the wrong item was sent; or</li>
        <li>was lost in transit.</li>
      </ul>
      <p>In most cases you won&apos;t need to send the item back.</p>

      <h2>Deadline</h2>
      <ul>
        <li>Damaged, defective, misprinted, or wrong items: report within 30 days of delivery.</li>
        <li>Lost packages: report within 30 days of the estimated delivery date.</li>
      </ul>
      <p>We can&apos;t honor claims submitted after that window.</p>

      <h2>How to report a problem</h2>
      <p>Email us with:</p>
      <ul>
        <li>your order number;</li>
        <li>a short description of the issue; and</li>
        <li>
          a clear, well-lit photo of the entire item showing the problem (if several items are
          affected, one photo with all of them together).
        </li>
      </ul>
      <p>
        We&apos;ll review your report and follow up with next steps. A photo is required for
        damage, defect, and misprint claims.
      </p>

      <h2>Cancellations &amp; changes</h2>
      <p>
        Production can start soon after you order. If you need to change or cancel, email us as
        soon as possible — we&apos;ll do our best, but once an item is in production we
        can&apos;t guarantee a change or cancellation.
      </p>

      <h2>Returned to sender</h2>
      <p>
        If a package is returned because of an incorrect or incomplete address, or because it
        wasn&apos;t picked up, contact us about reshipping. Reshipping in that case may cost
        extra.
      </p>

      <ContactLine />
    </PolicyPage>
  )
}
