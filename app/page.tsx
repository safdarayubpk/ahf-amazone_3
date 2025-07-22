import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const products = [
  {
    id: 1,
    name: "Performance Air Intake",
    price: 199.99,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "High-Flow Exhaust",
    price: 499.0,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Racing Spark Plugs",
    price: 59.49,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Turbocharger Kit",
    price: 2599.99,
    image: "/placeholder.svg",
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-semibold">
            AHF Auto&nbsp;Parts
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="sm">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold">AHF Auto Parts</h1>
          <p className="mt-2 text-lg text-gray-600">
            Quality performance parts delivered fast.
          </p>
        </section>

        {/* Products */}
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                className="mb-4 h-32 w-32 object-cover"
              />
              <h2 className="font-medium">{p.name}</h2>
              <p className="text-sm text-gray-500">${p.price.toFixed(2)}</p>
            </div>
          ))}
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-semibold">
              AHF Auto&nbsp;Parts
            </Link>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">
              Your trusted source for high-performance automotive parts
              delivered fast and at unbeatable prices.This is a test.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Youtube" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Quick Links</h3>
            <Link href="/" className="block hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="block hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="block hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Categories</h3>
            <Link href="/category/engine-performance" className="block hover:text-primary">
              Engine &amp; Performance
            </Link>
            <Link href="/category/suspension-steering-brakes" className="block hover:text-primary">
              Suspension, Steering &amp; Brakes
            </Link>
            <Link href="/category/electrical-lighting" className="block hover:text-primary">
              Electrical &amp; Lighting
            </Link>
            <Link href="/category/body-exterior" className="block hover:text-primary">
              Body &amp; Exterior
            </Link>
            <Link href="/category/interior-comfort-safety" className="block hover:text-primary">
              Interior, Comfort &amp; Safety
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Join our mailing list for exclusive offers.
            </p>
            <form className="flex max-w-xs items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full flex-1 rounded border px-3 py-2 text-sm focus:outline-none"
              />
              <Button size="sm">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t bg-gray-100 py-4 text-center text-sm text-gray-600">
          © 2025 All rights reserved.
        </div>
      </footer>
    </>
  );
}