import Link from "next/link";

export default function VpnComparison() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Benefits of Paid VPNs over Free VPNs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Paid VPN Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Free VPN</h3>
            <p className="text-gray-600">
              Free VPNs may seem like a cheaper option, but they often lack
              modern privacy and security features. Even worse, some free VPNs
              have been reported to track and sell user data to third-parties.
              So they aren’t always free; either you pay money or data.
            </p>
          </div>

          {/* Free VPN Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Paid VPN</h3>
            <p className="text-gray-600">
              Paid VPNs are equipped with advanced features that unquestionably
              keeps your online activity completely private and secure. They
              often offer comprehensive customer support and continuous
              upgrades. Trusted VPN providers, like NovixVPN, make sure every
              penny spent by their customers is worth it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.novix.mobile"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Get NovixVPN
          </Link>
        </div>
      </div>
    </section>
  );
}
