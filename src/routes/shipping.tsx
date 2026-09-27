import { Link, createFileRoute } from '@tanstack/react-router'
import { ContactLine, PolicyPage } from '#/components/PolicyPage'

export const Route = createFileRoute('/shipping')({
  head: () => ({ meta: [{ title: 'Shipping Policy — HighCaliberWorkz' }] }),
  component: ShippingPage,
})

function ShippingPage() {
  return (
    <PolicyPage title="Shipping" updated="September 27, 2026">
      <p>
        Every High Caliber piece is printed or embroidered on demand after you order. Our
        production and fulfillment partner, Printful, makes each item and ships it straight to
        you — we don&apos;t hold inventory.
      </p>

      <h2>Production time</h2>
      <p>
        Because items are made to order, production comes before shipping. Printful reports an
        average fulfillment time of 2–5 business days to make and pack an order. Busy periods
        (like holidays) can take longer.
      </p>

      <h2>Delivery time</h2>
      <p>
        Once your order ships, delivery time depends on the shipping method and your location.
        Estimated delivery = production time + shipping time. Estimates are not guarantees —
        carrier delays, stock issues, or failed delivery attempts can push delivery past the
        estimate. Shipping options and costs are shown at checkout.
      </p>

      <h2>Tracking &amp; multiple packages</h2>
      <ul>
        <li>You&apos;ll get tracking information when your order ships.</li>
        <li>
          Some orders ship in more than one package — for example, items made at different
          fulfillment locations, or products that are packed separately.
        </li>
      </ul>

      <h2>International orders</h2>
      <ul>
        <li>
          Orders shipped from a facility in a different region than the delivery address may be
          charged customs, duties, or handling fees on delivery. These are the buyer&apos;s
          responsibility.
        </li>
        <li>
          Printful can&apos;t ship to some countries and regions because of legal restrictions or
          carrier limitations.
        </li>
      </ul>

      <h2>Address accuracy</h2>
      <p>
        Please double-check your shipping address. We can&apos;t be responsible for orders sent
        to an incorrect or incomplete address entered at checkout; reshipping in that case may
        cost extra.
      </p>

      <h2>Late, lost, or damaged packages</h2>
      <p>
        If your order is past its estimated delivery date, give it a day or two, then email us.
        Lost or damaged packages are covered under our{' '}
        <Link to="/returns">Returns &amp; Exchanges policy</Link> — report them within 30 days of
        the (estimated) delivery date.
      </p>

      <ContactLine />
    </PolicyPage>
  )
}
