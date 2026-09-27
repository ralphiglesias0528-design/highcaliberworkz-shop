import { createFileRoute } from '@tanstack/react-router'
import { ContactLine, PolicyPage } from '#/components/PolicyPage'

export const Route = createFileRoute('/privacy')({
  head: () => ({ meta: [{ title: 'Privacy Policy — HighCaliberWorkz' }] }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <PolicyPage title="Privacy" updated="September 27, 2026">
      <p>
        HighCaliberWorkz (Queens, NY) keeps this simple: we only collect what we need to run the
        shop and get your order to you, and we never sell your personal information.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Order details</strong> — when you place an order: your name, email, shipping
          address, and what you bought.
        </li>
        <li>
          <strong>Messages</strong> — anything you send us by email, such as order questions or
          problem reports (including photos).
        </li>
      </ul>

      <h2>Payments</h2>
      <p>
        Payments are handled by our payment processor. We don&apos;t see or store your full card
        number. Checkout on this site is currently a preview (no charges); when live checkout
        launches, your payment details will be entered with the processor, under its own
        privacy policy.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To make, ship, and track your order.</li>
        <li>To answer questions and handle returns or problem reports.</li>
        <li>To meet legal, tax, and accounting obligations.</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        We share only what&apos;s needed to fulfill your order — for example, your name and
        shipping address with our print-on-demand partner (Printful) and shipping carriers, and
        payment details with the payment processor. We don&apos;t sell or rent your personal
        information.
      </p>

      <h2>Cookies &amp; browser storage</h2>
      <p>
        Your cart is saved in your browser (local storage / cookies) so it&apos;s still there when
        you come back. We don&apos;t use advertising cookies. Our website host may keep standard
        server logs (such as IP address and browser type) for security and reliability.
      </p>

      <h2>Your choices</h2>
      <p>
        You can clear your cart anytime by clearing your browser&apos;s site data. To ask what
        information we have about you, or to have it corrected or deleted, email us.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as the shop grows (for example, when we move to a new checkout
        provider). The date at the top shows the latest version.
      </p>

      <ContactLine />
    </PolicyPage>
  )
}
