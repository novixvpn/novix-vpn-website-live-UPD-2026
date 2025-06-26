import Image from "next/image";
import Link from "next/link";

export default function VPNPromoBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className=" shadow-lg flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-blue-100 p-8 flex items-center justify-center md:w-1/4">
          <Image
            src="image/48-Hour-Money-Back-Guarantee.png"
            alt="30-days"
            width={500}
            height={500}
          />
        </div>

        <div className="p-8 md:w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Everyday online security — for everyone
          </h2>
          <p className="text-gray-600 mb-6">
            Try Novix VPN risk-free with our 48-hours money-back guarantee.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.novix.mobile"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full"
          >
            Get NovixVPN
          </Link>
        </div>
      </div>
    </section>
  );
}
