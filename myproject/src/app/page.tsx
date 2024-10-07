import Link from "next/link";

export default function HomePage() {
  return (
    <div >
  <div className="flex justify-between bg-gray-700 text-white text-5xl p-8 ">
    <nav className="w-full" >
    <ul className="flex justify-center gap-x-9" >
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/service">Services</Link></li>
    </ul>
    </nav>
  </div>
  <main className="flex justify-center bg-green-300 text-6xl  p-8">This is Home Page</main>
  </div>
  );
}
