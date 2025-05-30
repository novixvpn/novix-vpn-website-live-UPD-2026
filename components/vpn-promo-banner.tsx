import Image from "next/image";
import Link from "next/link";

export default function VPNPromoBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-blue-100 p-8 flex items-center justify-center md:w-1/4">
          <Image src="/30-days.webp" alt="30-days" width={500} height={500} />
        </div>

        <div className="p-8 md:w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Everyday online security — for everyone
          </h2>
          <p className="text-gray-600 mb-6">
            Change your virtual location, unblock censored websites and
            services, and access the internet with confidence with NovixVPN. If
            you are not 100% satisfied, tell us within 30 days of the purchase
            date and get a full refund.
          </p>
          <Link
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full"
          >
            Get NovixVPN
          </Link>
        </div>
      </div>
    </section>
  );
}
