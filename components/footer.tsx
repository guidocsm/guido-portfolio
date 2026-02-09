import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <a href="mailto:guidoignaciocrespo@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          guidoignaciocrespo@gmail.com
        </a>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/guidocsm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
