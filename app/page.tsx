import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-maroon text-white">
      <nav className="w-full flex justify-center gap-8 py-6 bg-maroon-dark text-maroon-light text-lg font-semibold shadow">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl max-w-2xl text-center mb-8">
          Hi! I&apos;m a passionate professional. Explore my work, background, and how to get in touch.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/projects"
            className="bg-maroon-light hover:bg-maroon-dark text-white font-bold py-2 px-6 rounded transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-white text-maroon font-bold py-2 px-6 rounded border border-maroon hover:bg-maroon-light hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </main>
      <footer className="w-full py-4 text-center bg-maroon-dark text-maroon-light mt-8">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
