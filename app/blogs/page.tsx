import Link from "next/link";

export default function Blogs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-4">
      <span className="text-6xl font-extrabold text-red-600">503</span>
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">
        This page is under construction
      </h1>
      <p className="mt-2 text-gray-600">
        We’re currently working on this page. Please check back later.
      </p>
      <Link href="/" passHref>
        <button className="mt-6 px-6 py-3 border border-black  rounded-md hover:bg-black hover:text-white transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
