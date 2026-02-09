import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {"guido@email.com"}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          {"Built with Next.js & Tailwind"}
        </p>
      </div>
    </footer>
  )
}
