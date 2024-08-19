import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-4xl font-extrabold text-[rgba(0,0,0,0.8)] mb-2">
        404-Not Found
      </h2>
      <p className="text-slate-900 font-medium mb-5">
       Page Not Available. Check The Url
      </p>
      <Link href="/" className="underline">Click To Return Home</Link>
    </div>
  );
}
